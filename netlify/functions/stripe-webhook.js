const Stripe = require('stripe');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const stripe = new Stripe(process.env.API_Secret_Key);
    const webhookSecret = process.env.Stripe_Webhook_Secret;

    let stripeEvent;

    try {
        // Verify the request is actually coming from Stripe
        stripeEvent = stripe.webhooks.constructEvent(
            event.body,
            event.headers['stripe-signature'],
            webhookSecret
        );
    } catch (err) {
        console.error('Webhook signature verification failed:', err.message);
        return { statusCode: 400, body: `Webhook Error: ${err.message}` };
    }

    // Only handle successful checkout completions
    if (stripeEvent.type === 'checkout.session.completed') {
        const session = stripeEvent.data.object;
        const meta = session.metadata || {};

        // Build the line items list from metadata isn't possible here,
        // so we fetch the full session with line items from Stripe
        let itemsList = 'See Stripe dashboard for full item details.';
        try {
            const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
                expand: ['line_items.data.price.product'],
            });
            if (fullSession.line_items && fullSession.line_items.data.length > 0) {
                itemsList = fullSession.line_items.data
                    .map(item => `• ${item.description} x${item.quantity} — $${(item.amount_total / 100).toFixed(2)}`)
                    .join('\n');
            }
        } catch (e) {
            console.error('Could not retrieve line items:', e.message);
        }

        const orderTotal = `$${(session.amount_total / 100).toFixed(2)}`;

        // Send email via Resend
        try {
            const isTestOrder = !session.livemode;

            const recipientEmail = isTestOrder ? process.env.TEST_ORDER_EMAIL : 'Mana.bakery@outlook.com';
            const originalSubject = `🧁 New Order from ${meta.customerName || session.customer_details?.name || 'A Customer'}!`;
            const emailSubject = isTestOrder ? `[TEST] ${originalSubject}` : originalSubject;

            const emailResponse = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.Resend_API_Key}`,
                },
                body: JSON.stringify({
                    from: 'orders@manabakeryjax.com',
                    to: recipientEmail,
                    subject: emailSubject,
                    html: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                            <h2 style="color: #5a3e2b; border-bottom: 2px solid #f0e0c8; padding-bottom: 10px;">
                                🧁 New Order Received!
                            </h2>

                            <h3 style="color: #5a3e2b;">Customer Information</h3>
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 8px; font-weight: bold; width: 40%;">Name</td>
                                    <td style="padding: 8px;">${meta.customerName || session.customer_details?.name || '—'}</td>
                                </tr>
                                <tr style="background: #fdf6ee;">
                                    <td style="padding: 8px; font-weight: bold;">Email</td>
                                    <td style="padding: 8px;">${session.customer_details?.email || '—'}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px; font-weight: bold;">Phone</td>
                                    <td style="padding: 8px;">${meta.phone || '—'}</td>
                                </tr>
                            </table>

                            <h3 style="color: #5a3e2b; margin-top: 20px;">
                                ${meta.fulfillmentType === 'Delivery' ? '🚗 Delivery Details' : '🏠 Pickup Details'}
                            </h3>
                            <table style="width: 100%; border-collapse: collapse;">
                                ${meta.fulfillmentType === 'Delivery' ? `
                                <tr>
                                    <td style="padding: 8px; font-weight: bold; width: 40%;">Delivery Address</td>
                                    <td style="padding: 8px;">${meta.deliveryAddress || '—'}</td>
                                </tr>
                                <tr style="background: #fdf6ee;">
                                    <td style="padding: 8px; font-weight: bold;">Delivery Date</td>
                                    <td style="padding: 8px;">${meta.deliveryDate || '—'}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px; font-weight: bold;">Delivery Window</td>
                                    <td style="padding: 8px;">${meta.deliveryTime || '—'}</td>
                                </tr>
                                ` : `
                                <tr>
                                    <td style="padding: 8px; font-weight: bold; width: 40%;">Pickup Date</td>
                                    <td style="padding: 8px;">${meta.pickupDate || '—'}</td>
                                </tr>
                                <tr style="background: #fdf6ee;">
                                    <td style="padding: 8px; font-weight: bold;">Pickup Time</td>
                                    <td style="padding: 8px;">${meta.pickupTime || '—'}</td>
                                </tr>
                                `}
                                <tr style="background: ${meta.fulfillmentType === 'Delivery' ? '#fdf6ee' : 'transparent'};">
                                    <td style="padding: 8px; font-weight: bold;">Special Instructions</td>
                                    <td style="padding: 8px;">${meta.specialInstructions || 'None'}</td>
                                </tr>
                            </table>

                            <h3 style="color: #5a3e2b; margin-top: 20px;">Order Items</h3>
                            <div style="background: #fdf6ee; padding: 15px; border-radius: 8px; white-space: pre-line;">
                                ${itemsList.replace(/•/g, '&bull;')}
                            </div>

                            <div style="margin-top: 20px; padding: 15px; background: #5a3e2b; color: white; border-radius: 8px; text-align: center;">
                                <strong style="font-size: 1.2rem;">Order Total: ${orderTotal}</strong>
                            </div>

                            <p style="margin-top: 20px; color: #888; font-size: 0.9rem; text-align: center;">
                                Payment confirmed via Stripe. View full details in your 
                                <a href="https://dashboard.stripe.com" style="color: #5a3e2b;">Stripe dashboard</a>.
                            </p>
                        </div>
                    `,
                }),
            });

            if (!emailResponse.ok) {
                const errText = await emailResponse.text();
                console.error('Resend error:', errText);
            } else {
                console.log('Order notification email sent successfully!');
            }
        } catch (emailErr) {
            console.error('Failed to send email:', emailErr.message);
        }

        try {
            await saveOrderForInventoryApp(stripe, session);
        }
        catch(inventoryError){
            // The owners still get the email, and the sale can be recorded by hand
            console.error('Could not save order for the inventory app:', inventoryError.message);
        }
    }

    return { statusCode: 200, body: JSON.stringify({ received: true }) };
};

async function saveOrderForInventoryApp(stripe, session) {
    const ingestTestOrders = process.env.INGEST_TEST_ORDERS === 'true';
    if (!session.livemode && !ingestTestOrders) return;

    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SECRET_KEY) {
        console.error('Inventory app not configured: missing SUPABASE_URL or SUPABASE_SECRET_KEY');
        return;
    }

    // listLineItems returns up to 100 lines; expanding on the session would stop at 10
    const lineItemList = await stripe.checkout.sessions.listLineItems(session.id, {
        limit: 100,
        expand: ['data.price.product'],
    });

    const lines = lineItemList.data.map((lineItem) => {
        const productMetadata = lineItem.price?.product?.metadata || {};
        return {
            product_id: productMetadata.productId || '',
            variant: productMetadata.variant || '',
            sliced: productMetadata.sliced === 'true',
            quantity: lineItem.quantity,
            description: lineItem.description,
            amount: lineItem.amount_total / 100,
        };
    });

    const response = await fetch(`${process.env.SUPABASE_URL}/rest/v1/rpc/ingest_online_order`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            apikey: process.env.SUPABASE_SECRET_KEY,
            Authorization: `Bearer ${process.env.SUPABASE_SECRET_KEY}`,
        },
        body: JSON.stringify({
            order_payload: {
                stripe_session_id: session.id,
                created_unix: session.created,
                customer_name: session.metadata?.customerName || session.customer_details?.name || '',
                customer_email: session.customer_details?.email || '',
                amount_total: session.amount_total / 100,
                metadata: session.metadata || {},
                lines,
            },
        }),
    });
    if (!response.ok) {
        throw new Error(`Supabase responded ${response.status}: ${await response.text()}`);
    }
    console.log('Order saved for the inventory app');
}
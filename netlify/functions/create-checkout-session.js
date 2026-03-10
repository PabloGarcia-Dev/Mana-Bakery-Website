const Stripe = require('stripe');

exports.handler = async (event) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const stripe = new Stripe(process.env.API_Secret_Key);

    try {
        const { cartItems, orderDetails } = JSON.parse(event.body);

        // Convert your cart items into the format Stripe expects
        const lineItems = cartItems.map(item => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.title,
                },
                unit_amount: Math.round(item.price * 100), // Stripe uses cents
            },
            quantity: item.quantity,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            // Pass the customer's order details so you receive them with the payment
            metadata: {
                customerName: orderDetails.name,
                phone: orderDetails.phone,
                email: orderDetails.email,
                pickupDate: orderDetails.pickupDate,
                pickupTime: orderDetails.pickupTime,
                specialInstructions: orderDetails.specialInstructions || 'None',
            },
            
            // so it shows up on the "Transactions" pages you shared.
            payment_intent_data: {
                metadata: {
                    customerName: orderDetails.name,
                    phone: orderDetails.phone,
                    pickupDate: orderDetails.pickupDate,
                    pickupTime: orderDetails.pickupTime,
                },
            },

            customer_email: orderDetails.email,
            success_url: `${event.headers.origin}/pages/orderConfirmation.html`,
            cancel_url: `${event.headers.origin}/pages/orderRequests.html`,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ url: session.url }),
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
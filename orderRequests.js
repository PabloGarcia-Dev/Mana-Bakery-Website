let deliveryFee = 0;

function buildLeadTimeMessage(daysRequired, breadCount, cookieCount){
        if(breadCount > 0 && cookieCount > 0){
            return `Orders with ${breadCount} bread(s) and ${cookieCount} cookie(s) require at least ${daysRequired} days notice. Please select a new date.`;
        }
        else if(cookieCount > 0){
            return `Orders with ${cookieCount} cookie(s) require at least ${daysRequired} days notice. Please select a new date.`;
        }
        else if(breadCount > 0){
            return `Orders with ${breadCount} bread(s) require at least ${daysRequired} days notice. Please select a new date.`;
        }
        return `This order requires at least ${daysRequired} days notice. Please select a new date.`;
    }


function displayCart() {
    const container = document.getElementById('cart-items-container');
    const alertBox = document.getElementById('min-order-alert'); 
    const submitBtn = document.querySelector('#order-form .submit_btn');
    const dateInput = document.getElementById('pickup-date');
    
    if(!container) return; 

    const cart = JSON.parse(localStorage.getItem('bakery_cart')) || [];
    
    // 1a. Logic to count total cookies in the cart
    const cookieCount = cart
        .filter(item => item.id.includes('cookie')) 
        .reduce((total, item) => total + item.quantity, 0);

    // 1b. Logic to count total breads
    const breadCount = cart
        .filter(item => item.id.includes('sourdough')) 
        .reduce((total, item) => total + item.quantity, 0);

    // Checking lead times
    const deliveryDateInput = document.getElementById('delivery-date');
    if(dateInput || deliveryDateInput){
        const today = new Date();
        const minLeadTime = new Date(today);
        const daysRequired = breadCount >= 5 ? 3 : 2;
        minLeadTime.setDate(today.getDate() + daysRequired);

        const formattedDate = minLeadTime.toISOString().split('T')[0];

        if(dateInput){
            dateInput.setAttribute('min', formattedDate);
            if(dateInput.value && dateInput.value < formattedDate){
                dateInput.value = "";
                alert(buildLeadTimeMessage(daysRequired, breadCount, cookieCount));
            }
        }

        if(deliveryDateInput){
            deliveryDateInput.setAttribute('min', formattedDate);
            if(deliveryDateInput.value && deliveryDateInput.value < formattedDate){
                deliveryDateInput.value = "";
                alert(buildLeadTimeMessage(daysRequired, breadCount, cookieCount));
            }
        }
    }

    // Logic to determine if the button should be locked
    const isCartEmpty = cart.length === 0;
    const insufficientCookies = cookieCount > 0 && cookieCount < 4;
    const fulfillmentElCheck = document.querySelector('input[name="Fulfillment"]:checked');
    const deliveryNotReady = fulfillmentElCheck && fulfillmentElCheck.value === 'Delivery' && deliveryFee <= 0;

    if(isCartEmpty || insufficientCookies || deliveryNotReady){
        if(alertBox) alertBox.style.display = insufficientCookies ? 'block' : 'none';
        if(submitBtn){
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.5';
            submitBtn.style.cursor = 'not-allowed';
            submitBtn.innerText = isCartEmpty ? "Add Items to Checkout" : insufficientCookies ? "Need 4+ Cookies to Order" : "Check Delivery Fee First";
        }
    }
    else{
        if(alertBox) alertBox.style.display = 'none';
        if(submitBtn){
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            submitBtn.style.cursor = 'pointer';
            submitBtn.innerText = "Submit Order";
        }
    }

    const hiddenInput = document.getElementById('hidden-cart-input');
    
    if(cart.length === 0){
        container.innerHTML = "<p style='text-align:center; padding: 5rem; font-size: 1.5rem'>Your cart is currently empty.</p>";
        return;
    }

    let cartHTML = `
        <div class="cart-header-row">
            <span>Product</span>
            <span style="text-align: center;">Quantity</span>
            <span style="text-align: right;">Total</span>
        </div>
        <div class="cart-list">
    `;

    let summaryText = "";

    cart.forEach((item, index) => {
        const itemTotal = (item.price * item.quantity).toFixed(2);
        cartHTML += `
            <div class="cart-item-row">
                <div class="cart-product-info">
                    <a href="productView.html?id=${item.id}"><img src="${item.image}" alt="${item.title}" loading="lazy"></a>
                    <div class="product-details">
                        <h4>${item.title}</h4>
                        <p class="unit-price">$${item.price.toFixed(2)}</p>
                    </div>
                </div>
                <div class="quantity_selector" style="margin: 0 auto;">
                    <button type="button" class="quantity_btn" onclick="updateQty(${index}, -1)">−</button>
                    <input type="number" class="quantity_input" value="${item.quantity}" onchange="handleManualInput(${index}, this.value)">
                    <button type="button" class="quantity_btn" onclick="updateQty(${index}, 1)">+</button>
                </div>
                <div class="item-total-price">
                    $${itemTotal}
                    <i class="fa-regular fa-trash-can trash-btn" onclick="removeItem(${index})" style="margin-left: 1.5rem;"></i>
                </div>
            </div>
        `;
        summaryText += `${item.title} (x${item.quantity}), `;
    });

    // Use 'let' instead of 'const' so we can add the fee
    let orderTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    /* ----------------------- Holiday Check Box -------------------------------------------
    const holidayPackCheckbox = document.getElementById('holiPack');
    if(holidayPackCheckbox && holidayPackCheckbox.checked){
        orderTotal += 1.00;
        summaryText += " + Valentine's Packaging ($1.00)";
        
        // Visual line item in the cart list
        cartHTML += `
            <div class="cart-item-row" style="border-top: 1px dashed #ccc; padding-top: 10px;">
                <div class="cart-product-info">
                    <div class="product-details">
                        <h4>Valentine's Packaging Fee</h4>
                    </div>
                </div>
                <div style="margin: 0 auto;">1</div>
                <div class="item-total-price">$1.00</div>
            </div>
        `;  
    }
    */

    // Dynamically update the offset checkbox label with the actual amount
    const offsetAmount = ((orderTotal * 0.029) + 0.30).toFixed(2);
    const offsetCheckBoxLabel = document.querySelector('#offsetBox + label');
    if(offsetCheckBoxLabel) offsetCheckBoxLabel.textContent = `Would you like to contribute $${offsetAmount} to help offset the processing costs?`;

    const offsetCheckBox = document.getElementById('offsetBox');
    if(offsetCheckBox && offsetCheckBox.checked){
        let orderOffset = (orderTotal*0.029)+.30;
        orderTotal += orderOffset;
        summaryText += " + Processing Cost Offset";
        
        // Visual line item in the cart list
        cartHTML += `
            <div class="cart-item-row" style="border-top: 1px dashed #ccc; padding-top: 10px;">
                <div class="cart-product-info">
                    <div class="product-details">
                        <h4>Processing Cost Offset</h4>
                    </div>
                </div>
                <div style="margin: 0 auto;">1</div>
                <div class="item-total-price">$${orderOffset.toFixed(2)}</div>
            </div>
        `;  
    }

    // Add delivery fee if delivery is selected and a fee has been checked
    const fulfillmentEl = document.querySelector('input[name="Fulfillment"]:checked');
    const isDelivery = fulfillmentEl && fulfillmentEl.value === 'Delivery';
    if(isDelivery && deliveryFee > 0){
        orderTotal += deliveryFee;
        summaryText += ` + Delivery Fee ($${deliveryFee.toFixed(2)})`;

        cartHTML += `
            <div class="cart-item-row" style="border-top: 1px dashed #ccc; padding-top: 10px;">
                <div class="cart-product-info">
                    <div class="product-details">
                        <h4>Delivery Fee</h4>
                    </div>
                </div>
                <div style="margin: 0 auto;">1</div>
                <div class="item-total-price">$${deliveryFee.toFixed(2)}</div>
            </div>
        `;
    }

    cartHTML += `
        </div> 
        <div class="cart-total-footer">
            <div class="total-label">Total:</div>
            <div class="total-amount">$${orderTotal.toFixed(2)}</div>
        </div>
    `;
    
    container.innerHTML = cartHTML;
    if(hiddenInput) hiddenInput.value = summaryText;

    const totalInput = document.getElementById('hidden-total-input');
    if (totalInput) totalInput.value = `$${orderTotal.toFixed(2)}`;
}

// Global window functions
window.updateQty = function(index, change){
    let cartData = JSON.parse(localStorage.getItem('bakery_cart'));
    if(cartData[index].quantity + change > 0){
        cartData[index].quantity += change;
        localStorage.setItem('bakery_cart', JSON.stringify(cartData));
        displayCart();
        if(typeof updateCartUI === "function") updateCartUI(); 
    }
};

window.removeItem = function(index){
    let cartData = JSON.parse(localStorage.getItem('bakery_cart'));
    cartData.splice(index, 1);
    localStorage.setItem('bakery_cart', JSON.stringify(cartData));
    displayCart();
    if(typeof updateCartUI === "function") updateCartUI();
};

window.handleManualInput = function(index, newValue){
    let cartData = JSON.parse(localStorage.getItem('bakery_cart'));
    let quantity = parseInt(newValue);
    if(isNaN(quantity) || quantity < 1) quantity = 1;
    cartData[index].quantity = quantity;
    localStorage.setItem('bakery_cart', JSON.stringify(cartData));
    displayCart();
    if(typeof updateCartUI === "function") updateCartUI();
};

function enforceDateRules(){
    const dateInput = document.getElementById('pickup-date');
    const deliveryDateInput = document.getElementById('delivery-date');
    if(!dateInput && !deliveryDateInput) return;
    displayCart(); 

    if(dateInput){
        const minDate = dateInput.getAttribute('min');
        if(dateInput.value && dateInput.value < minDate) dateInput.value = "";
    }
    if(deliveryDateInput){
        const minDeliveryDate = deliveryDateInput.getAttribute('min');
        if(deliveryDateInput.value && deliveryDateInput.value < minDeliveryDate) deliveryDateInput.value = "";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    enforceDateRules();

    // Sunday Blocking
    const dateInput = document.getElementById('pickup-date');
    if (dateInput) {
        dateInput.addEventListener('change', (e) => {
            const selectedDate = new Date(e.target.value);
            if(selectedDate.getUTCDay() === 0){
                alert("Mana Bakery is closed on Sundays. Please select a different pick-up date!");
                e.target.value = "";
            }
        });
    }

    // Stripe Checkout
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Stop the old form submit
 
            const cart = JSON.parse(localStorage.getItem('bakery_cart')) || [];
            const submitBtn = orderForm.querySelector('.submit_btn');
 
            // If customer opted to offset processing costs, add it as a line item
            const offsetCheckBox = document.getElementById('offsetBox');
            if (offsetCheckBox && offsetCheckBox.checked) {
                const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                const offsetAmount = parseFloat(((cartTotal * 0.029) + 0.30).toFixed(2));
                cart.push({
                    id: 'processing-offset',
                    title: 'Processing Cost Offset',
                    price: offsetAmount,
                    quantity: 1,
                    image: '',
                });
            }
 
            const isDeliveryOrder = document.getElementById('fulfillment-delivery').checked;

            // Add delivery fee as its own line item, same pattern as the offset
            if (isDeliveryOrder) {
                if (deliveryFee <= 0) {
                    alert('Please check your delivery fee before submitting.');
                    submitBtn.disabled = false;
                    submitBtn.innerText = 'Submit Order';
                    return;
                }
                cart.push({
                    id: 'delivery-fee',
                    title: 'Delivery Fee',
                    price: deliveryFee,
                    quantity: 1,
                    image: '',
                });
            }

            const unit = document.getElementById('delivery-unit').value.trim();
            const fullDeliveryAddress = unit
                ? `${document.getElementById('delivery-address').value} (${unit})`
                : document.getElementById('delivery-address').value;

            // Gather the customer's order details to pass to Stripe
            const orderDetails = {
                name: orderForm.querySelector('[name="Name"]').value,
                phone: orderForm.querySelector('[name="Phone Number"]').value,
                email: document.getElementById('email-input').value,
                fulfillmentType: isDeliveryOrder ? 'Delivery' : 'Pickup',
                pickupDate: isDeliveryOrder ? '' : document.getElementById('pickup-date').value,
                pickupTime: isDeliveryOrder ? '' : document.getElementById('pickup-time').value,
                deliveryAddress: isDeliveryOrder ? fullDeliveryAddress : '',
                deliveryDate: isDeliveryOrder ? document.getElementById('delivery-date').value : '',
                deliveryTime: isDeliveryOrder ? document.getElementById('delivery-time').value : '',
                specialInstructions: document.getElementById('comments-box')?.value || 'None',
            };
 
            // Disable button to prevent double clicks
            submitBtn.disabled = true;
            submitBtn.innerText = 'Redirecting to Payment...';
 
            try {
                const response = await fetch('/.netlify/functions/create-checkout-session', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ cartItems: cart, orderDetails }),
                });
 
                const data = await response.json();
 
                if (data.url) {
                    // Redirect to Stripe's hosted checkout page
                    window.location.href = data.url;
                } else {
                    alert('Something went wrong. Please try again.');
                    submitBtn.disabled = false;
                    submitBtn.innerText = 'Submit Order';
                }
            }
            catch (error) {
                alert('Something went wrong. Please try again.');
                submitBtn.disabled = false;
                submitBtn.innerText = 'Submit Order';
            }
        });
    }

    // Special Instructions Logic
    const instructionsCheckbox = document.getElementById('toggle-instructions');
    const instructionsBox = document.getElementById('instructions-box');
    const commentsTextarea = document.getElementById('comments-box'); // Corrected ID

    if (instructionsCheckbox) {
        instructionsCheckbox.addEventListener('change', function() {
            if (this.checked) {
                instructionsBox.style.display = 'block';
                if (commentsTextarea) commentsTextarea.setAttribute('required', '');
            } else {
                instructionsBox.style.display = 'none';
                if (commentsTextarea) {
                    commentsTextarea.removeAttribute('required');
                    commentsTextarea.value = ''; 
                }
            }
        });
    }

    
    /* Valentine's Packaging Listener
    const valPackCheckbox = document.getElementById('valPack');
    if (valPackCheckbox) {
        valPackCheckbox.addEventListener('change', () => { displayCart(); });
        if (valPackCheckbox.checked) displayCart(); 
    }
    */

    // Processing Cost Offset Listener
    const offsetCheckbox = document.getElementById('offsetBox');
    if (offsetCheckbox) {
        offsetCheckbox.addEventListener('change', () => { displayCart(); });
    }

    // Fulfillment toggle (Pickup vs Delivery)
    const pickupRadio = document.getElementById('fulfillment-pickup');
    const deliveryRadio = document.getElementById('fulfillment-delivery');
    const pickupFields = document.getElementById('pickup-fields');
    const deliveryFields = document.getElementById('delivery-fields');
    const pickupDateInput = document.getElementById('pickup-date');
    const pickupTimeInput = document.getElementById('pickup-time');
    const deliveryDateInput = document.getElementById('delivery-date');
    const pickupWindowCheckbox = document.getElementById('pickup-window');
    const deliveryWindowCheckbox = document.getElementById('delivery-window');
    const pickupWindowWrap = document.getElementById('pickup-window-wrap');
    const deliveryWindowWrap = document.getElementById('delivery-window-wrap');

    function toggleFulfillmentMode(){
        const deliverySelected = deliveryRadio.checked;

        pickupFields.style.display = deliverySelected ? 'none' : 'contents';
        deliveryFields.style.display = deliverySelected ? 'block' : 'none';
        pickupWindowWrap.style.display = deliverySelected ? 'none' : 'grid';
        deliveryWindowWrap.style.display = deliverySelected ? 'grid' : 'none';

        pickupDateInput.required = !deliverySelected;
        pickupTimeInput.required = !deliverySelected;
        pickupWindowCheckbox.required = !deliverySelected;
        deliveryWindowCheckbox.required = deliverySelected;
        deliveryDateInput.required = deliverySelected;

        if(!deliverySelected){
            deliveryFee = 0;
            document.getElementById('hidden-delivery-fee').value = '0';
            document.getElementById('delivery-fee-result').textContent = '';
        }
        displayCart();
    }

    if(pickupRadio && deliveryRadio){
        pickupRadio.addEventListener('change', toggleFulfillmentMode);
        deliveryRadio.addEventListener('change', toggleFulfillmentMode);
    }

    // Delivery date: block Sundays too
    if(deliveryDateInput){
        deliveryDateInput.addEventListener('change', (e) => {
            const selectedDate = new Date(e.target.value);
            if(selectedDate.getUTCDay() === 0){
                alert("Mana Bakery is closed on Sundays. Please select a different delivery date!");
                e.target.value = "";
            }
        });
    }

    // Check delivery fee button
    const checkDeliveryBtn = document.getElementById('check-delivery-btn');
    if(checkDeliveryBtn){
        checkDeliveryBtn.addEventListener('click', async () => {
            const address = document.getElementById('delivery-address').value.trim();
            const resultEl = document.getElementById('delivery-fee-result');

            if(!address){
                resultEl.textContent = "Please enter an address first.";
                return;
            }

            resultEl.textContent = "Checking...";
            checkDeliveryBtn.disabled = true;

            try {
                const res = await fetch('/.netlify/functions/delivery-fee', {
                    method: 'POST',
                    body: JSON.stringify({ address })
                });
                const data = await res.json();

                if(!res.ok || !data.deliverable){
                    resultEl.textContent = data.error || "Sorry, that address is outside our delivery range. Pickup is still available!";
                    deliveryFee = 0;
                }
                else{
                    deliveryFee = data.fee;
                    resultEl.textContent = `Delivery fee: $${data.fee.toFixed(2)} (${data.miles} mi away)`;
                }
            }
            catch(err){
                resultEl.textContent = "Couldn't check that address. Please try again.";
                deliveryFee = 0;
            }

            document.getElementById('hidden-delivery-fee').value = deliveryFee.toFixed(2);
            checkDeliveryBtn.disabled = false;
            displayCart();
        });
    }
});

window.addEventListener('pageshow', () => { enforceDateRules(); });
function displayCart() {
    const container = document.getElementById('cart-items-container');
    const alertBox = document.getElementById('min-order-alert'); // Found in orderRequests.html
    const submitBtn = document.querySelector('#order-form .add_to_cart_btn');
    const dateInput = document.getElementById('pickup-date');
    
    if(!container) return; // Guard

    const cart = JSON.parse(localStorage.getItem('bakery_cart')) || [];
    
    // 1a. Logic to count total cookies in the cart
    const cookieCount = cart
        .filter(item => item.id.includes('cookie')) // Identify cookies by ID
        .reduce((total, item) => total + item.quantity, 0);

    // 1b. Logic to count total breads
    const breadCount = cart
        .filter(item => item.id.includes('sourdough')) // Identify breads by ID
        .reduce((total, item) => total + item.quantity, 0);

    // Checking how many breads we have to increase the minimum pick-up date
    if(dateInput){
        const today = new Date();
        const minLeadTime = new Date(today);
        
        // If more than 5 breads, set to 3 days. Otherwise, 2 days.
        const daysRequired = breadCount >= 5 ? 3 : 2;
        minLeadTime.setDate(today.getDate() + daysRequired);

        const formattedDate = minLeadTime.toISOString().split('T')[0];
        dateInput.setAttribute('min', formattedDate);
        
        // If current selection is now invalid due to bread count, clear it
        if(dateInput.value && dateInput.value < formattedDate){
            dateInput.value = "";
            alert(`Orders with ${breadCount} breads require at least 3 days notice. Please select a new date.`);
        }
    }

    // Logic to determine if the button should be locked
    const isCartEmpty = cart.length === 0;
    const insufficientCookies = cookieCount > 0 && cookieCount < 4;

    // Toggle the UI state (Alert bar and Button)
    if(isCartEmpty || insufficientCookies){
        if(alertBox){
            // Only show the 4-cookie alert if they actually have cookies in the cart
            alertBox.style.display = insufficientCookies ? 'block' : 'none';
        }
        if(submitBtn){
            submitBtn.disabled = true; // Disable the submit button if it doesn't pass the check
            submitBtn.style.opacity = '0.5';
            submitBtn.style.cursor = 'not-allowed';
            submitBtn.innerText = isCartEmpty ? "Add Items to Checkout" : "Need 4+ Cookies to Order";
        }
    }
    else{
        if(alertBox) alertBox.style.display = 'none';
        if(submitBtn){
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            submitBtn.style.cursor = 'pointer';
            submitBtn.innerText = "Submit Order Request";
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
                    <img src="${item.image}" alt="${item.title}">
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

    const orderTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartHTML += `
        </div> 
        <div class="cart-total-footer">
            <div class="total-label">Total:</div>
            <div class="total-amount">$${orderTotal.toFixed(2)}</div>
        </div>
    `;
    
    container.innerHTML = cartHTML;
    if(hiddenInput){
        hiddenInput.value = summaryText;
    }

    const totalInput = document.getElementById('hidden-total-input');
    if (totalInput) {
        totalInput.value = `$${orderTotal.toFixed(2)}`;
    }
}

// Global window functions so the HTML buttons can reach them
window.updateQty = function(index, change){
    let cartData = JSON.parse(localStorage.getItem('bakery_cart'));
    if(cartData[index].quantity + change > 0){
        cartData[index].quantity += change;
        localStorage.setItem('bakery_cart', JSON.stringify(cartData));
        displayCart();
        if(typeof updateCartUI === "function") updateCartUI(); // Sync with sidebar
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

// Function to strictly enforce date rules
function enforceDateRules(){
    const dateInput = document.getElementById('pickup-date');
    if(!dateInput) return;

    // 1. Run the cart logic to set the correct 'min' attribute based on bread count
    displayCart(); 

    // 2. Force the browser to re-evaluate the current value against the new 'min'
    const minDate = dateInput.getAttribute('min');
    if(dateInput.value && dateInput.value < minDate){
        console.log("Invalid date detected on page load. Resetting...");
        dateInput.value = ""; // Clear the illegal date
    }
}

// Handle initial page load
document.addEventListener('DOMContentLoaded', enforceDateRules);

// Handle "Back" button and "Forward" button navigation (Page Show)
window.addEventListener('pageshow', (event) => {
    // This triggers even if the page is loaded from the browser cache
    enforceDateRules(); 
});

// Sunday Blocking Logic (Keep this inside a listener)
document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('pickup-date');
    if (dateInput) {
        dateInput.addEventListener('change', (e) => {
            const selectedDate = new Date(e.target.value);
            const day = selectedDate.getUTCDay(); // 0 = Sunday
            
            if(day === 0){
                alert("Mana Bakery is closed on Sundays. Please select a different pick-up date!");
                e.target.value = "";
            }
        });
    }
});
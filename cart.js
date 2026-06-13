// Check if the saved cart matches the current product version
const savedVersion = localStorage.getItem('bakery_cart_version');
if (savedVersion !== CART_VERSION) {
    localStorage.removeItem('bakery_cart');
    localStorage.setItem('bakery_cart_version', CART_VERSION);
}
 
// Load cart from storage or start empty
let cart = JSON.parse(localStorage.getItem('bakery_cart')) || [];
 
// Toggle Sidebar Visibility
function toggleCart(){
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    if(sidebar && overlay){
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}
 
// Add to Cart Function
function addToCart(productId, quantity){
    const product = productData[productId];
    if(!product) return;
 
    let finalPrice;
    let displayTitle = product.title;
 
    // Check for the sliced option on sourdough products
    const slicedCheckbox = document.getElementById(`sliced-${productId}`) ||
                           document.querySelector('.sliced-checkbox');
    if(slicedCheckbox && slicedCheckbox.checked){
        displayTitle = `[SLICED] ${displayTitle}`;
    }
 
    /* Logic for Gift Vouchers with a custom amount
    if(product.isVoucher){
        const voucherInput = document.getElementById('voucher-amount');
        const amount = voucherInput ? parseFloat(voucherInput.value) : NaN;
        if(isNaN(amount) || amount < 10 || amount > 150){
            alert('Please enter a valid voucher amount between $10 and $150.');
            return;
        }
        finalPrice = parseFloat(amount.toFixed(2));
        displayTitle += ` ($${finalPrice.toFixed(2)})`;
    }
    */
           
    // Logic for Cookie Cakes with multiple sizes
    else if(product.sizes){
        const sizeSelect = document.getElementById('size-select');
        const selectedIndex = sizeSelect ? sizeSelect.value : 0;
        const selectedSize = product.sizes[selectedIndex];
        
        finalPrice = selectedSize.price;
        displayTitle += ` (${selectedSize.label})`;
    }
    else if(product.toppings){
        const toppingSelect = document.getElementById('topping-select');
        const selectedIndex = toppingSelect ? toppingSelect.value : 0;
        const selectedTopping = product.toppings[selectedIndex];
 
        finalPrice = selectedTopping.price;
        displayTitle += ` (${selectedTopping.label})`;
    }
    else{
        // Standard logic for breads and single cookies
        finalPrice = parseFloat(product.price.replace('$', ''));
    }

 
    // Check if THIS specific version (size) is already in the cart
    const existingItem = cart.find(item => item.title === displayTitle);
 
    if(existingItem){
        existingItem.quantity += quantity;
    }
    else{
        cart.push({
            id: productId,
            title: displayTitle, // Includes the size label for cookie cakes
            price: finalPrice,
            image: product.mainImg,
            quantity: quantity
        });
    }
 
    localStorage.setItem('bakery_cart', JSON.stringify(cart));
    updateCartUI();
    toggleCart(); 
}
 
// Remove from Cart
function removeFromCart(index){
    cart.splice(index, 1);
    localStorage.setItem('bakery_cart', JSON.stringify(cart));
    updateCartUI();
}
 
// Update Sidebar UI
function updateCartUI(){
    const cartContent = document.getElementById('sidebar-cart-content');
    const totalPriceEl = document.getElementById('cart-total-price');
    
    if(cart.length === 0){
        cartContent.innerHTML = "<p style='text-align:center; font-size:1.4rem; margin-top:20px;'>Your cart is empty.</p>";
        totalPriceEl.textContent = "$0.00";
    }
    else{
        let html = "";
        let total = 0;
        cart.forEach((item, index) => {
            total += item.price * item.quantity;
            html += `
                <div class="sidebar-item">
                    <img src="${item.image}" alt="${item.title}">
                    <div class="item-details">
                        <h4>${item.title}</h4>
                        <p>$${item.price.toFixed(2)} x ${item.quantity}</p> </div>
                    <i class="fa-solid fa-xmark remove-item" onclick="removeFromCart(${index})"></i>
                </div>
            `;
        });
        cartContent.innerHTML = html;
        totalPriceEl.textContent = `$${total.toFixed(2)}`;
    }
}
 
// Setup Listeners
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    
    // Make cart icon open sidebar
    const cartIcon = document.querySelector('.cart-icon');
    if(cartIcon){
        cartIcon.onclick = (e) => {
            e.preventDefault();
            toggleCart();
        };
    }
});
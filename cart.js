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

    const existingItem = cart.find(item => item.id === productId);

    if(existingItem){
        existingItem.quantity += quantity;
    }
    else{
        cart.push({
            id: productId,
            title: product.title,
            price: parseFloat(product.price.replace('$', '')),
            image: product.mainImg,
            quantity: quantity
        });
    }

    localStorage.setItem('bakery_cart', JSON.stringify(cart));
    updateCartUI();
    toggleCart(); // Open the sidebar automatically when an item is added
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
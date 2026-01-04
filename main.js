document.addEventListener('DOMContentLoaded', () => {
    // Logic for Baked Goods & Product View (Quantity +/- Buttons)
    const productPurchaseActions = document.querySelectorAll(".product_purchase_actions");
    
    productPurchaseActions.forEach((container) => {
        const plusBtn = container.querySelector(".quantity_btn:nth-of-type(2)");
        const minusBtn = container.querySelector(".quantity_btn:nth-of-type(1)");
        const qtyInput = container.querySelector(".quantity_input");
        const addBtn = container.querySelector(".add_to_cart_btn");
        
        // Find the Product ID
        let productId;
        const link = container.closest('.bago_display')?.querySelector("a") || 
                      document.querySelector('.product-view-display');
                      
        if(link && link.href){
            productId = new URLSearchParams(link.href.split('?')[1]).get('id');
        }
        else{
            productId = new URLSearchParams(window.location.search).get('id');
        }

        if(plusBtn) plusBtn.onclick = () => qtyInput.value = parseInt(qtyInput.value) + 1;
        if(minusBtn) minusBtn.onclick = () => {
            if(parseInt(qtyInput.value) > 1) qtyInput.value = parseInt(qtyInput.value) - 1;
        };
        
        if(addBtn) addBtn.onclick = () => {
            addToCart(productId, parseInt(qtyInput.value));
            qtyInput.value = 1; // Reset after adding
        };
    });

    // Phone Masking Logic (For Cart Page)
    const phoneInput = document.getElementById('phone-input');
    if(phoneInput){
        phoneInput.addEventListener('input', (e) => {
            let input = e.target.value.replace(/\D/g, '');
            let size = input.length;
            if(size === 0) e.target.value = "";
            else if(size <= 3) e.target.value = "(" + input;
            else if(size <= 6) e.target.value = "(" + input.substring(0, 3) + ") " + input.substring(3);
            else e.target.value = "(" + input.substring(0, 3) + ") " + input.substring(3, 6) + "-" + input.substring(6, 10);
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Setup the Observer options
    const observerOptions = {
        threshold: 0.15, // Trigger when 15% of the review is visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before it hits the bottom
    };

    // Define what happens when a review is seen
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('show-review');
                // Stop observing after it animates once
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Tell the observer to watch all your review cards
    const reviews = document.querySelectorAll('.review');
    reviews.forEach((el) => observer.observe(el));
});
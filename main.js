// Sets up +/- and Add to Cart button listeners.
// Called on DOMContentLoaded for static pages (productView),
// and again manually after renderBakedGoods injects dynamic cards.
function setupProductButtons(){
    const productPurchaseActions = document.querySelectorAll(".product_purchase_actions");
    
    productPurchaseActions.forEach((container) => {
        // Skip if already initialized to avoid double-binding
        if(container.dataset.initialized) return;
        container.dataset.initialized = 'true';

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
}

document.addEventListener('DOMContentLoaded', () => {
    setupProductButtons();

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
        threshold: 0.15,
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

// -------------------------------------- Function for the endless cycle in Home Page ----------------------------------------------------------
function renderNewProducts(){
    const scrollContainer = document.querySelector('.bago_card_box');
    if(!scrollContainer) return;

    const newProducts = Object.entries(productData).filter(([id, product]) => {
        return product.new === true;
    });

    let htmlContent = "";
    newProducts.forEach(([id, product]) => {
        htmlContent += `
            <li class="bago_card">
                <h3 class="bago_card_title">${product.title}</h3>
                <a href="pages/productView.html?id=${id}" title="Go to Product View">
                    <img class="bago_card_image" src="${product.mainImg.replace('../', '')}" alt="Image of ${product.title}">
                </a>
                <p class="bago_card_description">${product.info}</p>
            </li>
        `;
    });

    scrollContainer.innerHTML = htmlContent;

    if (newProducts.length > 0) {
        scrollContainer.innerHTML += scrollContainer.innerHTML;
    }
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', renderNewProducts);

// ------------------------------------------ Baked Goods Page Renderer -------------------------------------------------------------
// Reads productData and builds all sections in bakedGoods.html automatically.
// To add/remove a product, just update products.js — no HTML changes needed.

function renderBakedGoods(){
    const container = document.getElementById('all-goods_container');
    if(!container) return; // Only runs on bakedGoods.html

    // --- Section definitions: order on the page + display titles ---
    const sections = [
        {category: '_holiday-specials', title: 'Holiday Specials',   ongoingSubtitle: null},
        {category: '_sourdough',        title: 'Sourdough Breads',   ongoingSubtitle: null},
        {category: '_other-treats',     title: 'Our Other Treats',   ongoingSubtitle: null},
        {category: '_cookie',           title: 'Cookies',            ongoingSubtitle: "Cookies of the Month"}//,
        //{category: '_special-gifts',    title: 'Special Gifts',      ongoingSubtitle: null},
    ];

    let pageHTML = '';

    sections.forEach((section) => {
        // Filter products that belong to this section
        const sectionProducts = Object.entries(productData).filter(([id]) =>
            id.endsWith(section.category)
        );

        if(sectionProducts.length === 0) return; // Skip empty sections

        // Separate ongoing (purchasable) from seasoned (display-only)
        const ongoing = sectionProducts.filter(([, p]) => p.ongoing);
        const seasoned = sectionProducts.filter(([, p]) => !p.ongoing);

        // For holiday specials, only show the section if there are active items
        if(section.category === '_holiday-specials' && ongoing.length === 0) return;

        // Helper: build a single <li> card
        function buildCard(id, product){
            const isOngoing = product.ongoing;
            const multipleChoices = !!(product.isVoucher || product.sizes || product.toppings); // Checks to see if the product has either of the variables

            let priceHTML = '';
            if(isOngoing){
                if(product.isVoucher){
                    priceHTML = `<p class="bago_display_price">$10 – $150</p>`;
                }
                else if(product.sizes){
                    priceHTML = `<p class="bago_display_price">Starting at $${product.sizes[0].price.toFixed(2)}</p>`;
                }
                else if(product.toppings){
                    priceHTML = `<p class="bago_display_price">Starting at $${product.toppings[0].price.toFixed(2)}</p>`;
                }
                else{
                    priceHTML = `<p class="bago_display_price">${product.price}</p>`;
                }
            }

            const cartHTML = (isOngoing && !multipleChoices) ? `
                <div class="product_purchase_actions">
                    <div class="quantity_selector">
                        <button type="button" class="quantity_btn">−</button>
                        <input type="number" class="quantity_input" value="1" min="1">
                        <button type="button" class="quantity_btn">+</button>
                    </div>
                    <button type="submit" class="add_to_cart_btn">Add to Cart</button>
                </div>` : '';

            return `
                <li class="bago_display">
                    <a href="productView.html?id=${id}" title="Go to Product View">
                        <img class="bago_display_image" src="${product.mainImg}" alt="Image of ${product.title}">
                    </a>
                    <div class="bago_display_info">
                        <h3 class="bago_display_title">${product.title}</h3>
                        ${priceHTML}
                        ${cartHTML}
                    </div>
                </li>`;
        }

        // Subtitle above the ongoing products
        const ongoingSubtitleHTML = section.ongoingSubtitle
            ? `<h4 class="container_sub_title">${section.ongoingSubtitle}</h4>`
            : '';

        const ongoingCardsHTML = ongoing.map(([id, p]) => buildCard(id, p)).join('');

        // Past flavors block
        let seasonedHTML = '';
        if(seasoned.length > 0 && !(section.category === '_holiday-specials')){
            const seasonedCards = seasoned.map(([id, p]) => buildCard(id, p)).join('');
            seasonedHTML = `
                <div class="section_divider"><hr></div>
                <h4 class="container_sub_title cookies_title_pf">Past Flavors</h4>
                <ul class="card_content">${seasonedCards}</ul>`;
        }

        // Divider between sections — only if something has already been rendered
        const divider = pageHTML.length > 0
            ? `<div class="section_divider bread-cookies_divider"><hr></div>`
            : '';

        pageHTML += `
            ${divider}
            <div class="bago_display_deck_container" id="${section.category.replace('_', '')}">
                <h3 class="container_title">${section.title}</h3>
                ${ongoingSubtitleHTML}
                <ul class="card_content">${ongoingCardsHTML}</ul>
                ${seasonedHTML}
            </div>`;
    });

    container.innerHTML = pageHTML;

    // Attach button listeners now that the cards are in the DOM
    setupProductButtons();
}

document.addEventListener('DOMContentLoaded', renderBakedGoods);

const STORAGE_KEY = 'manaBakeryPromoDismissed';
const popup = document.getElementById('promoPopup');
 
function openPromoPopup() {
    popup.classList.add('active');
}
 
function closePromoPopup() {
    popup.classList.remove('active');
    // dismissal for the day:
    localStorage.setItem(STORAGE_KEY, new Date().toDateString());
}
 
// Close on overlay click (outside the card)
popup.addEventListener('click', (e) => {
    if (e.target === popup) closePromoPopup();
});
 
// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePromoPopup();
});
 
// Auto-show shortly after page load
window.addEventListener('DOMContentLoaded', () => {
    // check localStorage first so it doesn't nag returning visitors:
    const dismissedToday = localStorage.getItem(STORAGE_KEY) === new Date().toDateString();
    // if (dismissedToday) return;
 
    setTimeout(openPromoPopup, 800);
});
/* Product Template
    "product-id-breads":{
        title: "Product-title",
        price: "$Product-price",
        info: "Product-description",
        ingredients: "Ingredients: Product-Ingredients",
        mainImg: "Main-product-image"
        secondImg: "Second-product-image",
        ongoing: true or false
    },
    "product-id-cookies":{
        title: "Product-title",
        price: "$Product-price",
        info: "Product-description",
        ingredients: "Ingredients: Product-Ingredients",
        ongoingProductImg: "Main-ongoing-product-image",
        seasonedProductImg: "Main-seasoned-product-image",
        secondImg: "Second-product-image",
        ongoing: true or false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        }
    },
    */

// Constant containing all of the product details
const productData = {
    //----------- Sourdough Breads -------------
    "original_sourdough":{
        title: "Original Sourdough Bread",
        price: "$8.00",
        info: "Naturally leavened sourdough bread with a crisp, golden crust and a soft, chewy interior. Slow-fermented for deep, tangy flavor and perfect for slicing, toasting, or enjoying fresh",
        ingredients: "Ingredients: Bread flour, water, sourdough starter (All purpose flour, bread flour, water), pink Himalayan salt",
        mainImg: "../images/sourdough/original_sourdough_bg.png",
        secondImg: "../images/sourdough/original_sourdough_bg_white.png",
        ongoing: true
    },
    "rosemary-focaccia_sourdough":{
        title: "Rosemary Sourdough Focaccia",
        price: "$10.00",
        info: "Bubbly and airy with a chewy crumb, this naturally leavened sourdough focaccia is topped with fresh rosemary and extra-virgin olive oil. Ideal for dipping or enjoying all on its own",
        ingredients: "Ingredients: Bread flour, Sourdough starter (Bread flour, All purpose Flour, Water), Water, Olive oil, Pink Himalayan salt, Rosemary",
        mainImg: "../images/sourdough/rosemary_focaccia_sourdough_bg.png",
        secondImg: "../images/sourdough/rosemary_focaccia_sourdough_bg_white.png",
        ongoing: true
    },
    "dinner-rolls_sourdough":{
        title: "Sourdough Dinner Rolls",
        price: "$10.00",
        info: "Soft, Buttery, and mildly tangy and sweet, these sourdough dinner rolls are naturally fermented with our own sourdough starter and will be the perfect addition to your dinner table for any occasion!",
        ingredients: "Ingredients: Ingredients: Bread flour, All purpose flour, Milk, Sourdough starter (Bread flour, All purpose Flour, Water), Sugar, Unsalted butter, Pink Himalayan salt, Egg",
        mainImg: "../images/sourdough/dinner-rolls_sourdough_bg.png",
        secondImg: "../images/sourdough/dinner-rolls_sourdough_bg_white.png",
        ongoing: true
    },
    //----------- Cookies -------------
    "chocolate-chip_cookie":{
        title: "Chocolate Chip Cookie",
        price: "$4.00",
        info: "Chocolate chip cookie topped with sea salt",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla",
        ongoingProductImg: "../images/cookies/chocolate-chip_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/chocolate-chip_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/chocolate-chip_cookie_rbg-1.jpeg",
        ongoing: true,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        }
    },
    "cookies-and-cream_cookie":{
        title: "Cookies & Cream Cookie",
        price: "$5.00",
        info: "White and chocolate chip cookie mixed with oreo bits, filled with cookies and cream spread, topped with a Hershey's mini square, white chocolate bark drizzle, Oreo half, and crushed Oreo",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla",
        ongoingProductImg: "../images/cookies/cookies-&-cream_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/cookies-&-cream_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/cookies-&-cream_cookie_bg_white.png",
        ongoing: true,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        }
    },
    "dubai-chocolate_cookie":{
        title: "Dubai Chocolate Cookie",
        price: "$5.00",
        info: "Chocolate chip cookie, filled with pistachio spread and crispy Kataifi, topped with Nutella, Kataifi, pistachios, and pistachio shavings",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla",
        ongoingProductImg: "../images/cookies/dubai-choco_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/dubai-choco_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/dubai-choco_cookie_bg_white.png",
        ongoing: true,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        }
    },
    "ghirardelli-chocolate-caramel_cookie":{
        title: "Ghirardelli Chocolate-Caramel Cookie",
        price: "$5.00",
        info: "Chocolate chip cookie mixed with caramel bits, filled with Nutella and a Ghirardelli triangle, topped with chocolate bark drizzle and a Ghirardelli triangle",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla",
        ongoingProductImg: "../images/cookies/ghirardelli_choco-caramel_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/ghirardelli_choco-caramel_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/ghirardelli_choco-caramel_cookie_bg_white.png",
        ongoing: true,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        }
    },
    "guava-dulce-de-leche_cookie":{
        title: "Guava-Dulce de Leche Cookie",
        price: "$5.00",
        info: "White chocolate chip cookie, filled with dulce de leche and guava paste, topped with a guava paste chunk",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla",
        ongoingProductImg: "../images/cookies/guava-dulce-de-leche_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/guava-dulce-de-leche_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/guava-dulce-de-leche_cookie_bg_white.png",
        ongoing: true,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        }
    },
    "kinder-bueno_cookie":{
        title: "Kinder Bueno Cookie",
        price: "$5.00",
        info: "White and milk chocolate chip cookie mixed with Bueno squares, filled with white chocolate hazelnut spread, topped with Bueno squares and white chocolate hazelnut drizzle",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla",
        ongoingProductImg: "../images/cookies/kinder-bueno_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/kinder-bueno_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/kinder-bueno_cookie_bg_white.png",
        ongoing: true,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        }
    },
    "winter-hot-cocoa_cookie":{
        title: "Winter Hot Cocoa",
        price: "$5.00",
        info: "Chocolate cookie with chocolate chips, filled with marshmallow fluff, topped with a giant marshmallow and a dash of cinnamon",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla",
        ongoingProductImg: "../images/cookies/winter-hot-cocoa_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/winter-hot-cocoa_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/winter-hot-cocoa_cookie_bg_white.png",
        ongoing: true,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        }
    },
    "nutella-pirulin_cookie":{
        title: "Nutella-Pirulin Cookie",
        price: "$5.00",
        info: "Chocolate chip cookie mixed with pirulin bits, filled with nutella and pirulin pieces, topped with pirulin wafers",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla",
        ongoingProductImg: "../images/cookies/nutella-pirulin_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/nutella-pirulin_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/nutella-pirulin_cookie_bg_white.png",
        ongoing: true,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        }
    },
    "circus-animal_cookie":{
        title: "Circus Animal Cookie",
        price: "$5.00",
        info: "White chocolate chip cookie mixed with circus animal crackers,rolled in rainbow nonpareils, topped with white chocolate bark drizzle and a circus animal cracker",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla",
        ongoingProductImg: "../images/cookies/circus-animal_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/circus-animal_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/circus-animal_cookie_bg_white.png",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        }
    },
    "cookie-monster_cookie":{
        title: "Cookie Monster Cookie",
        price: "$5.00",
        info: "Chocolate chip cookie mixed with Oreos and Chips Ahoy, topped with candy eyes and cookie halves",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla",
        ongoingProductImg: "../images/cookies/cookie-monster_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/cookie-monster_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/cookie-monster_cookie_bg_white.png",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        }
    },
    "ferrero-rocher_cookie":{
        title: "Ferrero Rocher Cookie",
        price: "$5.00",
        info: "Chocolate cookie with chocolate chips, filled with Nutella and a Ferrero Rocher, topped with half a Ferrero, chocolate drizzle, and macadamia shavings",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla",
        ongoingProductImg: "../images/cookies/ferrero-rocher_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/ferrero-rocher_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/ferrero-rocher_cookie_bg_white.png",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        }
    },
    "holiday-half-dipped_cookie":{
        title: "Holiday Half-Dipped Cookie",
        price: "$5.00",
        info: "Chocolate chip cookie, filled with Nutella, half topped with chocolate bark and holiday nonpareils",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla",
        ongoingProductImg: "../images/cookies/holiday-half-dipped_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/holiday-half-dipped_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/holiday-half-dipped_cookie_bg_white.png",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        }
    },
    "holiday-M-and-M_cookie":{
        title: "Holiday M&M Cookie",
        price: "$5.00",
        info: "M&M cookie filled with Nutella",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla",
        ongoingProductImg: "../images/cookies/holiday-M&M_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/holiday-M&M_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/holiday-M&M_cookie_bg_white.png",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        }
    },
    "lotus-biscoff_cookie":{
        title: "Lotus-Biscoff Cookie",
        price: "$5.00",
        info: "White chocolate chip cookie mixed with Biscoff chunks, filled with Biscoff cookie butter, topped with a Biscoff cookie and cookie butter drizzle",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla",
        ongoingProductImg: "../images/cookies/lotus-biscoff_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/lotus-biscoff_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/lotus-biscoff_cookie_bg_white.png",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        }
    },
    "M-and-M_cookie":{
        title: "M&M Cookie",
        price: "$5.00",
        info: "M&M cookie filled with Nutella",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla",
        ongoingProductImg: "../images/cookies/M&M_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/M&M_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/M&M_cookie_bg_white.png",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        }
    },
    "Mr-Grinch_cookie":{
        title: "Mr. Grinch Cookie",
        price: "$5.00",
        info: "Neon green sugar cookie coated in sugar, topped with a powdered sugar tree and M&M heart",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla",
        ongoingProductImg: "../images/cookies/Mr-Grinch_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/Mr-Grinch_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/Mr-Grinch_cookie_bg_white.png",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        }
    },
    "s-mores_cookie":{
        title: "S'Mores Cookie",
        price: "$5.00",
        info: "Chocolate chip cookie mixed with marshmallows and graham cracker bits, topped with a Hershey milk chocolate square, teddy grahams, and marshmallows",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla",
        ongoingProductImg: "../images/cookies/s-mores_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/s-mores_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/s-mores_cookie_bg_white.png",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        }
    }
};

// Function to open the page content
function loadProductDetails(){
    // Get the ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // If the ID exists in our data, update the page
    if(productId && productData[productId]){
        const item = productData[productId];

        // Update Information
        document.querySelector('.product_title').textContent = item.title;
        document.querySelector('.product_info').textContent = item.info;
        document.querySelector('.ingredients').textContent = item.ingredients;
        if(item.ongoing){
            document.querySelector('.product_price').textContent = item.price;
        }

        // Update the image
        const mainImgDiv = document.querySelector('.main-product-image');
        const sideImg1 = document.querySelector('#side-image-1');
        const sideImg2 = document.querySelector('#side-image-2');
        
        mainImgDiv.style.backgroundImage = `url(${item.mainImg})`;
        sideImg1.style.backgroundImage = `url(${item.mainImg})`;
        sideImg2.style.backgroundImage = `url(${item.secondImg})`;

        if(item.ongoing === false){
            const buttons = document.querySelector('.product-view_product_purchase_actions');

            buttons.style.display = 'none';
        }
        // Image swapping logic
        const sideImages = document.querySelectorAll('.side-images');

        sideImages.forEach(img => {
            img.addEventListener('click', function(){
                // Get the background image of the clicked side-thumbnail
                const newImgUrl = this.style.backgroundImage;
                // Place the new background image in the main display
                mainImgDiv.style.backgroundImage = newImgUrl;
            });
        });
    }
    else{
        console.error("Product not found or no ID provided in URL.");
    }
}

// Run the function as soon as the window loads
window.onload = loadProductDetails;
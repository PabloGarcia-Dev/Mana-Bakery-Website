/* Product Template
    "product-id-breads":{
        title: "Product-title",
        price: "$Product-price",
        info: "Product-description",
        ingredients: "Ingredients: Product-Ingredients",
        mainImg: "Main-product-image",
        secondImg: "Second-product-image",
        ongoing: true or false,
        new: true or false // Controlls if the item gets displayed in the Home Page's product carrousel
    },
    "product-id-cookies":{
        title: "Product-title",
        price: "$Product-price",
        info: "Product-description",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "Main-ongoing-product-image",
        seasonedProductImg: "Main-seasoned-product-image",
        secondImg: "Second-product-image",
        ongoing: true, // Controlls whether the item gets a price when the user clicks from the bakedGoods page and changes the background
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: true // Controlls if the item gets displayed in the Home Page's product carrousel
    },
    */
const CART_VERSION = "v1.1.7";

// Constant containing all of the product details
const productData = {
    //----------- Sourdough Breads -------------
    "original_sourdough":{
        title: "Original Sourdough Loaf",
        price: "$8.30",
        info: "Artisan sourdough bread made from homemade starter",
        ingredients: "Ingredients: Bread flour, water, sourdough starter (All purpose flour, bread flour, water), pink Himalayan salt. Weight: 810g",
        mainImg: "../images/sourdough/original_sourdough_bg.webp",
        secondImg: "../images/sourdough/original_sourdough_og_bg.webp",
        ongoing: true,
        new: false
    },
    "oregano-parmesian_sourdough":{
        title: "Oregano Parmesian Sourdough",
        price: "$14.00",
        info: "Artisan sourdough with fresh and dry organo, with aged grated parmesan cheese",
        ingredients: "Ingredients: Bread Flour, Water, Sourdough Starter (Bread Flour, Water), Fresh Oregano, Dried Oregano, Grated Parmesan Cheese, Pink Himalayan Salt, Rice Flour (for dusting)",
        mainImg: "../images/sourdough/oregano-parmesian_sourdough_bg.webp",
        secondImg: "../images/sourdough/oregano-parmesian_sourdough_og_bg.webp",
        ongoing: true,
        new: false // Controlls if the item gets displayed in the Home Page's product carrousel
    },
    "rosemary-loaf_sourdough":{
        title: "Rosemary Sourdough Loaf",
        price: "$9.75",
        info: "Artisan sourdough with fresh and dried rosemary",
        ingredients: "Ingredients: Bread Flour, Water, Sourdough Starter (Bread Flour, Water), Pink Himalayan Salt, Fresh Rosemary, Dried Rosemary, Rice Flour (for dusting)",
        mainImg: "../images/sourdough/rosemary-sourdough-loaf_sourdough_bg.webp",
        secondImg: "../images/sourdough/rosemary-sourdough-loaf_sourdough_og_bg.webp",
        ongoing: true,
        new: false // Controlls if the item gets displayed in the Home Page's product carrousel
    },
    "original-freshly-milled_sourdough":{
        title: "Original Freshly Milled Sourdough",
        price: "$10.00",
        info: "Made with 100% freshly milled flour using hard white wheat and hard red wheat",
        ingredients: "Ingredients: Freshly Milled Hard White Wheat Flour, Freshly Milled Hard Red Wheat Flour, Water, Sourdough Starter (Bread Flour, Water), Pink Himalayan Salt, Rice Flour (for dusting)",
        mainImg: "../images/sourdough/original-freshly-milled_sourdough_bg.webp",
        secondImg: "../images/sourdough/original-freshly-milled_sourdough_og_bg.webp",
        ongoing: true,
        new: false // Controlls if the item gets displayed in the Home Page's product carrousel
    },
    "jalapeno-cheddar_sourdough":{
        title: "Jalapeño Cheddar Sourdough Loaf",
        price: "$14.00",
        info: "Artisan sourdough with fresh jalapenos and extra sharp yellow cheddar cheese",
        ingredients: "Ingredients: Bread Flour, Water, Sourdough Starter (Bread Flour, Water), Fresh Jalapeños, Extra Sharp Cheddar Cheese, Pink Himalayan Salt, Rice Flour (for dusting)",
        mainImg: "../images/sourdough/jalapeno-cheddar_sourdough_bg.webp",
        secondImg: "../images/sourdough/jalapeno-cheddar_sourdough_og_bg.webp",
        ongoing: true,
        new: false // Controlls if the item gets displayed in the Home Page's product carrousel
    },
    "chocolate-chip-loaf_sourdough":{
        title: "Chocolate Chip Loaf Sourdough",
        toppings:[
            {
                label: "Mini",
                price: 4.00,
                img: "../images/sourdough/chocolate-chip-loaf_mini_sourdough_og_bg.webp"
            },
            {
                label: "Full Size",
                price: 12.00,
                img: "../images/sourdough/chocolate-chip-loaf_full_sourdough_og_bg.webp"
            }
        ],
        info: "Artisan sourdough with semi-sweet chocolate chips and milk chocolate chips (~350 grams)",
        ingredients: "Bread Flour, Water, Sourdough Starter (Bread Flour, Water), Pink Himalayan Salt, Milk Chocolate Chips, Semi Sweet Chocolate Chips, Rice Flour (For Dusting)",
        mainImg: "../images/sourdough/chocolate-chip-loaf_mini_sourdough_bg.webp",
        secondImg: "../images/sourdough/chocolate-chip-loaf_mini_sourdough_og_bg.webp",
        ongoing: true,
        new: false
    },
    "rosemary-focaccia_sourdough":{
        title: "Rosemary Sourdough Focaccia",
        price: "$8.30",
        info: "Sourdough focaccia brushed with butter, garnished with rosemary and sea salt flakes",
        ingredients: "Ingredients: Bread flour, Sourdough starter (Bread flour, All purpose Flour, Water), Water, Olive oil, Pink Himalayan salt, Extra Virgin Olive Oil, Rosemary. Weight: 611g",
        mainImg: "../images/sourdough/rosemary_focaccia_sourdough_bg.webp",
        secondImg: "../images/sourdough/rosemary_focaccia_sourdough_og_bg.webp",
        ongoing: true,
        new: false
    },
    "oregano-garlic-focaccia_sourdough":{
        title: "Oregano-Garlic Sourdough Focaccia",
        price: "$10.30",
        info: "Naturally fermented sourdough focaccia made with fresh oregano, garlic powder, and olive oil",
        ingredients: "Ingredients: Bread Flour, Water, Sourdough Starter (Bread flour, All purpose flour, Water), Pink Himalayan Salt, Extra Virgin Olive Oil, Fresh Oregano, Garlic Powder, Sea Salt (for topping). Weight: 611g",
        mainImg: "../images/sourdough/oregano_garlic_focaccia_sourdough_bg.webp",
        secondImg: "../images/sourdough/oregano_garlic_focaccia_sourdough_og_bg.webp",
        ongoing: true,
        new: false
    },
    "pumpkin-shaped-original_sourdough":{
        title: "Pumpkin-Shaped Original Sourdough Loaf",
        price: "$9.00",
        info: "Artisan sourdough bread made from homemade starter in the shape of a pumpkin",
        ingredients: "Ingredients: Bread flour, water, sourdough starter (All purpose flour, bread flour, water), pink Himalayan salt. Weight: 611g",
        mainImg: "../images/sourdough/pumpkin-shaped-original_sourdough_bg.webp",
        secondImg: "../images/sourdough/pumpkin-shaped-original_sourdough_og_bg.webp",
        ongoing: true,
        new: true
    },
    "pumpkin-seed-cheddar_sourdough":{
        title: "Pumpkin Seed Cheddar Sourdough Loaf",
        price: "$14.00",
        info: "Artisan sourdough with roasted  pumpkin seeds and extra sharp yellow cheddar cheese",
        ingredients: "Ingredients: Bread Flour, Water, Sourdough Starter (Bread Flour, Water), Sharp Cheddar Cheese, Roasted Pumpkin Seeds,Pink Himalayan Salt, Rice Flour (for dusting). Weight: 611g",
        mainImg: "../images/sourdough/pumpkin-seed-cheddar_sourdough_bg.webp",
        secondImg: "../images/sourdough/pumpkin-seed-cheddar_sourdough_og_bg.webp",
        ongoing: true,
        new: true
    },
    "cinnamon-raisin_sourdough":{
        title: "Cinnamon Raisin Sourdough Loaf",
        price: "$12.00",
        info: "Artisan sourdough with raisins and cinnamon",
        ingredients: "Ingredients: Bread Flour, Water, Sourdough Starter (Bread Flour, Water), Raisins, Ground Cinnamon,Pink Himalayan Salt, Brown Sugar, Rice Flour (for dusting). Weight: 611g",
        mainImg: "../images/sourdough/cinnamon-raisin_sourdough_bg.webp",
        secondImg: "../images/sourdough/cinnamon-raisin_sourdough_og_bg.webp",
        ongoing: true,
        new: true
    },
    /*
    "honey-oat_sourdough":{
        title: "Honey Oat Sourdough",
        price: "$12.00",
        info: "Honey Oat sourdough loaf with butter roasted oats and a subtle hint of cinnamon topped with old fashioned oats",
        ingredients: "Ingredients: Bread flour, Sourdough starter (Bread flour, All purpose Flour, Water), Old Fashioned Oats, Butter, Cinnamon",
        mainImg: "../images/sourdough/honey-oat_sourdough_bg.webp",
        secondImg: "../images/sourdough/honey-oat_sourdough_og_bg.webp",
        ongoing: true,
        new: false
    },
    */


    //----------- Cookies -------------
    "carrot-cake_cookie":{
        title: "Carrot Cake Cookie",
        price: "$8.25",
        info: "Vanilla cookie with cream cheese chocolate chips, mixed with pecans, stuffed with carrot cake",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/carrot-cake_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/carrot-cake_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/carrot-cake_cookie_bg.webp",
        ongoing: true,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: true
    },
    "pumpkin-spice-latte_cookie":{
        title: "Pumpkin Spice Latte Cookie",
        price: "$8.25",
        info: "Pumpkin spice cookie with cream cheese chocolate chips, stuffed with a coffee spread",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/pumpkin-spice-latte_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/pumpkin-spice-latte_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/pumpkin-spice-latte_cookie_bg.webp",
        ongoing: true,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: true
    },
    "pecan-dulce-de-leche_cookie":{
        title: "Pecan Dulce de Leche Cookie",
        price: "$8.25",
        info: "Vanilla cookie with chocolate chips, mixed with pecans, stuffed with dulce de leche",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/pecan-dulce-de-leche_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/pecan-dulce-de-leche_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/pecan-dulce-de-leche_cookie_bg.webp",
        ongoing: true,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: true
    },
    "banana-pudding_cookie":{
        title: "Banana Pudding Cookie",
        price: "$8.25",
        info: "Vanilla cookie with white chocolate chips, mixed with Nilla wafers, filled with a banana pudding cream",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/banana-pudding_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/banana-pudding_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/banana-pudding_cookie_bg.webp",
        ongoing: true,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: true
    },
    "cocoa-coffee-toffee_cookie":{
        title: "Cocoa Coffee Toffee Cookie",
        price: "$8.25",
        info: "Black cocoa espresso cookie with chocolate chips, mixed with bits of toffee",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/cocoa-coffee-toffee_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/cocoa-coffee-toffee_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/cocoa-coffee-toffee_cookie_bg.webp",
        ongoing: true,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: true
    },
    "peanut-butter-reeses_cookie":{
        title: "Peanut Butter Reese's Cookie",
        price: "$8.25",
        info: "Chocolate cookie with chocolate chips, mixed with Reese’s pieces, filled with peanut butter and a Reese’s peanut butter cup",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/peanut-butter-reeses_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/peanut-butter-reeses_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/peanut-butter-reeses_cookie_bg.webp",
        ongoing: true, // Controlls whether the item gets a price when the user clicks from the bakedGoods page and changes the background
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: true // Controlls if the item gets displayed in the Home Page's product carrousel
    },
    "walnut-chocolate-chip_cookie":{
        title: "Walnut Chocolate Chip Cookie",
        price: "$8.25",
        info: "Classic chocolate chip cookie mixed with roasted walnuts",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/walnut-chocolate-chip_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/walnut-chocolate-chip_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/walnut-chocolate-chip_cookie_bg.webp",
        ongoing: true,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: true
    },
    "chocolate-chip_cookie":{
        title: "Classic Chocolate Chip Cookie",
        price: "$7.00",
        info: "Chocolate chip cookie topped with sea salt",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/chocolate-chip_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/chocolate-chip_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/chocolate-chip_cookie_bg.webp",
        ongoing: true,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: true
    },
    
    
    
    
    
    "apple-pie_cookie":{
        title: "Apple Pie Cookie",
        price: "$8.25",
        info: "Vanilla cookie base, filled with apple pie fillling, topped with glaze",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/apple-pie_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/apple-pie_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/apple-pie_cookie_bg.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "biscoff_cookie":{
        title: "Biscoff Cookie",
        price: "$8.00",
        info: "Vanilla cookie with white chocolate chips, mixed with Biscoff cookie bits, filled with Biscoff cookie butter, topped with half a Biscoff cookie",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/biscoff_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/biscoff_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/biscoff_cookie_bg_white.webp",
        ongoing: false, // Controlls whether the item gets a price when the user clicks from the bakedGoods page and changes the background
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false // Controlls if the item gets displayed in the Home Page's product carrousel
    },
    "biscoreo_cookie":{
        title: "Biscoreo Cookie",
        price: "$8.00",
        info: "Vanilla cookie with chocolate chips, mixed with Biscoff and Oreo cookie bits, filled with cookie butter, topped with half a Biscoff cookie",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/biscoreo-cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/biscoreo-cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/biscoreo-cookie_bg.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "chocolate-brigadeiro_cookie":{
        title: "Chocolate Brigadeiro Cookie",
        price: "$8.00",
        info: "Vanilla cookie with chocolate chips, filled with chocolate brigadeiro, rolled in chocolate sprinkles",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/chocolate-brigadeiro_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/chocolate-brigadeiro_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/chocolate-brigadeiro_cookie_bg.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "chocolate-dulce-de-leche_cookie":{
        title: "Chocolate Dulce de Leche Cookie",
        price: "$8.00",
        info: "Chocolate cookie with chocolate chips, filled with dulce de leche, topped with dulce de leche and chocolate bits",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/chocolate-dulce-de-leche_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/chocolate-dulce-de-leche_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/chocolate-dulce-de-leche_cookie_bg.webp",
        ongoing: false, // Controlls whether the item gets a price when the user clicks from the bakedGoods page and changes the background
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false // Controlls if the item gets displayed in the Home Page's product carrousel
    },
    "circus-animal_cookie":{
        title: "Circus Animal Cookie",
        price: "$8.25",
        info: "Vanilla cookie with white chocolate chips, mixed with circus animal crackers, filled with white chocolate, covered in sprinkles, topped with a circus animal cracker",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/circus-animal_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/circus-animal_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/circus-animal_cookie_bg.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "cookie-monster_cookie":{
        title: "Cookie Monster Cookie",
        price: "$5.50",
        info: "Chocolate chip cookie mixed with Oreos and Chips Ahoy, topped with candy eyes and cookie halves",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/cookie-monster_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/cookie-monster_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/cookie-monster_cookie_bg_white.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "cookies-and-cream_cookie":{
        title: "Cookies & Cream Cookie",
        price: "$8.25",
        info: "Vanilla cookie with chocolate chips, mixed with Oreo bits, filled with cookies and cream spread, topped with half an Oreo",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/cookies-&-cream_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/cookies-&-cream_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/cookies-&-cream_cookie_bg.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "cupids-tiramisu_cookie":{
        title: "Cupid's Tiramisu Cookie",
        price: "$5.00",
        info: "Vanilla cookie with white and chocolate chips, filled with a ladyfinger square and tiramisu spread, topped with white chocolate and cocoa powder",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/cupids-tiramisu_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/cupids-tiramisu_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/cupids-tiramisu_cookie_bg.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "dubai-choco_cookie":{
        title: "Dubai Chocolate Cookie", /*Change back after Febuary (Currently Valentine's Day Themed Name)*/
        price: "$6.50",
        info: "Chocolate chip cookie, filled with pistachio spread and crispy Kataifi, topped with Nutella, Kataifi, pistachios, and pistachio shavings",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/dubai-choco_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/dubai-choco_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/dubai-choco_cookie_bg.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "dubai-pistachio_cookie":{
        title: "Dubai Pistachio Cookie",
        price: "$8.25",
        info: "Chocolate cookie with chocolate chips, mixed with pistachios, filled with pistachio spread and crispy Kataifi, topped with pistachios",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/dubai-pistachio_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/dubai-pistachio_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/dubai-pistachio_cookie_bg.webp",
        ongoing: false, // Controlls whether the item gets a price when the user clicks from the bakedGoods page and changes the background
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false // Controlls if the item gets displayed in the Home Page's product carrousel
    },
    "ferrero-kisses_cookie":{
        title: "Ferrero Kisses Cookie",
        price: "$6.00",
        info: "Chocolate cookie with chocolate chips, filled with Nutella and a Ferrero Rocher, topped with half a Ferrero, chocolate drizzle, and macadamia shavings",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/ferrero-kisses_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/ferrero-kisses_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/ferrero-kisses_cookie_bg.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "ferrero-macadamia_cookie":{
        title: "Ferrero Macadamia Cookie",
        price: "$8.60",
        info: "Chocolate cookies with chocolate chips, mixed with macadamia nuts, filled with a Ferrero and Nutella, topped with half a Ferrero ",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/ferrero-macademia_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/ferrero-macademia_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/ferrero-macademia_cookie_bg.webp",
        ongoing: false, // Controlls whether the item gets a price when the user clicks from the bakedGoods page and changes the background
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false // Controlls if the item gets displayed in the Home Page's product carrousel
    },
    "ferrero-rocher_cookie":{
        title: "Ferrero Rocher Cookie",
        price: "$8.25",
        info: "Chocolate cookie with chocolate chips, mixed with hazelnuts, filled with a Ferrero Rocher and Nutella",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/ferrero-rocher_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/ferrero-rocher_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/ferrero-rocher_cookie_bg.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "fudge-brownie_cookie":{
        title: "Fudge Brownie Cookie",
        price: "$8.25",
        info: "Vanilla cookie with chocolate chips, mixed with brownie bits, filled with a brownie and Nutella, topped with a brownie",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/fudge-brownie_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/fudge-brownie_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/fudge-brownie_cookie_bg.webp",
        ongoing: false, // Controlls whether the item gets a price when the user clicks from the bakedGoods page and changes the background
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false // Controlls if the item gets displayed in the Home Page's product carrousel
    },
    "ghirardelli-chocolate-caramel_cookie":{
        title: "Ghirardelli Chocolate-Caramel Cookie",
        price: "$5.50",
        info: "Chocolate chip cookie mixed with caramel bits, filled with Nutella and a Ghirardelli triangle, topped with chocolate bark drizzle and a Ghirardelli triangle",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/ghirardelli_choco-caramel_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/ghirardelli_choco-caramel_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/ghirardelli_choco-caramel_cookie_bg_white.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "guava-dulce-de-leche_cookie":{
        title: "Guava Dulce De Leche Cookie",
        price: "$8.25",
        info: "Vanilla cookie with white chocolate chips, mixed with walnut bits, filled with guava paste and dulce de leche",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/guava-dulce-de-leche_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/guava-dulce-de-leche_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/guava-dulce-de-leche_cookie_bg.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "heart-chocolate-chip_cookie":{
        title: "Heart Chocolate Chip Cookie",
        price: "$4.00",
        info: "Chocolate chip cookie topped with sea salt",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/heart-chocolate-chip_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/heart-chocolate-chip_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/heart-chocolate-chip_cookie_bg.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "holiday-half-dipped_cookie":{
        title: "Holiday Half-Dipped Cookie",
        price: "$5.50",
        info: "Chocolate chip cookie, filled with Nutella, half topped with chocolate bark and holiday nonpareils",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/holiday-half-dipped_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/holiday-half-dipped_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/holiday-half-dipped_cookie_bg_white.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "holiday-M-and-M_cookie":{
        title: "Holiday M&M Cookie",
        price: "$5.50",
        info: "M&M cookie filled with Nutella",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/holiday-M&M_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/holiday-M&M_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/holiday-M&M_cookie_bg_white.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "kinder-bueno_cookie":{
        title: "Kinder Bueno Cookie",
        price: "$8.25",
        info: "Vanilla cookie with chocolate chips, mixed bueno spread, filled with bueno spread, topped with white chocolate and kinder bueno square",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/kinder-bueno_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/kinder-bueno_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/kinder-bueno_cookie_bg.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "kinder-bueno-hippo_cookie":{
        title: "Kinder Bueno Hippo Cookie",
        price: "$8.00",
        info: "Vanilla cookie with chocolate chips, filled with white hazelnut cream, topped with a Kinder Bueno Hippo and white chocolate shavings",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/kinder-bueno-hippo_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/kinder-bueno-hippo_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/kinder-bueno-hippo_cookie_bg.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "lotus-biscoff_cookie":{
        title: "Lotus-Biscoff Cookie",
        price: "$5.50",
        info: "White chocolate chip cookie mixed with Biscoff chunks, filled with Biscoff cookie butter, topped with a Biscoff cookie and cookie butter drizzle",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/lotus-biscoff_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/lotus-biscoff_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/lotus-biscoff_cookie_bg_white.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "love-and-lotus_cookie":{
        title: "Love and Lotus Cookie",
        price: "$5.50",
        info: "Vanilla cookie with white chocolate chips and Lotus cookie chunks, filled with Biscoff cookie butter, topped with a Biscoff cookie and Lotus cookie butter drizzle",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/love-and-lotus_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/love-and-lotus_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/love-and-lotus_cookie_bg.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "mana-duo_cookie":{
        title: "The Maná Duo",
        price: "$8.00",
        info: "Half vanilla, half chocolate cookie mixed with chocolate chips",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/mana-duo_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/mana-duo_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/mana-duo_cookie_bg_white.webp",
        ongoing: false, // Controlls whether the item gets a price when the user clicks from the bakedGoods page and changes the background
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false // Controlls if the item gets displayed in the Home Page's product carrousel
    },
    "M-and-M_cookie":{
        title: "M&M Cookie",
        price: "$5.50",
        info: "M&M cookie filled with Nutella",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/M&M_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/M&M_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/M&M_cookie_bg_white.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "Mr-Grinch_cookie":{
        title: "Mr. Grinch Cookie",
        price: "$5.50",
        info: "Neon green sugar cookie coated in sugar, topped with a powdered sugar tree and M&M heart",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/Mr-Grinch_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/Mr-Grinch_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/Mr-Grinch_cookie_bg_white.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "neapolitan-ice-cream_cookie":{
        title: "Neapolitan Ice Cream Cookie",
        price: "$5.50",
        info: "Vanilla cookie with chocolate chips, filled with white and strawberry chocolate spreads, topped with a mini chocolate cone and peanuts",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/neapolitan-ice-cream_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/neapolitan-ice-cream_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/neapolitan-ice-cream_cookie_bg.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "nutella-biscuit_cookie":{
        title: "Nutella Biscuit Cookie",
        price: "$8.00",
        info: "Half vanilla, half chocolate cookie with chocolate chips, filled with Nutella, topped with a Nutella Biscuit",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/nutella-biscuit_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/nutella-biscuit_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/nutella-biscuit_cookie_bg.webp",
        ongoing: false, // Controlls whether the item gets a price when the user clicks from the bakedGoods page and changes the background
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false // Controlls if the item gets displayed in the Home Page's product carrousel
    },
    "nutella-M-and-M_cookie":{
        title: "Nutella M&M Cookie",
        price: "$8.25",
        info: "Vanilla cookie with chocolate chips, mixed with M&M’s, filled with Nutella",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/nutella-M-and-M_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/nutella-M-and-M_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/nutella-M-and-M_cookie_bg.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "nutella-pirulin_cookie":{
        title: "Nutella-Pirulin Cookie",
        price: "$5.50",
        info: "Chocolate chip cookie mixed with pirulin bits, filled with nutella and pirulin pieces, topped with pirulin wafers",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/nutella-pirulin_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/nutella-pirulin_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/nutella-pirulin_cookie_bg_white.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "nutella-smores_cookie":{
        title: "Nutella S'mores Cookie",
        price: "$8.25",
        info: "Vanilla cookie with chocolate chips, mixed with graham cracker bits, filled with Nutella, topped with a medium torched marshmallow and Hershey square",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/nutella-smores_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/nutella-smores_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/nutella-smores_cookie_bg.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "pb-and-j-toast_cookie":{
        title: "PB&J Toast Cookie",
        price: "$8.25",
        info: "Vanilla cookie with white chocolate chips, filled with peanut butter and raspberry jelly, rolled in buttered sourdough crumbs, topped with a white chocolate square",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/pb-and-j-toast_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/pb-and-j-toast_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/pb-and-j-toast_cookie_bg.webp",
        ongoing: false, // Controlls whether the item gets a price when the user clicks from the bakedGoods page and changes the background
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false // Controlls if the item gets displayed in the Home Page's product carrousel
    },
    "raffaello-coconut_cookie":{
        title: "Raffaello Coconut Cookie",
        price: "$8.25",
        info: "Vanilla cookie with white chocolate chips, mixed with toasted almonds and coconut flakes, filled with a Raffaello and white chocolate, dipped in white chocolate and coconut flakes",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/raffaello-coconut_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/raffaello-coconut_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/raffaello-coconut_cookie_bg.webp",
        ongoing: false, // Controlls whether the item gets a price when the user clicks from the bakedGoods page and changes the background
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false // Controlls if the item gets displayed in the Home Page's product carrousel
    },
    "red-velvet_cookie":{
        title: "Red Velvet Cookie",
        price: "$5.00",
        info: "Red velvet cookie with white chocolate chips, filled with white chocolate",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/red-velvet_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/red-velvet_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/red-velvet_cookie_bg.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "reeses-peanut-butter-cup_cookie":{
        title: "Reese’s Peanut Butter Cup Cookie",
        price: "$5.00",
        info: " Chocolate cookie with chocolate chips, mixed with Reese’s peanut butter cup bits, filled with peanut butter, covered in chocolate, topped with peanuts",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/reeses-peanut-butter-cup_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/reeses-peanut-butter-cup_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/reeses-peanut-butter-cup_cookie_bg.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "salted-caramel-pretzel_cookie":{
        title: "Salted Caramel Pretzel Cookie",
        price: "$8.00",
        info: "anilla cookie with chocolate chips, mixed with pretzel pieces and caramel pearls, filled with caramel, topped with chocolate, sea salt, and a pretzel",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/salted-caramel-pretzel_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/salted-caramel-pretzel_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/salted-caramel-pretzel_cookie_bg.webp",
        ongoing: false, // Controlls whether the item gets a price when the user clicks from the bakedGoods page and changes the background
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false // Controlls if the item gets displayed in the Home Page's product carrousel
    },
    "s-mores_cookie":{
        title: "S'Mores Cookie",
        price: "$5.50",
        info: "Vanilla cookie with chocolate chips, mixed with graham cracker bits, with a graham cracker bottom, filled with marshmallow fluff, topped with a giant marshmallow and Hershey square",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/s-mores_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/s-mores_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/s-mores_cookie_bg.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "strawberry-matcha_cookie":{
        title: "Strawberry Matcha Cookie",
        price: "$8.00",
        info: "Ceremonial grade Matcha cookie with white chocolate chips, filled with strawberry cream, topped with white chocolate drizzle and dried strawberry shavings",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/strawberry-matcha_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/strawberry-matcha_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/strawberry-matcha_cookie_bg.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "strawberry-samba_cookie":{
        title: "Strawberry Samba Cookie",
        price: "$8.25",
        info: "Vanilla cookie with chocolate chips, mixed with samba bits, filled with strawberry spread",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/strawberry-samba_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/strawberry-samba_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/strawberry-samba_cookie_bg.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "sweetheart-monster_cookie":{
        title: "Sweetheart Monster Cookie",
        price: "$5.00",
        info: "Vanilla cookie with chocolate chips, mixed with Oreos and Chips Ahoy, filled with an Oreo, topped with candy eyes and half an Oreo",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/sweetheart-monster_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/sweetheart-monster_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/sweetheart-monster_cookie_bg.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "tiramisu_cookie":{
        title: "Tiramisu Cookie",
        price: "$8.00",
        info: "Vanilla cookie with chocolate chips, mixed with ladyfinger cookie bits, filled with tiramisu spread, topped with cocoa powder",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/tiramisu_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/tiramisu_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/tiramisu_cookie_bg_white.webp",
        ongoing: false, // Controlls whether the item gets a price when the user clicks from the bakedGoods page and changes the background
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false // Controlls if the item gets displayed in the Home Page's product carrousel
    },
    "winter-hot-cocoa_cookie":{
        title: "Winter Hot Cocoa",
        price: "$5.50",
        info: "Chocolate cookie with chocolate chips, filled with marshmallow fluff, topped with a giant marshmallow and a dash of cinnamon",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 6oz+",
        ongoingProductImg: "../images/cookies/winter-hot-cocoa_cookie_bg_ongoing.webp",
        seasonedProductImg: "../images/cookies/winter-hot-cocoa_cookie_bg_seasoned.webp",
        secondImg: "../images/cookies/winter-hot-cocoa_cookie_bg_white.webp",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "happy-vday-c-cake_holiday-specials":{
        title: "Happy V-Day Cookie Cake",
        sizes:[
            { label: "Small (210g)", price: 9.00 },
            { label: "Medium (420g)", price: 18.00 },
            { label: "Large (770g)", price: 27.00 }
        ],
        info: "Buttercream border, Nutella coating, sprinkle topping, chocolate letters",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla",
        mainImg: "../images/seasonalProducts/happy-vday_cookie-cake.webp",
        secondImg: "../images/seasonalProducts/Cookie-Cakes_bg.webp",
        ongoing: false,
        new: false
    },
    "xoxo-c-cake_holiday-specials":{
        title: "XOXO Cookie Cake",
        sizes:[
            { label: "Small (210g)", price: 9.00 },
            { label: "Medium (420g)", price: 18.00 },
            { label: "Large (770g)", price: 27.00 }
        ],
        info: "Sprinkle border, Nutella coating, chocolate letters",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla",
        mainImg: "../images/seasonalProducts/xoxo_cookie-cake.webp",
        secondImg: "../images/seasonalProducts/Cookie-Cakes_bg.webp",
        ongoing: false,
        new: false
    },


    //----------- Other Treats -------------
    "banana-muffins_other-treats":{
        title: "Banana Muffins - 6 Pack",
        toppings:[
            {
                label: "Regular",
                price: 18.54,
                img: "../images/otherTreats/banana-muffins_other-treats_og_bg.webp"
            },
            {
                label: "Nutella Chocolate Chip",
                price: 20.60,
                img: "../images/otherTreats/banana-muffins-nutella_other-treats_og_bg.webp"
            },
            {
                label: "Buttercream Chocolate Chip",
                price: 22.66,
                img: "../images/otherTreats/banana-muffins-Buttercream_other-treats_og_bg.webp"
            }
        ],
        info: "6-pack of all natural banana muffins with no preservatives",
        ingredients: "Ingredients: Flour, Baking Soda, Baking Powder, salt, butter, sugar, eggs, bananas, sour cream, chocolate chips",
        mainImg: "../images/otherTreats/banana-muffins_other-treats_bg.webp",
        secondImg: "../images/otherTreats/banana-muffins_other-treats_og_bg.webp",
        ongoing: true,
        new: false
    },
    "mini-chocolate-chips_other-treats":{
        title: "Mini Chocolate Chip Cookies - 15 Pack",
        price: "$8.24",
        info: "15 mini chocolate chip cookies with a Nutella cup",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla.",
        mainImg: "../images/otherTreats/mini-chocolate-chips_other-treats_bg.webp",
        secondImg: "../images/otherTreats/mini-chocolate-chips_other-treats_og_bg.webp",
        ongoing: true,
        new: false
    },
    "3-tier-c-cake_other-treats":{
        title: "3-Tier Cookie Cake",
        price: "$45.00",
        info: "Chocolate chip cookie cake, layered together by Nutella, topped with white vegan buttercream and rainbow sprinkles. Includes 6 cake toppers and a bear candle",
        ingredients: 'General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 1,300 grams',
        mainImg: "../images/otherTreats/3-tier-c-cake_other-treats_bg.webp",
        secondImg: "../images/otherTreats/3-tier-c-cake_other-treats_og_bg.webp",
        ongoing: true,
        new: false
    },
    /*
    "variety-pack-sourdough_other-treats":{
        title: "Mini Sourdough Variety Pack - 4 Pack",
        price: "$16.00",
        info: "With four mini sourdough loaves of rosemary, cinnamon sugar, original sourdough, and chocolate chip, our variety pack gives you the best of our four flavors!",
        ingredients: 'Ingredients: Bread flour, Water, Sourdough starter (Bread flour, All purpose flour, Water), Pink Himalayan Salt, Fresh Rosemary, Semi Sweet Chocolate Chip, Butter, Brown Sugar, Cinnamon (250 grams each)',
        mainImg: "../images/otherTreats/variety-pack_sourdough_other-treats_bg.webp",
        secondImg: "../images/otherTreats/variety-pack_sourdough_other-treats_og_bg.webp",
        ongoing: true,
        new: false
    },
    */

    /*----------- Special Gifts -------------
    "gift-voucher_special-gifts":{
        title: "Gift Voucher",
        info: "Give the gift of Maná! Set any amount between $10–$150 and we'll prepare a physical gift card for the recipient to use on a future order. Perfect for birthdays, holidays, or just because!",
        ingredients: "N/A",
        mainImg: "../images/specialGifts/gift-voucher_special-gifts_bg_big.webp",
        secondImg: "../images/specialGifts/gift-voucher_special-gifts_bg.webp",
        ongoing: true,
        isVoucher: true,
        new: true
    }
    */
};

// Function to open the page content
function loadProductDetails(){
    // Get the ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // If the ID exists in our data, update the page
    if(productId && productData[productId]){
        const item = productData[productId];
        const priceElement = document.querySelector('.product_price');
        const sizeContainer = document.querySelector('#size-selection-container');
        const toppingContainer = document.querySelector('#topping-selection-container');

        // Update Information
        document.querySelector('.product_title').textContent = item.title;
        document.querySelector('.product_info').textContent = item.info;
        document.querySelector('.ingredients').textContent = item.ingredients;
        if(item.ongoing && item.price){
            document.querySelector('.product_price').textContent = item.price;
        }

        // Logic for Voucher products with a custom amount input
        if(item.isVoucher){
            const priceEl = document.querySelector('.product_price');
            priceEl.textContent = '$10 – $150';

            const sizeContainer = document.querySelector('#size-selection-container');
            sizeContainer.innerHTML = `
                <div class="voucher-amount-selector">
                    <label for="voucher-amount">Voucher Amount ($):</label>
                    <input
                        type="number"
                        id="voucher-amount"
                        class="voucher-amount-input"
                        min="10"
                        max="150"
                        step="1"
                        placeholder="Enter amount ($10 – $150)"
                    >
                </div>`;
        }
        // Logic for Multi-size products (Like the Cookie Cakes)
        if(!item.isVoucher && item.sizes){
            let selectHTML = `<label for="size-select">Select Size: </label>`;
            selectHTML += `<select id="size-select" class="size-dropdown">`;
            
            item.sizes.forEach((size, index) => {
                selectHTML += `<option value="${index}">${size.label}</option>`;
            });
            selectHTML += `</select>`;
            
            sizeContainer.innerHTML = selectHTML;

            // Set initial price
            priceElement.textContent = `$${item.sizes[0].price.toFixed(2)}`;

            // Add event listener to change price
            document.getElementById('size-select').addEventListener('change', (e) => {
                const selectedIndex = e.target.value;
                priceElement.textContent = `$${item.sizes[selectedIndex].price.toFixed(2)}`;
            });
        }
        else if(!item.isVoucher && item.toppings){ // Logic for Multi-topping products (Like the Banana Muffins)
            let selectHTML;
            if(item.title === "Chocolate Chip Loaf Sourdough"){
                selectHTML = `<label for="topping-select">Select Size: </label>`;
            }
            else{
                selectHTML = `<label for="topping-select">Select Topping: </label>`;
            }
            selectHTML += `<select id="topping-select" class="topping-dropdown">`;
            
            item.toppings.forEach((topping, index) => {
                selectHTML += `<option value="${index}">${topping.label}</option>`;
            });
            selectHTML += `</select>`;
            
            toppingContainer.innerHTML = selectHTML;

            // Set initial price
            priceElement.textContent = `$${item.toppings[0].price.toFixed(2)}`;

            // Add event listener to change price
            document.getElementById('topping-select').addEventListener('change', (e) => {
                const selectedIndex = e.target.value;
                priceElement.textContent = `$${item.toppings[selectedIndex].price.toFixed(2)}`;
            });

            document.getElementById('topping-select').addEventListener('change', (e) => {
                const selectedIndex = e.target.value;
                const selectedTopping = item.toppings[selectedIndex];

                // Update the price
                priceElement.textContent = `$${selectedTopping.price.toFixed(2)}`;

                // Update the secondary image if a topping image exists
                if(selectedTopping.img) {
                    sideImg2.style.backgroundImage = `url(${selectedTopping.img})`;
                    mainImgDiv.style.backgroundImage = `url(${selectedTopping.img})`; // Makes the main image jump to the new image
                }
            });
        }

        // Inject sliced checkbox for sourdough products
        const slicedContainer = document.querySelector('#size-selection-container');
        if(!item.isVoucher && productId.endsWith('_sourdough') && slicedContainer){
            slicedContainer.innerHTML = `
                <div class="sliced-option">
                    <input type="checkbox" class="sliced-checkbox" id="sliced-${productId}">
                    <label for="sliced-${productId}">Would you like the loaf sliced?</label>
                </div>`;
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

        // Logic for the sizes
    }
    else{
        console.error("Product not found or no ID provided in URL.");
    }
}

// Run the function as soon as the window loads
window.onload = loadProductDetails;
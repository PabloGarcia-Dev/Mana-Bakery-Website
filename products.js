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
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "Main-ongoing-product-image",
        seasonedProductImg: "Main-seasoned-product-image",
        secondImg: "Second-product-image",
        ongoing: true or false, // Controlls whether the item gets a price when the user clicks from the bakedGoods page and changes the background
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: true or false // Controlls if the item gets displayed in the Home Page's product carrousel
    },
    */

// Constant containing all of the product details
const productData = {
    //----------- Sourdough Breads -------------
    "original_sourdough":{
        title: "Original Sourdough Bread",
        price: "$8.00",
        info: "Naturally leavened sourdough bread with a crisp, golden crust and a soft, chewy interior. Slow-fermented for deep, tangy flavor and perfect for slicing, toasting, or enjoying fresh",
        ingredients: "Ingredients: Bread flour, water, sourdough starter (All purpose flour, bread flour, water), pink Himalayan salt. Weight: 810g",
        mainImg: "../images/sourdough/original_sourdough_bg.png",
        secondImg: "../images/sourdough/original_sourdough_bg_white.png",
        ongoing: true,
        new: false
    },
    "rosemary-focaccia_sourdough":{
        title: "Rosemary Sourdough Focaccia",
        price: "$8.00",
        info: "Bubbly and airy with a chewy crumb, this naturally leavened sourdough focaccia is topped with fresh rosemary and extra-virgin olive oil. Ideal for dipping or enjoying all on its own",
        ingredients: "Ingredients: Bread flour, Sourdough starter (Bread flour, All purpose Flour, Water), Water, Olive oil, Pink Himalayan salt, Extra Virgin Olive Oil, Rosemary. Weight: 611g",
        mainImg: "../images/sourdough/rosemary_focaccia_sourdough_bg.png",
        secondImg: "../images/sourdough/rosemary_focaccia_sourdough_og_bg.png",
        ongoing: true,
        new: false
    },
    "oregano-garlic-focaccia_sourdough":{
        title: "Oregano-Garlic Sourdough Focaccia",
        price: "$10.00",
        info: "Naturally fermented sourdough focaccia made with fresh oregano, garlic powder, and olive oil. Light, airy, and full of flavor, this focaccia pairs beautifully with soups, salads, dips, or enjoyed on its own",
        ingredients: "Ingredients: Bread Flour, Water, Sourdough Starter (Bread flour, All purpose flour, Water), Pink Himalayan Salt, Extra Virgin Olive Oil, Fresh Oregano, Garlic Powder, Sea Salt (for topping). Weight: 611g",
        mainImg: "../images/sourdough/oregano_garlic_focaccia_sourdough_bg.png",
        secondImg: "../images/sourdough/oregano_garlic_focaccia_sourdough_og_bg.png",
        ongoing: true,
        new: false
    },
    "honey-oat_sourdough":{
        title: "Honey Oat Sourdough",
        price: "$12.00",
        info: "Honey Oat sourdough loaf with butter roasted oats and a subtle hint of cinnamon topped with old fashioned oats",
        ingredients: "Ingredients: Bread flour, Sourdough starter (Bread flour, All purpose Flour, Water), Old Fashioned Oats, Butter, Cinnamon",
        mainImg: "../images/sourdough/honey-oat_sourdough_bg.png",
        secondImg: "../images/sourdough/honey-oat_sourdough_og_bg.jpg",
        ongoing: true,
        new: true
    },


    //----------- Cookies -------------
    "kinder-bueno-hippo_cookie":{
        title: "Kinder Bueno Hippo Cookie",
        price: "$6.50",
        info: "Vanilla cookie with chocolate chips, filled with white hazelnut cream, topped with a Kinder Bueno Hippo and white chocolate shavings",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "../images/cookies/kinder-bueno-hippo_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/kinder-bueno-hippo_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/kinder-bueno-hippo_cookie_bg.jpg",
        ongoing: true,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: true
    },
    "reeses-peanut-butter-cup_cookie":{
        title: "Reese’s Peanut Butter Cup Cookie",
        price: "$5.00",
        info: " Chocolate cookie with chocolate chips, mixed with Reese’s peanut butter cup bits, filled with peanut butter, covered in chocolate, topped with peanuts",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "../images/cookies/reeses-peanut-butter-cup_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/reeses-peanut-butter-cup_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/reeses-peanut-butter-cup_cookie_bg.jpg",
        ongoing: true,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: true
    },
    "straberry-matcha_cookie":{
        title: "Strawberry Matcha Cookie",
        price: "$6.50",
        info: "Vanilla cookie with chocolate chips, filled with white hazelnut cream, topped with a Kinder Bueno Hippo and white chocolate shavings",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "../images/cookies/straberry-matcha_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/straberry-matcha_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/straberry-matcha_cookie_bg.jpg",
        ongoing: true,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: true
    },
    "guava-dulce-de-leche_cookie":{
        title: "Guava-Dulce de Leche Cookie",
        price: "$5.00",
        info: "Vanilla cookie with white chocolate chips, filled with guava paste and dulce de leche",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "../images/cookies/guava-dulce-de-leche_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/guava-dulce-de-leche_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/guava-dulce-de-leche_cookie_bg.jpg",
        ongoing: true,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: true
    },
    "cocoa-coffee-toffee_cookie":{
        title: "Cocoa Coffee Toffee Cookie",
        price: "$6.50",
        info: "Vanilla cookie with chocolate chips, filled with white hazelnut cream, topped with a Kinder Bueno Hippo and white chocolate shavings",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "../images/cookies/cocoa-coffee-toffee_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/cocoa-coffee-toffee_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/cocoa-coffee-toffee_cookie_bg.jpg",
        ongoing: true,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: true
    },
    "dubai-choco_cookie":{
        title: "Dubai Chocolate Cookie", /*Change back after Febuary (Currently Valentine's Day Themed Name)*/
        price: "$6.50",
        info: "Chocolate chip cookie, filled with pistachio spread and crispy Kataifi, topped with Nutella, Kataifi, pistachios, and pistachio shavings",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "../images/cookies/dubai-choco_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/dubai-choco_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/dubai-choco_cookie_bg.jpg",
        ongoing: true,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: true
    },
    "s-mores_cookie":{
        title: "S'Mores Cookie",
        price: "$5.50",
        info: "Vanilla cookie with chocolate chips, mixed with graham cracker bits, with a graham cracker bottom, filled with marshmallow fluff, topped with a giant marshmallow and Hershey square",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "../images/cookies/s-mores_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/s-mores_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/s-mores_cookie_bg.jpg",
        ongoing: true,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: true
    },
    "chocolate-chip_cookie":{
        title: "Chocolate Chip Cookie",
        price: "$4.00",
        info: "Chocolate chip cookie topped with sea salt",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "../images/cookies/chocolate-chip_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/chocolate-chip_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/chocolate-chip_cookie_rbg-1.jpeg",
        ongoing: true,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: true
    },
    "red-velvet_cookie":{
        title: "Red Velvet Cookie",
        price: "$5.00",
        info: "Red velvet cookie with white chocolate chips, filled with white chocolate",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "../images/cookies/red-velvet_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/red-velvet_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/red-velvet_cookie_bg.png",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "ferrero-kisses_cookie":{
        title: "Ferrero Kisses Cookie",
        price: "$6.00",
        info: "Chocolate cookie with chocolate chips, filled with Nutella and a Ferrero Rocher, topped with half a Ferrero, chocolate drizzle, and macadamia shavings",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "../images/cookies/ferrero-kisses_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/ferrero-kisses_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/ferrero-kisses_cookie_bg.png",
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
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "../images/cookies/neapolitan-ice-cream_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/neapolitan-ice-cream_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/neapolitan-ice-cream_cookie_bg.png",
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
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "../images/cookies/love-and-lotus_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/love-and-lotus_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/love-and-lotus_cookie_bg.png",
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
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "../images/cookies/sweetheart-monster_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/sweetheart-monster_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/sweetheart-monster_cookie_bg.png",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "nutella-M-and-M_cookie":{
        title: "Nutella M&M Cookie",
        price: "$5.00",
        info: "M&M cookie filled with nutella",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "../images/cookies/nutella-M-and-M_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/nutella-M-and-M_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/nutella-M-and-M_cookie_bg.png",
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
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "../images/cookies/heart-chocolate-chip_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/heart-chocolate-chip_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/heart-chocolate-chip_cookie_bg.png",
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
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "../images/cookies/cupids-tiramisu_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/cupids-tiramisu_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/cupids-tiramisu_cookie_bg.png",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "cookies-and-cream_cookie":{
        title: "Cookies & Cream Cookie",
        price: "$5.50",
        info: "White and chocolate chip cookie mixed with oreo bits, filled with cookies and cream spread, topped with a Hershey's mini square, white chocolate bark drizzle, Oreo half, and crushed Oreo",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "../images/cookies/cookies-&-cream_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/cookies-&-cream_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/cookies-&-cream_cookie_bg_white.png",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "ghirardelli-chocolate-caramel_cookie":{
        title: "Ghirardelli Chocolate-Caramel Cookie",
        price: "$5.50",
        info: "Chocolate chip cookie mixed with caramel bits, filled with Nutella and a Ghirardelli triangle, topped with chocolate bark drizzle and a Ghirardelli triangle",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "../images/cookies/ghirardelli_choco-caramel_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/ghirardelli_choco-caramel_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/ghirardelli_choco-caramel_cookie_bg_white.png",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "kinder-bueno_cookie":{
        title: "Kinder Bueno Cookie",
        price: "$5.50",
        info: "White and milk chocolate chip cookie mixed with Bueno squares, filled with white chocolate hazelnut spread, topped with Bueno squares and white chocolate hazelnut drizzle",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "../images/cookies/kinder-bueno_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/kinder-bueno_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/kinder-bueno_cookie_bg_white.png",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "winter-hot-cocoa_cookie":{
        title: "Winter Hot Cocoa",
        price: "$5.50",
        info: "Chocolate cookie with chocolate chips, filled with marshmallow fluff, topped with a giant marshmallow and a dash of cinnamon",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "../images/cookies/winter-hot-cocoa_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/winter-hot-cocoa_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/winter-hot-cocoa_cookie_bg_white.png",
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
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "../images/cookies/nutella-pirulin_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/nutella-pirulin_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/nutella-pirulin_cookie_bg_white.png",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "circus-animal_cookie":{
        title: "Circus Animal Cookie",
        price: "$5.50",
        info: "White chocolate chip cookie mixed with circus animal crackers,rolled in rainbow nonpareils, topped with white chocolate bark drizzle and a circus animal cracker",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "../images/cookies/circus-animal_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/circus-animal_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/circus-animal_cookie_bg_white.png",
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
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "../images/cookies/cookie-monster_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/cookie-monster_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/cookie-monster_cookie_bg_white.png",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "ferrero-rocher_cookie":{
        title: "Ferrero Rocher Cookie",
        price: "$5.50",
        info: "Chocolate cookie with chocolate chips, filled with Nutella and a Ferrero Rocher, topped with half a Ferrero, chocolate drizzle, and macadamia shavings",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "../images/cookies/ferrero-rocher_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/ferrero-rocher_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/ferrero-rocher_cookie_bg_white.png",
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
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "../images/cookies/holiday-half-dipped_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/holiday-half-dipped_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/holiday-half-dipped_cookie_bg_white.png",
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
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "../images/cookies/holiday-M&M_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/holiday-M&M_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/holiday-M&M_cookie_bg_white.png",
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
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "../images/cookies/lotus-biscoff_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/lotus-biscoff_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/lotus-biscoff_cookie_bg_white.png",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "M-and-M_cookie":{
        title: "M&M Cookie",
        price: "$5.50",
        info: "M&M cookie filled with Nutella",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "../images/cookies/M&M_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/M&M_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/M&M_cookie_bg_white.png",
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
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla. Weight: 160g",
        ongoingProductImg: "../images/cookies/Mr-Grinch_cookie_bg_ongoing.png",
        seasonedProductImg: "../images/cookies/Mr-Grinch_cookie_bg_seasoned.png",
        secondImg: "../images/cookies/Mr-Grinch_cookie_bg_white.png",
        ongoing: false,
        get mainImg() {
            return this.ongoing ? this.ongoingProductImg : this.seasonedProductImg;
        },
        new: false
    },
    "happy-vday_c-cake":{
        title: "Happy V-Day Cookie Cake",
        sizes:[
            { label: "Small (210g)", price: 9.00 },
            { label: "Medium (420g)", price: 18.00 },
            { label: "Large (770g)", price: 27.00 }
        ],
        info: "Buttercream border, Nutella coating, sprinkle topping, chocolate letters",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla",
        mainImg: "../images/seasonalProducts/happy-vday_cookie-cake.png",
        secondImg: "../images/seasonalProducts/Cookie-Cakes_bg.jpg",
        ongoing: true,
        new: false
    },
    "xoxo_c-cake":{
        title: "XOXO Cookie Cake",
        sizes:[
            { label: "Small (210g)", price: 9.00 },
            { label: "Medium (420g)", price: 18.00 },
            { label: "Large (770g)", price: 27.00 }
        ],
        info: "Sprinkle border, Nutella coating, chocolate letters",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla",
        mainImg: "../images/seasonalProducts/xoxo_cookie-cake.png",
        secondImg: "../images/seasonalProducts/Cookie-Cakes_bg.jpg",
        ongoing: true,
        new: false
    },

    //----------- Other Treats -------------
    "banana-muffins_other-treats":{
        title: "Banana Muffins - 6 Pack",
        toppings:[
            {
                label: "Regular",
                price: 18.00,
                img: "../images/otherTreats/banana-muffins_other-treats_og_bg.jpeg"
            },
            {
                label: "Nutella Chocolate Chip",
                price: 20.00,
                img: "../images/otherTreats/banana-muffins-nutella_other-treats_og_bg.png"
            },
            {
                label: "Buttercream Chocolate Chip",
                price: 22.00,
                img: "../images/otherTreats/banana-muffins-Buttercream_other-treats_og_bg.png"
            }
        ],
        info: "6-pack of all natural banana muffins with no preservatives",
        ingredients: "Ingredients: Flour, Baking Soda, Baking Powder, salt, butter, sugar, eggs, bananas, sour cream, chocolate chips",
        mainImg: "../images/otherTreats/banana-muffins_other-treats_bg.png",
        secondImg: "../images/otherTreats/banana-muffins_other-treats_og_bg.jpeg",
        ongoing: true,
        new: false
    },
    "mini-chocolate-chips_other-treats":{
        title: "Mini Chocolate Chip Cookies - 15 Pack",
        price: "$8.00",
        info: "15 mini chocolate chip cookies with a Nutella cup",
        ingredients: "General Ingredients: Flour, Sugar, Brown Sugar, Eggs, Butter, Baking Powder, Baking Soda, Corn Starch, Salt, Vanilla.",
        mainImg: "../images/otherTreats/mini-chocolate-chips_other-treats_bg.png",
        secondImg: "../images/otherTreats/mini-chocolate-chips_other-treats_og_bg.jpeg",
        ongoing: true,
        new: false
    },
    "variety-pack_other-treats_sourdough":{
        title: "Mini Sourdough Variety Pack - 4 Pack",
        price: "$15.00",
        info: "With four mini sourdough loaves of rosemary, cinnamon sugar, original sourdough, and chocolate chip, our variety pack gives you the best of our four flavors!",
        ingredients: 'Ingredients: Bread flour, Water, Sourdough starter (Bread flour, All purpose flour, Water), Pink Himalayan Salt, Fresh Rosemary, Semi Sweet Chocolate Chip, Butter, Brown Sugar, Cinnamon (250 grams each)',
        mainImg: "../images/otherTreats/variety-pack_sourdough_other-treats_bg.png",
        secondImg: "../images/otherTreats/variety-pack_sourdough_other-treats_og_bg.jpeg",
        ongoing: true,
        new: false
    },
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
        // Logic for Multi-size products (Like the Cookie Cakes)
        if(item.sizes){
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
        else if(item.toppings){ // Logic for Multi-topping products (Like the Banana Muffins)
            let selectHTML = `<label for="topping-select">Select Topping: </label>`;
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
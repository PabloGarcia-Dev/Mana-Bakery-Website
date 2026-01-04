🥖 Maná Bakery - Order Management System
Maná Bakery is a custom-built, responsive web application designed for a home-based bakery in Jacksonville, FL. The site features a full product catalog, a dynamic shopping cart, and a specialized order request system with built-in lead-time logic.

View the site live here: https://PabloGarcia-Dev.github.io/Mana_Bakery/

✨ Features Built
🛒 Dynamic Shopping Cart
Real-time sidebar cart that allows users to add, remove, and adjust quantities without refreshing the page.

Persistent storage using localStorage to save the user's cart even if they navigate away or refresh the browser.

Live price calculations for totals and sub-totals.

📅 Advanced Lead-Time Logic
2-Day Standard Lead Time: The system automatically restricts the pick-up calendar to a minimum of 2 days from the current date.

Bulk Order Detection: If the cart contains 5 or more sourdough breads, the system dynamically shifts the required lead time to 3 days to accommodate baking schedules. This is mainly to ensure enough time for the sourdough starter to grow enough for the order.

Closed Dates: Built-in validation to prevent orders on Sundays.

🔍 Interactive UX & UI
Scroll Animations: Reviews and product cards use the Intersection Observer API to slide gracefully into view as the user scrolls.

Responsive Header: A custom-designed navigation system with a mobile-friendly layout and integrated social media links.

📩 Formspree Integration
Fully functional "Order Request" form that sends a detailed summary of the customer's contact info, selected pick-up date, and cart contents directly to the bakery's email.

Tech Stack
HTML5: Semantic structure for better accessibility and SEO.

CSS3: Custom variables, Flexbox/Grid layouts, and keyframe animations for a modern aesthetic.

JavaScript (ES6+): DOM manipulation, localStorage API, and Intersection Observer.

FontAwesome: Integrated iconography for professional visual cues.

Disclaimer
This project was developed for a cottage food operation. Products are produced in a home kitchen that is not subject to Florida's food safety regulations.

Author
Pablo Garcia

LinkedIn: 
GitHub: https://github.com/PabloGarcia-Dev
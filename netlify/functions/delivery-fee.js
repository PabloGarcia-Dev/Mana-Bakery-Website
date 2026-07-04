const ORS_API_KEY = process.env.ORS_API_KEY;
const BAKERY_LAT = 30.169813370400842;
const BAKERY_LNG = -81.6278687843248;

const BASE_FEE = 5.00;        // flat starting fee
const RATE_PER_MILE = 1.00;   // added per mile of driving distance
const MAX_DELIVERY_MILES = 7; // beyond this, delivery isn't offered

exports.handler = async (event) => {
  try{
    const{ address } = JSON.parse(event.body);
    if(!address) {
      return { statusCode: 400, body: JSON.stringify({ error: "Address required" }) };
    }

    // Step 1: Geocode the customer's address
    const geoRes = await fetch(
      `https://api.openrouteservice.org/geocode/search?api_key=${ORS_API_KEY}&text=${encodeURIComponent(address)}&boundary.country=US&size=1`
    );
    const geoData = await geoRes.json();
    const coords = geoData.features?.[0]?.geometry?.coordinates; // [lng, lat]

    if(!coords) {
      return { statusCode: 422, body: JSON.stringify({ error: "Could not find that address" }) };
    }

    const [custLng, custLat] = coords;

    // Step 2: Get driving distance from bakery to customer
    const routeRes = await fetch("https://api.openrouteservice.org/v2/directions/driving-car", {
      method: "POST",
      headers: {
        "Authorization": ORS_API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        coordinates: [[BAKERY_LNG, BAKERY_LAT], [custLng, custLat]]
      })
    });
    const routeData = await routeRes.json();
    const meters = routeData.routes?.[0]?.summary?.distance;

    if (!meters) {
      return { statusCode: 422, body: JSON.stringify({ error: "Could not calculate a route to that address" }) };
    }

    const miles = meters / 1609.34;

    if (miles > MAX_DELIVERY_MILES) {
      return {
        statusCode: 200,
        body: JSON.stringify({ deliverable: false, miles: miles.toFixed(1) })
      };
    }

    let fee = 0;
    if(miles < 5){
        fee = 5;
    }
    else{
        fee = +Math.ceil(BASE_FEE + RATE_PER_MILE * miles);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ deliverable: true, miles: +miles.toFixed(1), fee })
    };

  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: "Server error calculating delivery fee" }) };
  }
};
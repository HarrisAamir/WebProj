const mongoose = require("mongoose")

const restaurant = new mongoose.Schema({
  restaurantDescription: { type: String, required: true },
  restaurantName: { type: String, required: true },
  restaurantPassword: { type: String, required: true },
  restaurantStatus: { type: String, required: true },
  restaurantType: { type: String, required: true },
  restaurantuserName: { type: String, required: true},
  restaurantLogo: { type: String, required: true },
});
const restaurantModel = new mongoose.model("restaurants", restaurant);
module.exports = restaurantModel;

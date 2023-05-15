const mongoose = require("mongoose")

const restaurant = new mongoose.Schema({
  restaurantdescription: { type: String, required: true },
  restaurantname: { type: String, required: true },
  restaurantpassword: { type: String, required: true },
  restaurantstatus: { type: String, required: true },
  restauranttype: { type: String, required: true },
  restaurantusername: { type: String, required: true, unique:true },
  restaurantlogo: { type: String, required: true },
});
const restaurantModel = new mongoose.model("restaurants", restaurant);
module.exports = restaurantModel;

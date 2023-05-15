const restaurantModel = require("../models/restaurants");

let createRestaurant =async (req, res) => {
    const restaurant = new restaurantModel(req.body);
    await restaurant.save();
    res.json(restaurant);}



module.exports = {
   createRestaurant,
  
}
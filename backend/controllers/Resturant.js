const restaurantModel = require("../models/restaurants");

let createRestaurant =async (req, res) => {
    const rest={
        "restaurantDescription": req.body.restaurantDescription,
        "restaurantName": req.body.restaurantName,
        "restaurantPassword": req.body.restaurantPassword,
        "restaurantStatus": req.body.restaurantStatus,
        "restaurantType": req.body.restaurantType,
        "restaurantuserName":req.body.restaurantuserName,
        "restaurantLogo": req.body.restaurantLogo
    }
    
    const restaurant = new restaurantModel(rest);
    console.log(restaurant)
    await restaurant.save().catch(err=>{console.log(err)});
    res.json(restaurant);}

let deleteRestaurant = async (req, res) => {
        const restaurantID = req.params.id;
        restaurantModel.findByIdAndDelete(restaurantID).then((deletedRestaurant)=> {
          if (deletedRestaurant) {
          res.json(deletedRestaurant);
        } else {
          res.status(404).json({ error: 'Restaurant not found' })
        }}).catch(error=>{
        res.status(500).json({ error: 'An error occurred while deleting the restaurant' })});
        }
    let editRestaurant = async (req, res) => {
            const restaurantID = req.body._id;
            const updatedData={
              "restaurantDescription": req.body.restaurantDescription,
              "restaurantName": req.body.restaurantName,
              "restaurantPassword": req.body.restaurantPassword,
              "restaurantStatus": req.body.restaurantStatus,
              "restaurantType": req.body.restaurantType,
              "restaurantuserName":req.body.restaurantuserName,
              "restaurantLogo": req.body.restaurantLogo
            }
          
            restaurantModel.findByIdAndUpdate(restaurantID, updatedData, { new: true })
              .then((updatedRestaurant) => {
                if (updatedRestaurant) {
                  res.json(updatedRestaurant);
                } else {
                  res.status(404).json({ error: 'Restaurant not found' });
                }
              })
              .catch((error) => {
                res.status(500).json({ error: 'An error occurred while updating the restaurant' });
              });
          };
    let getAllRestaurants = async (req, res) => {
            restaurantModel.find().then(restaurants=>{res.json(restaurants)}).catch((error) =>{
            res.status(500).json({ error: 'An error occurred while fetching the restaurants' });
          })}
   
module.exports = {
   createRestaurant,
   deleteRestaurant,
   editRestaurant,
   getAllRestaurants
}
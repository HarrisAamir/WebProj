
const {createStore} = require("../controllers/Store")
const {editStore} = require("../controllers/Store")
const {deleteStore} = require("../controllers/Store")
const {viewAllStores} = require("../controllers/Store")
const {createRestaurant} = require("../controllers/Resturant")
const {deleteRestaurant} = require("../controllers/Resturant")
const {editRestaurant} = require("../controllers/Resturant")
const {getAllRestaurants} = require("../controllers/Resturant")
const AdminRouter = require("express").Router();

AdminRouter.get("/viewAllStores",viewAllStores )
AdminRouter.post("/addNewStore",createStore )
AdminRouter.put("/editStore",editStore )
AdminRouter.delete("/deleteStore:id",deleteStore )
AdminRouter.post("/addNewResturant",createRestaurant )
AdminRouter.delete("/deleteRestaurant:id",deleteRestaurant )
AdminRouter.post("/editRestaurant",editRestaurant )
AdminRouter.get("/getAllRestaurants",getAllRestaurants)

module.exports = AdminRouter;


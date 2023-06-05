
const {createStore} = require("../controllers/Store")
const {editStore} = require("../controllers/Store")
const {deleteStore} = require("../controllers/Store")
const {viewAllStores} = require("../controllers/Store")
const {createRestaurant} = require("../controllers/Resturant")
const {deleteRestaurant} = require("../controllers/Resturant")
const {editRestaurant} = require("../controllers/Resturant")
const {getAllRestaurants} = require("../controllers/Resturant")
const {getAllCustomers} = require("../controllers/User")
const {checkIfAdmin} = require("../util")

const jwt = require('jsonwebtoken');
const AdminRouter = require("express").Router();

AdminRouter.get("/viewAllStores",viewAllStores )
AdminRouter.post("/addNewStore",checkIfAdmin,createStore )
AdminRouter.post("/editStore",checkIfAdmin,editStore )
AdminRouter.delete("/deleteStore/:id",checkIfAdmin,deleteStore )
AdminRouter.post("/addNewResturant",checkIfAdmin,createRestaurant )
AdminRouter.delete("/deleteRestaurant/:id",checkIfAdmin,deleteRestaurant )
AdminRouter.post("/editRestaurant",checkIfAdmin,editRestaurant )
AdminRouter.get("/getAllRestaurants",getAllRestaurants)
AdminRouter.get("/getAllCustomers",checkIfAdmin,getAllCustomers)
const login=(req,res)=>{
        if (req.body.username=="Admin" && req.body.password=="Admin"){
          
            const payload = {
                role:"Admin"
              };
              const secretKey = 'secretkey';
              const options = {
                expiresIn: '24h'
              };
              
              const token = jwt.sign(payload, secretKey, options);
              res.status(200).send(token); 
        }
        else res.status(404).send("invalid Data")
}

AdminRouter.post("/login",login)
module.exports = AdminRouter;


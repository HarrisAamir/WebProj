const {getAllOrders} = require("../controllers/Rider")
const {getOutforDeliveryOrders} = require("../controllers/Rider")
const {getPreparingOrders} = require("../controllers/Rider")
const {checkIfRider} = require("../util")
const jwt = require('jsonwebtoken');
const RiderRouter = require("express").Router();
RiderRouter.get("/getAllOrders",checkIfRider,getAllOrders )
RiderRouter.get("/getOutforDeliveryOrders",checkIfRider,getOutforDeliveryOrders )
RiderRouter.get("/getPreparingOrders",checkIfRider,getPreparingOrders )
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


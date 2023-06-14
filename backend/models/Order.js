const mongoose = require("mongoose")


const OrderSchema = mongoose.Schema(
        {
                OderDate:{type: String, required: true},
                OrderPickupLocation:{type: String, required: true},
                OrderDropOffLocation:{type: String, required: true},
                OrderPrice:{type: String, required: true},
                OrderStatus:{type: String, required: true},
                OrderItems:{type:Array, required:true},
                RiderID:{type: String, required: false},
                CustomerID:{type: String, required: false},
                ShopID:{type: String, required: true},
            }
        );


const Order= mongoose.model('Orders', OrderSchema)
module.exports = Order;
import mongoos from 'mongoose'

const Order= new mongoos.Schema(
    {
        OderDate:{type: String, required: true},
        OrderPickupLocation:{type: String, required: true},
        OrderDropOffLocation:{type: String, required: true},
        OrderPrice:{type: String, required: true},
        OrderStatus:{type: String, required: true},
        RiderID:{type: String, required: true},
        CustomerID:{type: String, required: true},
        ShopID:{type: String, required: true},
    }
);
const OrderSchema = new mongoos.model("Orders",Order);
export default OrderSchema;

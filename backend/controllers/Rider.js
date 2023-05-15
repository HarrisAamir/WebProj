const Order = require("../models/Order");

let getAllOrders = async (req, res) => {
    Order.find().then(Order=>{res.json(Order)}).catch((error) =>{
    res.status(500).json({ error: 'An error occurred while fetching the Orders' });
  })}


let getOutforDeliveryOrders = async (req, res) => {
    Order.find().then(Order=>{
        Order=Order.filter((e)=>{return e.status=="Out for Delivery"})
        res.json(Order)}
        ).catch((error) =>{
    res.status(500).json({ error: 'An error occurred while fetching the Orders' });
  })}

let getPreparingOrders = async (req, res) => {
    Order.find().then(Order=>{
        Order=Order.filter((e)=>{return e.status=="Preparing"})
        res.json(Order)}
        ).catch((error) =>{
    res.status(500).json({ error: 'An error occurred while fetching the Orders' });
  })}

  let acceptOrder=async (req, res) => {
    const modified = await Order.findByIdAndUpdate(
      req.params.id,
      { status: "Out for Delivery" },
    );
    res.json(modified);
  };

module.exports={
    getAllOrders,getOutforDeliveryOrders,getPreparingOrders,acceptOrder
}

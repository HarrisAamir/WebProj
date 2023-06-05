const User = require("../models/User");
const Order = require("../models/Order");

let getAllCustomers = (req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(404).json({ err: err });
    });
};
let getAllOrders = (req, res) => {
  Order.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(404).json({ err: err });
    });
};

  module.exports = {
    getAllCustomers,
    getAllOrders
 }
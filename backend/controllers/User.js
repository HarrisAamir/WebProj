const User = require("../models/User");

let getAllCustomers = (req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(404).json({ err: err });
    });
};


  module.exports = {
    getAllCustomers
 }
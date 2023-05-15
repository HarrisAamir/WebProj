const grocerystoreModel = require("../models/groceryStore");

let createStore =async (req, res) => {
    const grocerystoreitem = req.body
    const newgrocerystoreitems = new grocerystoreModel(grocerystoreitem);
    await newgrocerystoreitems.save();
    res.json(grocerystoreitem);}

module.exports = {
    createStore
}
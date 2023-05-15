import mongoose from "mongoose";

const MenuItems = new mongoose.Schema({
    itemDescription: { type: String, required: true },
    itemImg: { type: String, required: true },
    itemName: { type: String, required: true },
    itemPrice: { type: String, required: true },
    resturantName: { type: String, required: true },
});

const MenuItemsModel = new mongoose.model("MenuItems", MenuItems);

export default MenuItemsModel;

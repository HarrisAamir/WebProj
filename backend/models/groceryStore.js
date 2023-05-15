const mongoose = require("mongoose")

const grocerystore = new mongoose.Schema({
    grocerystoreName: { type: String, required: true },
    grocerystorePassword: { type: String, required: true },
    grocerystoreStatus: { type: String, required: true },
    grocerystoreuserName: { type: String, required: true },
    grocerystoreLogo: { type: String, required: true },
  });
  
  const grocerystoreModel = new mongoose.model("grocerystores", grocerystore);
  
  module.exports = grocerystoreModel;
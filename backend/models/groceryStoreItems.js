import mongoose from 'mongoose';
const grocerystoreitems = new mongoose.Schema({
    grocerystoreName: { type: String, required: true },
    itemName: { type: String, required: true },
    itemPrice: { type: String, required: true },
    itemType: { type: String, required: true },
    itemDescription: { type: String, required: true },
    itemImage: { type: String, required: true },
  });
  
  const grocerystoreitemModel = new mongoose.model("grocerystoresitems", grocerystoreitems);
  
  export default grocerystoreitemModel;
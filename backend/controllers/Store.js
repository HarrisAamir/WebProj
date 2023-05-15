const grocerystoreModel = require("../models/groceryStore");

let createStore =async (req, res) => {
    const grocerystore = req.body
    const newgrocerystore = new grocerystoreModel(grocerystore);
    await newgrocerystore.save();
    res.json(grocerystore);}

let editStore =async (req, res) => {
        const grocerystore = req.body 
        grocerystoreModel.findOneAndUpdate({"_id":grocerystore._id},
        { "grocerystoreName":grocerystore.grocerystoreName,
        "grocerystorePassword":grocerystore.grocerystorePassword,
        "grocerystoreStatus":grocerystore.grocerystoreStatus,
        "grocerystoreuserName": grocerystore.grocerystoreuserName,
        "grocerystoreLogo":grocerystore.grocerystoreLogo }
        ).then((updatedDoc) =>{
            if (updatedDoc) {
              // Document successfully updated
              console.log('Updated document:', updatedDoc);
              res.json(updatedDoc)
            }})
    }
let deleteStore = async (req, res) => {
        const grocerystoreID = req.params.id;
        grocerystoreModel.findByIdAndDelete(grocerystoreID)
          .then((deletedDoc) => {
            if (deletedDoc) {
              // Document successfully deleted
              res.json(deletedDoc);
            } else {
              // Document not found
              res.status(404).json({ error: 'Document not found' });
            }
          })
          .catch((error) => {
            // Error occurred while deleting the document
            res.status(500).json({ error: error});
          });
      };
    let viewAllStores = async (req, res) => {
        try {
          const stores = await grocerystoreModel.find();
          res.json(stores);
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while retrieving stores' });
        }
      };
module.exports = {
    createStore,
    editStore,
    deleteStore,
    viewAllStores
}
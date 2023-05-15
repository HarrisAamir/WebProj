
const {createStore} = require("../controllers/addNewStore")
const AdminRouter = require("express").Router();

AdminRouter.post("/addNewStore",createStore )

module.exports = AdminRouter;
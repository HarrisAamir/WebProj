/**
 * This is a basic starting point of the assignment
 * Modify the code according to your own needs and requirements
 */
const express = require("express");
//import bodyParser from 'body-parser';
// Importing user route
//import router from './routes/users.js';
const mongoose = require("mongoose")
const multer = require('multer');
const router = require('router')
require("dotenv").config();
const bodyParser = require('body-parser')
const app = express()
const port = 3001

app.use(bodyParser.json())
// Adding a Router
app.use('/users', router);

app.get('/', (req, res) => {
    res.send('Hello Universe!')
})

app.get('/todos', (req, res) => {
    res.send('A list of todo items will be returned')
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('Posting a Request')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

mongoose.connect(process.env.MONGODB_URI).then((err) => {
    console.log("Connected to DB")
}).catch((err) => {
    console.log(err)
})
const AdminRouter = require("./routes/adminRoute");
app.use("/admin",AdminRouter);


//importing requires packages//
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/routes');
require("dotenv").config();

const app = express();

//body parser//
app.use(express.json());

//Cors//
app.use(cors());

//MongoDB URI//


//Port//
const PORT = 8000;

//Router//
app.use('/', router)

//MongoDB Connection//
mongoose.connect(process.env.URI).then(()=> {
    app.listen(PORT, ()=> {
        console.log("Connected to MongoDB, server listening on port "+ PORT);
    });
}).catch((error)=> {
    console.log("Failed to connect to MongoDB, error: "+ error.message);
});

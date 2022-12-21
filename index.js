//importing requires packages//
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/routes');

const app = express();

//body parser//
app.use(express.json());

//Cors//
app.use(cors());

//MongoDB URI//
const URI = "mongodb+srv://quizapp:quizapp@cluster0.izqtx.mongodb.net/?retryWrites=true&w=majority";

//Port//
const PORT = 8080;

//Router//
app.use('/', router)

//MongoDB Connection//
mongoose.connect(URI).then(()=> {
    app.listen(PORT, ()=> {
        console.log("Connected to MongoDB, server listening on port "+ PORT);
    });
}).catch((error)=> {
    console.log("Failed to connect to MongoDB, error: "+ error.message);
});

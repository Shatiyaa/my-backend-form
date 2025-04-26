const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true); 
var routes=require('./routes/routes');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Mongoose connection
mongoose.connect("mongodb://127.0.0.1:27017/dbschool")
    .then(() => {
        console.log("DB connected!");
    })
    .catch((error) => {
        console.log("DB connection error:", error);
    });

// Start server
app.listen(8086, function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log("Port connected!");
    }
});
app.use(cors())
app.use(express.json())
app.use(routes);
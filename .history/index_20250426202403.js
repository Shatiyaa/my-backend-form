const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cors = require('cors');

mongoose.set('strictQuery', true); 


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Mongoose connection
mongoose.connect("mongodb://127.0.0.1:27017/dboffice")
  .then(() => {
    console.log("DB connected!");
  })
  .catch((error) => {
    console.log("DB connection error:", error);
  });

// Routes
app.use(routes);

app.get('/', (req, res) => {
  res.send('Backend Server is Running Successfully 🚀');
});


// Start server
app.listen(8086, function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server running on port 8086!");
  }
});
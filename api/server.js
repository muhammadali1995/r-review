const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;



app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/restaurant-review', { useNewUrlParser: true });
const connection = mongoose.connection;

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
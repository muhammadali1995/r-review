const mongoose  = require('mongoose');
require('dotenv').config();
// const MONGODB_URI = ""

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ilxk8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority` || "localhost", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
  console.log("mongose connected");
})
const mongoose  = require('mongoose');
// require('dotenv').config();
// const MONGODB_URI = ""

mongoose.connect(`mongodb+srv://admin:4377433mt@cluster0.ilxk8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
  console.log("mongose connected");
})
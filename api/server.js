const express = require("express");
const app = express();
const cors = require("cors");

// Routers //
const userRouter = require("./routers/user");
const restaurantRouter = require('./routers/restaurant');
const swaggerRouter = require('./routers/swagger');
// Routers //


require("./db/mongoose");

app.use(cors());
app.use(express.json());


app.use(userRouter);
app.use(restaurantRouter);
app.use(swaggerRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});


app.get("/", (req, res) => {
  res.send("Api is running");
});

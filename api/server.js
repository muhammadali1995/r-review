const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routers/user");
require("./db/mongoose");

app.use(cors());
app.use(express.json());

app.use(userRouter);

if (process.env.NODE_ENV === "production") {
  
}

const PORT = process.env.PORT | 4000;
app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});

app.get("/", (req, res) => {
  res.send("Api is running");
});

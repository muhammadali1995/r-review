const express = require("express");
const router = new express.Router();
const auth = require("../middleware/auth");

const Restaurant = require("../models/restaurant");

router.post("restaurants", auth, async(req, res) => {
    
});

router.get("restaurants", (req, res) => {
  Restaurant.find({})
    .then((restaurants) => {
      res.send(restaurants);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
module.exports = router;

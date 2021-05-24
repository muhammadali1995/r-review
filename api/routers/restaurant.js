const express = require("express");
const router = new express.Router();
const Restaurant = require("../models/restaurant");

const auth = require("../middleware/auth");
const verify = require("../middleware/verify");

router.post("/restaurants", [auth, verify], async (req, res) => {
  const restaurant = new Restaurant(req.body);
  restaurant
    .save()
    .then(() => {
      res.status(201).send(restaurant);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});
router.get("/restaurants", (req, res) => {
  Restaurant.find({})
    .then((restaurants) => {
      res.send(restaurants);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

module.exports = router;

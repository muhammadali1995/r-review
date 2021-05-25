const express = require("express");
const router = new express.Router();
const Restaurant = require("../models/restaurant");

const auth = require("../middleware/auth");
const verify = require("../middleware/verify");
const Roles = require("../models/roles");

router.post(
  "/restaurants",
  [auth, verify(Roles.OWNER, Roles.ADMIN)],
  async (req, res) => {
    const restaurant = new Restaurant(req.body);
    restaurant
      .save()
      .then(() => {
        res.status(201).send(restaurant);
      })
      .catch((e) => {
        res.status(400).send(e);
      });
  }
);

router.get("/restaurants/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const restaurant = await Restaurant.findById(id);
    res.send(restaurant);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/restaurants", (req, res) => {
  const searchText = req.query.searchText;
  Restaurant.find({ name: { $regex: ".*" + searchText + ".*" } })
    .then((restaurants) => {
      res.send(restaurants);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

module.exports = router;

const mongoose = require("mongoose");
const validator = require("validator");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isLength(value, { min: 5 })) {
        throw new Error("Address should be more than 5 chars");
      }
    },
  },
  photoUrl: {
    type: String,
    required: false,
    validate(value) {
      if (!validator.isURL(value)) {
        throw new Error("photoUrl should be a url");
      }
    },
  },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;

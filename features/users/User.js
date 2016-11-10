const mongoose = require("mongoose"),
  Cart = require("./Cart");

const User = new mongoose.Schema({
  facebook_id: {type: String, required: true, unique: true}
  , name: {type: String, required: true}
  , email: {type: String, unique: true}
  , cart: [Cart]
  , orders: [{type: mongoose.Schema.Types.ObjectId, ref: "Order"}]
});

module.exports = mongoose.model("User", User);

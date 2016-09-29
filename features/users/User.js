const mongoose = require("mongoose"),
  Cart = require("./Cart");

const User = new mongoose.Schema({
  name: {type: String, required: true, trim: true, unique: true}
  , email: {type: String, required: true, trim: true, unique: true, index: true}
  , password: {type: String, required: true}
  , cart: [Cart]
  , orders: [{type: mongoose.Schema.Types.ObjectId, ref: "Order"}]
});

module.exports = mongoose.model("User", User);

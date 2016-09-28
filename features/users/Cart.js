const mongoose = require("mongoose");
const Cart = new mongoose.Schema({
  products: [{type: mongoose.Schema.ObjectId, ref: 'Product'}]
});

module.exports = Cart;

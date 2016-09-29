const mongoose = require("mongoose");
const Cart = new mongoose.Schema({
  products: [{type: mongoose.Schema.ObjectId, ref: 'Product'}]
});

module.exports = Cart;


// UserId: 57ec4145e89b7e24d8544868
//Blue Sari: 57eaec1dddd3a413ec3aab5e

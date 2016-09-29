const mongoose = require("mongoose");
const Cart = new mongoose.Schema({
  item: {type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true}
  , quantity: {type: Number, min: 1}

});

module.exports = Cart;


// UserId: 57ec4145e89b7e24d8544868
//Blue Sari: 57eaec1dddd3a413ec3aab5e
// Other: 57eb155bf7170012c05b2389

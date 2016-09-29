const mongoose = require('mongoose')
  , User = require("./../users/User")
  , Product = require("./../products/Product")
  , Cart = require("./../users/Cart")
  , Order = new mongoose.Schema({
      user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
    , products: [Cart]
    , orderDate: {type: Date, default: new Date()}
    })

module.exports = mongoose.model("Order", Order)

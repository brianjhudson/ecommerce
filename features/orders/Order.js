const mongoose = require('mongoose')
  , Order = new mongoose.Schema({
      user: {type: Schema.Types.ObjectId, ref: 'User', required: true}
    , products: [{
        item: productSchema
      , quantity: {type: Number, required: true, min 1}
      }]
    , orderDate: {type: Date, default: new Date()}
    })

module.exports = mongoose.model("Order", Order)

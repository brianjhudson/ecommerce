const mongoose = require("mongoose");

const Product = new mongoose.Schema({
  title: { type: String, required: true, trim: true, unique: true }
  , description: {type: String, required: true}
  , price: { type: Number, min: 0 }
  , color: { type: String }
  , category: { type: String, enum: [ "children", "women", "men" ] }
  , imageUrl: {type: String} 

});

module.exports = mongoose.model("Product", Product);

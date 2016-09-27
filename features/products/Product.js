const mongoose = require("mongoose");

const Product = new mongoose.Schema({
  title: { type: String, required: true, trim: true, unique: true, index: true } // WE could jsut say name: String if not required
  , description: {type: String, required: true}
  , price: { type: Number, min: 0 }
  , color: { type: String }
  , category: { type: String, enum: [ "children", "women", "men" ] }

});

module.exports = mongoose.model("Product", Product);

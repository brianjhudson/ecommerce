const mongoose = require("mongoose")
  , User = require("./../users/User")
  , Product = require("./../products/Product");

module.exports = {
  postOrder(req, res) {
    new Order(req.body).save((err, product) => {
      if (err) return res.status(500).json(err);
      else return res.status(200).json(product);
    });
  }
}

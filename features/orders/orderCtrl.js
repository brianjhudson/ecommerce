const mongoose = require("mongoose")
  , User = require("./../users/User")
  , Product = require("./../products/Product")
  , Order = require("./Order");

module.exports = {
  createOrder(req, res) {
    User.findById(req.params.userId, (err, user) => {
      const newOrder = {
        user: user._id
        , products: user.cart
      };
      new Order(newOrder).save((err, order) => {
        if (err) return res.status(500).json(err);
        else {
          user.cart = [];
          user.save();
          user.orders.push(order._id);
          user.save();
          return res.status(200).json(order);
        }
      })
    });
  }

}

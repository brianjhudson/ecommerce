const User = require("./User");

module.exports = {
    postUser(req, res) {
      new User(req.body).save((err, user) => {
        if (err) return res.status(500).json(err);
        else return res.status(201).json(user);
      });
    },

    getUsers(req, res) {
      User.find()
      .populate("cart.item")
      .populate({
        path: "orders",
        populate: {path: "products.item"}
      })
      .exec()
      .then(results => {
        return res.status(201).json(results);
      }, error => {
        return res.status(500).json(error);
      })
    },

    getUserById(req, res) {
      User.findById(req.params.id)
      .populate("cart.item")
      .populate({
        path: "orders",
        populate: {path: "products.item"}
      })
      .exec()
      .then(results => {
        return res.status(201).json(results);
      }, error => {
        return res.status(500).json(error);
      })
    },

    postProductToCart(req, res) {
      User.findByIdAndUpdate(req.params.id, {$push: {cart: req.body}}, (err, user) => {
        if (err) return res.status(500).json(err);
        else return res.status(201).json(user);
      })
    },

    updateCart(req, res) {
      User.findById(req.params.id, (err, user) => {
        if (err) return res.status(500).json(err);
        else {
          const qty = Number(req.query.qty);
          for (let i = 0; i < user.cart.length; i++) {
            if (user.cart[i].item == req.query.itemId) {
              if (qty === 0) user.cart.pull(user.cart[i]._id);
              else user.cart.set(i, {quantity: qty, item: req.query.itemId});
              user.save();
              return res.status(201).json(user);
            }
          }
          return res.status(500).send("Item not found");
        }
      })
    }
}

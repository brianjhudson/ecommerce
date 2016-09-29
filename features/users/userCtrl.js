const User = require("./User");

module.exports = {
    postUser(req, res) {
      new User(req.body).save((err, user) => {
        if (err) return res.status(500).json(err);
        else return res.status(201).json(user);
      });
    },

    getUsers(req, res) {
      User.find({}, (err, users) => {
        if (err) return res.status(500).json(err);
        else return res.status(200).json(users);
      })
    },

    getUserById(req, res) {
      User.findById(req.params.id, (err, user) => {
        if (err) return res.status(500).json(err);
        else return res.status(201).json(user);
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

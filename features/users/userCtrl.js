const User = require("./User");

module.exports = {
    postUser(req, res) {
      new User(req.body).save((err, user) => {
        if (err) return res.status(500).json(err);
        else return res.status(200).json(user);
      });
    }
}

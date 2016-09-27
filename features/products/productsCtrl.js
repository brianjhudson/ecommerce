const Product = require("./Product");


module.exports = {
  getProducts(req, res) {
    let newQuery = {}
    if (req.query) {
      newQuery = req.query;
    }
    Product.find(newQuery, (err, data) => {
      if (err) return res.status(err).json(err);
      else return res.json(data);
    })
  },

  postProduct(req, res) {
    new Product(req.body).save((err, product) => {
      if (err) return res.status(err).json(err);
      else return res.json(product);
    });
  },

  getProductById(req, res) {
    Product.findById(req.params.id, (err, product) => {
      if (err) return res.status(err).json(err);
      else return res.json(product)
    });
  },

  deleteProduct(req, res) {
    Product.findByIdAndRemove(req.params.id, (err, product) => {
      if (err) return res.status(err).json(err);
      else return res.json(product);
    })
  },

  updateProduct(req, res) {
    if (!req.params) {
      return res.status(400).send("Id Query Needed");
    }
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, response) => {
        if (err) return res.status(err).json(err);
        else return res.json(response);
    })
  }
}

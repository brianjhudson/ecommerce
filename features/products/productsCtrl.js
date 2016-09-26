const mongojs = require("mongojs");
const db = mongojs("ecommerce", ["products"]);


module.exports = {
  getProducts(req, res) {
    let newQuery = {}
    if (req.query) {
      newQuery = req.query;
    }
    db.products.find(newQuery, (err, data) => {
      if (err) return res.status(err).json(err);
      else return res.json(data);
    })
  },

  postProduct(req, res) {
    db.products.insert(req.body, (err, product) => {
      if (err) return res.status(err).json(err);
      else return res.json(product);
    });
  },

  getProductById(req, res) {
    db.products.find(mongojs.ObjectId(req.params.id), (err, product) => {
      if (err) return res.status(err).json(err);
      else return res.json(product)
    });
  },

  deleteProduct(req, res) {
    db.products.remove({_id: mongojs.ObjectId(req.params.id)}, (err, product) => {
      if (err) return res.status(err).json(err);
      else return res.json(product);
    })
  },

  updateProduct(req, res) {
    if (!req.params.id) {
      return res.status(400).send("Id Query Needed");
    }
    db.products.update({_id: mongojs.ObjectId(req.params.id)}, (err, response) => {
      if (err) return res.status(err).json(err);
      else return res.json(response);
    })

  }
}

module.exports = {
  getProducts(req, res) {
    res.send("Working");
  },
  postProduct(req, res) {
    res.send("Working");
  },
  getProductById(req, res) {
    res.send("Working " + req.params.id);
  },
  deleteProduct(req, res) {
    res.send("Working " + req.params.id);
  }
}

const productsCtrl = require("./productsCtrl");

module.exports = app => {
  app.post("/api/products", productsCtrl.postProduct);
  app.get("/api/products", productsCtrl.getProducts);
  app.get("/api/products/:id", productsCtrl.getProductById);
  app.delete("/api/products/:id", productsCtrl.deleteProduct);
  app.put("/api/products/:id", productsCtrl.updateProduct);
}

const productRoutes = require("./features/products/productRoutes");

module.exports = app => {
  productRoutes(app);
}

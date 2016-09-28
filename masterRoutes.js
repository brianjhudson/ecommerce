const productRoutes = require("./features/products/productRoutes")
  , userRoutes = require("./features/users/userRoutes");

module.exports = app => {
  productRoutes(app);
  userRoutes(app);
}

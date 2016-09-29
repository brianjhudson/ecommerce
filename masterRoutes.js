const productRoutes = require("./features/products/productRoutes")
  , userRoutes = require("./features/users/userRoutes")
  , orderRoutes = require("./features/orders/orderRoutes");

module.exports = app => {
  productRoutes(app);
  userRoutes(app);
  orderRoutes(app);
}

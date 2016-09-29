const userCtrl = require("./userCtrl");

module.exports = app => {
  app.post("/api/users", userCtrl.postUser);
  app.get("/api/users", userCtrl.getUsers);
  app.get("/api/users/:id", userCtrl.getUserById)
  app.post("/api/users/:id", userCtrl.postProductToCart);
}

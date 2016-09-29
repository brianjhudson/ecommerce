const orderCtrl = require("./orderCtrl");

module.exports = app => {
  app.post("/api/orders/:userId", orderCtrl.createOrder);
}

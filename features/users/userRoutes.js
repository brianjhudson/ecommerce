const userCtrl = require("./userCtrl");

module.exports = app => {
  app.post("/api/users", userCtrl.postUser);
}

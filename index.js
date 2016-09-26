const express = require("express"),
  app = express(),
  {json} = require("body-parser"),
  cors = require("cors"),
  mongojs = require("mongojs"),
  db = mongojs("ecommerce", ["products"]),
  port = 8000;

app.use(cors());
app.use(json());

require("./features/products/productRoutes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));

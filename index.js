const express = require("express"),
  app = express(),
  {json} = require("body-parser"),
  cors = require("cors"),
  port = 8800,
  mongoose = require("mongoose"),
  mongoUri = "mongodb://localhost:27017/ecommerce";

app.use(cors());
app.use(json());
app.use(express.static(`${__dirname}/public`));


mongoose.connect(mongoUri);
mongoose.connection.once("open", () => console.log(`Connected to MongoDB at ${mongoUri}`));


require("./masterRoutes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));

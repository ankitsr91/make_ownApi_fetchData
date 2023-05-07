const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const router_product = require("./Routers/products");
const connectDb = require("./database/connection");

app.use("/api", router_product);

const start = async () => {
  try {
    await connectDb();
    app.listen(PORT, "127.0.0.1", () => {
      console.log("connecting to port " + PORT);
    });
  } catch (err) {
    console.log(err);
  }
};

start();

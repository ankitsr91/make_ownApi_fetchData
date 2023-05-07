const mongoose = require("mongoose");

const connectDb = () => {
  return mongoose
    .connect("mongodb://127.0.0.1:27017/OwnApi")
    .then(() => {
      console.log("Successfully connected to MongoDB ");
    })
    .catch((err) => {
      console.error(err);
    });
};
module.exports = connectDb;

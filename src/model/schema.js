const mongoose = require("mongoose");

const createSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: [true, "plz enter name here"],
  },
  rollno: {
    type: Number,
    unique: true,
    required: [true, "plz enter Roll Nubmer here"],
  },
  address: {
    type: String,
    required: [true, "plz enter Address here"],
  },
  classyear: {
    type: String,
    enum: {
      values: ["firstyear", "secondyear", "lastyear"],
      message: `{value} is not a valid`,
    },
  },
});

module.exports = mongoose.model("Information", createSchema);

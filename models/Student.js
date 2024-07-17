const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Student Schema
const StudentSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      default: "",
    },
    lastName: {
      type: String,
      trim: true,
      default: "",
    },
    displayName: {
      type: String,
      trim: true,
    },
    municipality: {
      type: String,
    },
  },
  { timestamps: true }
);

// Creating Model
module.exports = mongoose.model("Student", StudentSchema);

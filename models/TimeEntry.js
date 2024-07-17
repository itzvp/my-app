const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Worksnaps Time Entry Schema
const WorksnapsTimeEntrySchema = new Schema(
  {
    student: {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
    timeEntries: {
      type: Object,
    },
  },
  { timestamps: true }
);

// Creating Model
module.exports = mongoose.model("TimeEntry", WorksnapsTimeEntrySchema);

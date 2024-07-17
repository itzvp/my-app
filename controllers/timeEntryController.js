const TimeEntry = require("../models/TimeEntry");

exports.getTimeEntries = async (req, res) => {
  try {
    const timeEntries = await TimeEntry.find().populate("student");
    res.json(timeEntries);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

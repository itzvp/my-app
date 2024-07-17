const express = require("express");
const router = express.Router();
const timeEntryController = require("../controllers/timeEntryController");

// Route to get all time entries
router.get("/time-entries", timeEntryController.getTimeEntries);

module.exports = router;

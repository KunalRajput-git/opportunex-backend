const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  compensation: Number,
  applied_on: {
    type: Date,
    required: true,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["applied", "interviewing", "selected", "rejected", "declined"],
  },
  note: String,
});

module.exports = mongoose.model("Application", applicationSchema);

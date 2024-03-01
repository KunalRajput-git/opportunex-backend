const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  company_name: String,
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
    enum: ["applied", "interviewing", "pending","selected", "rejected", "declined"],
  },
  note: String,
});

module.exports = mongoose.model("Application", applicationSchema);

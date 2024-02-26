const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  industry: String,
  size: Number,
  founded_year: Number,
  website_url: String,
  careerpage_url: String,
  logo_url: String,
  founder: String,
  founder_img_url: String,
  description: String,
});

module.exports = mongoose.model("Company", companySchema);

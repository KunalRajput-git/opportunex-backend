const Application = require("./application-model");

const userApplicationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  applications: [Application],
});

module.exports = mongoose.model("UserApplication", userSchema);

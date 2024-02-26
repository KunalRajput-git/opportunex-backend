const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/serverConfig");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 20,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email is  ss ss required!"],
    lowercase: true,
    trim: true,
    match: [
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    trim: true,
    select: false,
  },
});

userSchema.pre("save", async function (next) {
  const hashedPassword = await bcrypt.hashSync(this.password, SALT_ROUNDS);
  this.password = hashedPassword;
  next();
});

module.exports = mongoose.model("User", userSchema);

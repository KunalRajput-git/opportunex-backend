require("dotenv").config();

module.exports = {
  SALT_ROUNDS: 10,
  JWT_KEY: process.env.NODE_JWT_KEY,
};

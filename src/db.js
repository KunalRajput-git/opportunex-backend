const mongoose = require("mongoose");
const { CONNECTION_URL } = require("./constants");

const connectToDb = async () => {
  try {
    mongoose.connect(CONNECTION_URL);
    const db = mongoose.connection;
    db.on("error", () => {
      throw new Error("MongoDB connection error!");
    });
    db.once("open", () => {
      console.log("Connected to MongoDB database!");
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDb;

const express = require("express");
const cors = require("cors");
const ApiRoutes = require("./routes/index");
const { PORT, CONNECTION_URL } = require("./constants");
const mongoose = require("mongoose");
const selfPing = require("./utils/selfping");
const connectToDb = require("./db");
require("dotenv").config();

// new express app
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/opportunex/api", ApiRoutes);

connectToDb();

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});

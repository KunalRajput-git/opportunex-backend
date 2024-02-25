const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const ApiRoutes = require("./routes/index");
require("dotenv").config();

// new express app
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", ApiRoutes);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});

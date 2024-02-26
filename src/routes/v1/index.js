const express = require("express");
const UserRoutes = require("./userRoutes");
const CompanyRoutes = require("./companyRoutes");
const router = express.Router();

router.use("/user", UserRoutes);
router.use("/companies", CompanyRoutes);

module.exports = router;

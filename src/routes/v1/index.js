const express = require("express");
const UserRoutes = require("./user-routes");
const CompanyRoutes = require("./company-routes");
const router = express.Router();

router.use("/user", UserRoutes);
router.use("/companies", CompanyRoutes);

module.exports = router;

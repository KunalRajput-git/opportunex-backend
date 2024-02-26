const express = require("express");
const CompanyReqValidators = require("../../middlewares/company-req-validators");
const { CompanyController } = require("../../controllers/index");
const router = express.Router();

router.get(
  "/filter",
  CompanyReqValidators.validatePageReq,
  CompanyController.get
);
module.exports = router;

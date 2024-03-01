const express = require("express");
const CompanyReqValidators = require("../../middlewares/company-req-validators");
const { CompanyController } = require("../../controllers/index");
const { AuthReqValidators } = require("../../middlewares");
const router = express.Router();

router.get(
  "/filter",
  CompanyReqValidators.validatePageReq,
  CompanyController.get
);

router.get(
  "/search",
  AuthReqValidators.validateAuthReq,
  CompanyController.searchCompany
);
module.exports = router;

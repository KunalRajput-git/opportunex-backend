const express = require("express");
const CompanyReqValidators = require("../../middlewares/company-req-validators");
const { CompanyController } = require("../../controllers/index");
const router = express.Router();

router.get(
  "/page/:pageNo",
  CompanyReqValidators.validatePageReq,
  CompanyController.getPage
);

module.exports = router;

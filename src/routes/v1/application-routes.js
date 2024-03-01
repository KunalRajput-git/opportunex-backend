const express = require("express");
const { ApplicationController } = require("../../controllers/index");
const { AuthReqValidators } = require("../../middlewares");
const router = express.Router();

router.post(
  "/:userId/",
  AuthReqValidators.validateAuthReq,
  ApplicationController.createApplication
);

router.get(
  "/:userId/",
  AuthReqValidators.validateAuthReq,
  ApplicationController.getAll
);

router.put(
  "/:userId/:applicationId/",
  AuthReqValidators.validateAuthReq,
  ApplicationController.updateApplication
);

router.delete(
  "/:userId/:applicationId",
  AuthReqValidators.validateAuthReq,
  ApplicationController.deleteApplication
);

module.exports = router;

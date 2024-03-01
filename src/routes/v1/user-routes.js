const express = require("express");
const { UserController } = require("../../controllers");
const { AuthReqValidators } = require("../../middlewares/index");

const router = express.Router();

router.post("/signup", UserController.signup);
router.post("/signin", UserController.signin);
router.patch(
  "/watchlist/add",
  AuthReqValidators.validateAuthReq,
  UserController.addToWatchlist
);
router.patch(
  "/watchlist/remove",
  AuthReqValidators.validateAuthReq,
  UserController.removeFromWatchlist
);

module.exports = router;

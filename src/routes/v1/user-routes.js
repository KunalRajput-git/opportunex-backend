const express = require("express");
const { UserController } = require("../../controllers");
const router = express.Router();

router.post("/signup", UserController.signup);
router.post("/signin", UserController.signin);
router.patch("/watchlist", UserController.addToWatchlist);

module.exports = router;

const { UserService } = require("../services/index");
const { extractToken } = require("../utils");

const userService = new UserService();

const validateAuthReq = (req, res, next) => {
  try {
    let token = extractToken(req, res);
    userService.verifyToken(token);
    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: {
        ...error,
        message: error.message,
      },
    });
  }
};

module.exports = { validateAuthReq };

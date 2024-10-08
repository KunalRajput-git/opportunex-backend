const {
  MAX_UNAUTHORIZED_PAGES,
  UNAUTH_COMPANIES_ACCESS_MSG,
} = require("../constants");
const { AuthenticationError } = require("../utils/errors");
const { extractToken } = require("../utils/index");

const error = new AuthenticationError(UNAUTH_COMPANIES_ACCESS_MSG);

const validatePageReq = (req, res, next) => {
  const { pageno } = req.query;
  let token = extractToken(req, res);
  if (token) req.token = token;
  if (MAX_UNAUTHORIZED_PAGES < pageno && !token) {
    return res.status(400).json({
      success: false,
      error: {
        ...error,
        message: error.message,
      },
    });
  }
  next();
};

module.exports = { validatePageReq };

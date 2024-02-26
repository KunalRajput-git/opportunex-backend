const { MAX_UNAUTHORIZED_PAGES } = require("../constants");
const { extractToken } = require("../utils/index");

const validatePageReq = (req, res, next) => {
  const pageNumber = req.params.pageNo;
  let token = extractToken(req, res);
  if (token) req.token = token;
  if (MAX_UNAUTHORIZED_PAGES < pageNumber && !token) {
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

const extractToken = (req, res) => {
  const authHeader = req.headers["authorization"];
  let token;
  if (authHeader) {
    token = authHeader.split(" ")[1];
    return token;
  }
};

module.exports = extractToken;

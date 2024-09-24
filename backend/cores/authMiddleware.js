const jwt = require("jsonwebtoken");
const response = require("../cores/response");

exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return response.forbidden(res, "A token is required for authentication");
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return response.unauthorized(res, "Invalid Token");
    }

    req.user = decoded;
    next();
  });
};

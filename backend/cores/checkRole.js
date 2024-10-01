const respone = require("./response");

function checkRole(roleAllowed) {
  return function (req, res, next) {
    const role = req.user.role;

    if (!roleAllowed.includes(role)) {
      return respone.forbidden(res, "Access denied: forbidden role 403");
    }

    next();
  };
}

module.exports = checkRole;

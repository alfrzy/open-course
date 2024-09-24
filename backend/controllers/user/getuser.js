const { Router } = require("express");

//response handler
const response = require("../../cores/response");

const UserService = require("../../services/userService");

const { verifyToken } = require("../../cores/authMiddleware");

const getUser = Router();

getUser.get("/getuser", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await UserService.getUserById(userId);

    if (!user) {
      return response.notFound(res, "User not found");
    }

    return response.success(res, "user ada", user);
  } catch (err) {
    console.error(err);
    return response.error(res, "User not found");
  }
});

module.exports = getUser;

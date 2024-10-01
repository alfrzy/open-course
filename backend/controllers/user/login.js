const { Router } = require("express");

const response = require("../../cores/response");

const UserService = require("../../services/userService");

const login = Router();

login.post("/login", async (req, res) => {
  try {
    const { gmail, password } = req.body;

    if (!gmail || !password) {
      return response.badRequest(res, "Email and password are required");
    }

    const result = await UserService.login({ gmail, password });

    if (result) {
      response.success(res, "Login successful.", result);
    } else {
      response.unauthorized(res, "Invalid email or password.");
    }
  } catch (err) {
    console.error(err);
    response.error(res, "An error occurred during login.");
  }
});

module.exports = login;

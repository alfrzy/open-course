const { Router } = require("express");

const { verifyToken } = require("../cores/authMiddleware");

const userApiController = require("../controllers/user");

const api = Router();

api.use("/api/v1/user", userApiController);

module.exports = api;

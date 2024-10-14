const { Router } = require("express");

const { verifyToken } = require("../cores/authMiddleware");

const userApiController = require("../controllers/user");
const courseApiController = require("../controllers/course");

const api = Router();

api.use("/api/v1/user", userApiController);
api.use("/api/v1/course", courseApiController);

module.exports = api;

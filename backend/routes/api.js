const { Router } = require("express");

const { verifyToken } = require("../cores/authMiddleware");

const userApiController = require("../controllers/user");
const bookApiController = require("../controllers/book");

const api = Router();

api.use("/api/v1/user", userApiController);
api.use("/api/v1/book", bookApiController);

module.exports = api;

const { Router } = require("express");

const { verifyToken } = require("../cores/authMiddleware");

const userApiController = require("../controllers/user");
const courseApiController = require("../controllers/course");
const userCourseApiController = require("../controllers/userCourse");

const api = Router();

api.use("/api/v1/user", userApiController);
api.use("/api/v1/course", courseApiController);
api.use("/api/v1/userCourse", userCourseApiController);

module.exports = api;

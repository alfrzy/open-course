const { Router } = require("express");

const { verifyToken } = require("../cores/authMiddleware");

const userApiController = require("../controllers/user");
const courseApiController = require("../controllers/course");
const userCourseApiController = require("../controllers/userCourse");
const purchaseApiController = require("../controllers/purchase");

const api = Router();

api.use("/api/v1/user", userApiController);
api.use("/api/v1/course", courseApiController);
api.use("/api/v1/userCourse", userCourseApiController);
api.use("/api/v1/purchase", purchaseApiController);

module.exports = api;

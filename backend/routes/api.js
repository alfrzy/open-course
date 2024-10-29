const { Router } = require("express");

const { verifyToken } = require("../cores/authMiddleware");

const userApiController = require("../controllers/user");
const kelasApiController = require("../controllers/kelas");
const moduleApiController = require("../controllers/modul");
const modulApiController = require("../controllers/modul");
const kategoriApiController = require("../controllers/kategori");
const courseApiController = require("../controllers/course");
const userCourseApiController = require("../controllers/userCourse");

const api = Router();

api.use("/api/v1/user", userApiController);
api.use("/api/v1/kelas", kelasApiController);
api.use("/api/v1/kategori", kategoriApiController);
api.use("/api/v1/modul", modulApiController);
api.use("/api/v1/course", courseApiController);
api.use("/api/v1/userCourse", userCourseApiController);

module.exports = api;

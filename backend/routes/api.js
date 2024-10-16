const { Router } = require("express");

const { verifyToken } = require("../cores/authMiddleware");

const userApiController = require("../controllers/user");
const kelasApiController = require("../controllers/kelas");
const sectionApiController = require("../controllers/section");
const kategoriApiController = require("../controllers/kategori");

const api = Router();

api.use("/api/v1/user", userApiController);
api.use("/api/v1/kelas", kelasApiController);
api.use("/api/v1/section", sectionApiController);
api.use("/api/v1/kategori", kategoriApiController);

module.exports = api;

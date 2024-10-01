const { Router } = require("express");

const { verifyToken } = require("../cores/authMiddleware");

// const checkRole = require("../cores/checkRole");

const userApiController = require("../controllers/user");
const bookApiController = require("../controllers/book");

const api = Router();

api.use("/api/v1/user", userApiController);
api.use("/api/v1/book", bookApiController);

//contoh
// api.use("/api/v1/dosen", verifyToken, checkRole([1]), dosenApiController);
// api.use("/api/v1/admin", verifyToken, checkRole([2]), (req, res) => {
//     res.send("Admin Access Only");
//   });

module.exports = api;

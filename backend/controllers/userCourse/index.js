const { Router } = require("express");

const getCourse = require("./get");

const userCourseApiController = Router();

// get
userCourseApiController.use(getCourse);

module.exports = userCourseApiController;

const { Router } = require("express");

const getCourse = require("./get");
const postCourse = require("./post");

const userCourseApiController = Router();

// get
userCourseApiController.use(getCourse);
// post
userCourseApiController.use(postCourse);

module.exports = userCourseApiController;

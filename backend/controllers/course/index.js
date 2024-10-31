const { Router } = require("express");

const getCourse = require("./get");
const getCourseLanding = require("./getCourseLanding")

const courseApiController = Router();

// get all
courseApiController.use(getCourse);
// get course for landing
courseApiController.use(getCourseLanding)

module.exports = courseApiController;

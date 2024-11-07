const { Router } = require("express");

const getCourse = require("./get");
const getCourseById = require ("./getcourse")
const getCourseLanding = require("./getCourseLanding")

const courseApiController = Router();

// get all
courseApiController.use(getCourse);
courseApiController.use(getCourseById);
// get course for landing
courseApiController.use(getCourseLanding)

module.exports = courseApiController;

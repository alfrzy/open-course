const { Router } = require("express");

const getCourse = require("./get");
const getCourseById = require ("./getcourse")
const getCourseLanding = require("./getCourseLanding")
const saveUserToCourse = require("./saveUserToCourse")

const courseApiController = Router();

// get all
courseApiController.use(getCourse);
courseApiController.use(getCourseById);
// get course for landing
courseApiController.use(getCourseLanding)
//post 
courseApiController.use(saveUserToCourse)

module.exports = courseApiController;

const { Router } = require("express");

const getCourse = require("./get");
const getCourseById = require ("./getcourse")

const courseApiController = Router();

// get
courseApiController.use(getCourse);
courseApiController.use(getCourseById)


module.exports = courseApiController;

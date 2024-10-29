const { Router } = require("express");

const getCourseCategory = require("./get");

const courseCategoryApiController = Router();

// get
courseCategoryApiController.use(getCourseCategory);

module.exports = courseCategoryApiController;

const { Router } = require("express");

const getCourse = require("./get");

const courseApiController = Router();

// get
courseApiController.use(getCourse);

module.exports = courseApiController;

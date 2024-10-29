const { Router } = require("express");

const getLearningList = require("./get");

const learningListApiController = Router();

// get
learningListApiController.use(getLearningList);

module.exports = learningListApiController;

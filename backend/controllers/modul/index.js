const { Router } = require("express");

const addModul = require("./addModul");

const modulApiController = Router();

// post
modulApiController.use(addModul);

module.exports = modulApiController;

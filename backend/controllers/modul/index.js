const { Router } = require("express");

const addModul = require("./addModul");
const editModul = require("./editModul");

const modulApiController = Router();

// post
modulApiController.use(addModul);
//put
modulApiController.use(editModul);

module.exports = modulApiController;

const { Router } = require("express");

const addModul = require("./addModul");
const editModul = require("./editModul");
const get = require("./get")
const getBySectionId = require ("./getBySectionId")

const modulApiController = Router();

//get
modulApiController.use(get);
//get by section id
modulApiController.use(getBySectionId);
// post
modulApiController.use(addModul);
//put
modulApiController.use(editModul);

module.exports = modulApiController;

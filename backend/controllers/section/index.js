const { Router } = require("express");

const addSection = require("./addSection");
const editSection = require("./editSection");

const sectionApiController = Router();

// post
sectionApiController.use(addSection);
// put
sectionApiController.use(editSection);

module.exports = sectionApiController;

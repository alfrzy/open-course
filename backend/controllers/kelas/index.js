const { Router } = require("express");

const addKelas = require("./addKelas");
const updateKelas = require("./editKelas");

const kelasApiController = Router();

// post
kelasApiController.use(addKelas);
// put
kelasApiController.use(updateKelas);

module.exports = kelasApiController;

const { Router } = require("express");

const addKelas = require("./addKelas");
const updateKelas = require("./editKelas");
const getAllKelas = require("./getKelas");
const detailKelas = require("./detailKelas");

const kelasApiController = Router();

// post
kelasApiController.use(addKelas);
// put
kelasApiController.use(updateKelas);
// get
kelasApiController.use(getAllKelas);
kelasApiController.use(detailKelas);

module.exports = kelasApiController;

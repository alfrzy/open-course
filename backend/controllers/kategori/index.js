const { Router } = require("express");

const getKategori = require("./getKategori");

const kategoriApiController = Router();

//get all
kategoriApiController.use(getKategori);

module.exports = kategoriApiController;

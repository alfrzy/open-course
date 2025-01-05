const { Router } = require("express");

const getScore = require  ("./get")
const upsertScore = require  ("./upsert")

const scoreApiController = Router();

scoreApiController.use(getScore)
scoreApiController.use(upsertScore)


module.exports = scoreApiController;
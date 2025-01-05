const { Router } = require("express");

const getQuestion = require  ("./get")
const postQuestion = require  ("./post")
const deleteQuestion = require  ("./delete")

const questionApiController = Router();

questionApiController.use(getQuestion)
questionApiController.use(postQuestion)
questionApiController.use(deleteQuestion)

module.exports = questionApiController;
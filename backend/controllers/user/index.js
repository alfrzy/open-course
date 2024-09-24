const { Router } = require("express");

const saveUser = require("./save");
const loginUser = require("./login");
const getUser = require("./getuser");

const userApiController = Router();

userApiController.use(saveUser);
userApiController.use(loginUser);
userApiController.use(getUser);

module.exports = userApiController;

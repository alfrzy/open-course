const { Router } = require("express");

const loginUser = require("./login");
const getUser = require("./getuser");
const saveUser = require('./save')
const getUser = require('./get')
const deleteUser = require('./delete')

const userApiController = Router();

userApiController.use(saveUser);
userApiController.use(loginUser);
userApiController.use(getUser);
// delete
userApiController.use(deleteUser)

module.exports = userApiController

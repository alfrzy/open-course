const { Router } = require("express");

const loginUser = require("./login");
// const getUser = require("./getuser");
const saveUser = require('./save')
const getUser = require('./get')
const deleteUser = require('./delete');
const putUser = require('./put')

const userApiController = Router();

// post
userApiController.use(saveUser);
// login
userApiController.use(loginUser);
// get
userApiController.use(getUser);
// delete
userApiController.use(deleteUser)
// put
userApiController.use(putUser)

module.exports = userApiController

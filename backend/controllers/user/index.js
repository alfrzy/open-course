const { Router } = require('express')

const saveUser = require('./save')
const getUser = require('./get')
const deleteUser = require('./delete')

const userApiController = Router()

// save
userApiController.use(saveUser)

// get
userApiController.use(getUser)

// delete
userApiController.use(deleteUser)

module.exports = userApiController
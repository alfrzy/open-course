const { Router } = require('express')

const saveUser = require('./save')

const userApiController = Router()

userApiController.use(saveUser)
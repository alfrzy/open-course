const { Router } = require('express')

const saveBook = require('./save')

const bookApiController = Router()

bookApiController.use(saveBook)

module.exports = bookApiController
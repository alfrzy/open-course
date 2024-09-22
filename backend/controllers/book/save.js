const {Router} = require('express')
const bookService = require('../../services/bookService')
const response = require('../../cores/response')

const saveBookApi = Router()

saveBookApi.post(
  '/save',
  async (req, res) => {
    try{
      delete req.body._csrf

      const {
        name,
        author
      } = req.body
      
      const body = {}

      body.name = name
      body.author = author

      await bookService.save(body)

      const message = ('Book Berhasil Ditambahkan')
      return response.success(res, message, [])
    }catch(err){
      return response.badRequest(res, err.message)
    }
  }
)

module.exports = saveBookApi

const { Router } = require('express')

const UserService = require('../../services/userService')

const save = Router()

save.post(
  '/save',
  async (req, res) => {
    try {
      delete req.body._csrf;

    //   validation
      await UserService.save(req.body)

    //   return success

    } catch (err) {
        // return error
    }
  }
)

module.exports = save

const { Router, response } = require('express');
const UserService = require('../../services/userService');
const { success } = require('../../cores/response');

const get = Router();

get.get('/', async (req, res) => {
  try {
    const users = await UserService.findAll(); 

    return success(res, 'Pengguna berhasil diambil', users); 
  } catch (err) {
    return response.error(res, 'Terjadi kesalahan saat mengambil pengguna: ' + err.message);
  }
});

module.exports = get;

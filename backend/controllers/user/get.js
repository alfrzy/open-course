const { Router } = require("express");
const UserService = require("../../services/userService");
const { success, error } = require("../../cores/response");

const get = Router();

get.get("/", async (req, res) => {
  const { search } = req.query; // Ambil search term dari query parameter

  try {
    let users;
    if (search) {
      // Jika ada parameter `search`, gunakan untuk pencarian
      users = await UserService.searchUsers(search);
    } else {
      // Jika tidak ada `search`, ambil semua pengguna
      users = await UserService.findAll();
    }

    return success(res, "Pengguna berhasil diambil", users);
  } catch (err) {
    console.error("Terjadi kesalahan saat mengambil pengguna:", err);
    return error(res, "Terjadi kesalahan saat mengambil pengguna: " + err.message);
  }
});

module.exports = get;
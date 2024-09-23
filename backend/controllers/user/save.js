const { Router, response } = require("express");

const bcrypt = require('bcrypt');


const UserService = require("../../services/userService");
const { created, error } = require("../../cores/response");

const save = Router();

save.post("/save", async (req, res) => {
  try {
    delete req.body._csrf;

     // Hash password sebelum disimpan
     const hashedPassword = await bcrypt.hash(req.body.password, 10); // 10 adalah nilai salt rounds yang umum digunakan

     // Gantikan password dengan password yang sudah di-hash
     req.body.password = hashedPassword;

    // Validasi bisa ditambahkan di sini

    const user = await UserService.save(req.body);

    // Mengembalikan respon sukses
    return created(res, "Pengguna berhasil disimpan", user);
  } catch (err) {
    // Mengembalikan error
    return error(res, "terjadi kesalahan saat nyimpan user, coba cek username", err.message)
  }
});

module.exports = save;

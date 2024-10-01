const { Router } = require("express");
const bcrypt = require("bcrypt");
const multer = require("multer");
const path = require("path");
const fs = require("fs"); // Import fs untuk mengelola file system
const UserService = require("../../services/userService");
const { success, error } = require("../../cores/response");

// Setup multer
const uploadPath = path.join(__dirname, '../../public/uploads/images'); 

// Konfigurasi multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Cek apakah folder uploads/images ada, jika tidak buat
    fs.mkdir(uploadPath, { recursive: true }, (err) => {
      if (err) {
        console.error('Gagal membuat folder:', err); // Debug: Tampilkan kesalahan jika gagal membuat folder
        return cb(err);
      }
      console.log(`Menyimpan file di: ${uploadPath}`); // Debug: Tampilkan path upload
      cb(null, uploadPath);
    });
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Penamaan file yang unik
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Batas ukuran file 5MB
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Hanya gambar yang diizinkan!'));
    }
  }
});

const update = Router();

update.put("/update/:id", upload.single('profile_picture'), async (req, res) => {
  try {
    const { id } = req.params; // Ambil id dari parameter URL
    delete req.body._csrf;

    // Cek jika file gambar diupload
    if (req.file) {
      req.body.profile_picture = req.file.path; // Simpan path gambar ke req.body
      console.log(`Gambar berhasil diunggah: ${req.file.path}`); // Debug: Tampilkan path gambar
    }

    // Jika password ada di request body, hash password sebelum disimpan
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }

    // Validasi bisa ditambahkan di sini

    const user = await UserService.update(id, req.body); // Memanggil service untuk update

    if (!user) {
      return error(res, "User tidak ditemukan", "User not found");
    }

    // Mengembalikan respon sukses
    return success(res, "Pengguna berhasil diperbarui", user);
  } catch (err) {
    // Mengembalikan error
    console.log('Terjadi kesalahan:', err); // Debug: Tampilkan kesalahan
    return error(res, "Terjadi kesalahan saat memperbarui user", err.message);
  }
});

module.exports = update;

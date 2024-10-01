const { Router } = require("express");
const bcrypt = require("bcrypt");
const multer = require("multer");
const path = require("path");
const fs = require("fs"); // Import fs untuk mengelola file system
const UserService = require("../../services/userService");
const { created, error } = require("../../cores/response");

const save = Router();

const uploadPath = path.join(__dirname, '../../public/uploads/images');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    fs.mkdir(uploadPath, { recursive: true }, (err) => {
      if (err) {
        console.error('Gagal membuat folder:', err); // Debug: Tampilkan kesalahan jika gagal membuat folder
        return cb(err);
      }
      cb(null, uploadPath);
    });
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Penamaan file
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

// Middleware untuk menangani upload file secara opsional
const optionalUpload = (req, res, next) => {
  upload.single('profile_picture')(req, res, (err) => {
    if (err && err.message !== 'No file uploaded') {
      return next(err); // Jika ada kesalahan lain, lanjutkan ke error handler
    }
    next(); // Jika tidak ada kesalahan, lanjutkan
  });
};

save.post("/save", optionalUpload, async (req, res) => {
  try {
    delete req.body._csrf;

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;

    // Menyimpan path gambar profil jika ada
    if (req.file) {
      req.body.profile_picture = req.file.path;
      console.log(`Gambar berhasil diunggah: ${req.file.path}`);
    } else {
      console.log('Tidak ada file yang diunggah.');
      req.body.profile_picture = null; // Atau bisa dihilangkan jika tidak perlu
    }

    // Validasi bisa ditambahkan di sini

    const user = await UserService.save(req.body);

    return created(res, "Pengguna berhasil disimpan", user);
  } catch (err) {
    console.log('Terjadi kesalahan:', err);
    return error(res, "terjadi kesalahan saat menyimpan user, coba cek username", err.message);
  }
});

module.exports = save;

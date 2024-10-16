const { Router } = require("express");
const bcrypt = require("bcrypt");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const UserService = require("../../services/userService");
const { created, error } = require("../../cores/response");

const save = Router();

const uploadPath = path.join(__dirname, "../../public/uploads/images");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    fs.mkdir(uploadPath, { recursive: true }, (err) => {
      if (err) {
        console.error("Gagal membuat folder:", err);
        return cb(err);
      }
      console.log(`Menyimpan file di: ${uploadPath}`);
      cb(null, uploadPath);
    });
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error("Hanya gambar yang diizinkan!"));
    }
  },
});

// Middleware untuk menangani upload file secara opsional
const optionalUpload = (req, res, next) => {
  upload.single("profile_picture")(req, res, (err) => {
    if (err && err.message !== "No file uploaded") {
      return next(err);
    }
    next();
  });
};

save.post("/save", optionalUpload, async (req, res) => {
  try {
    delete req.body._csrf;

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;

    if (req.file) {
      req.body.profile_picture = req.file.path;
      console.log(`Gambar berhasil diunggah: ${req.file.path}`);
    } else {
      console.log("Tidak ada file yang diunggah.");
      req.body.profile_picture = null;
    }

    const user = await UserService.save(req.body);

    return created(res, "Pengguna berhasil disimpan", user);
  } catch (err) {
    console.log("Terjadi kesalahan:", err);
    return error(res, "terjadi kesalahan saat menyimpan user, coba cek username", err.message);
  }
});

module.exports = save;

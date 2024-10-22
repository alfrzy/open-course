const { Router } = require("express");
const UserService = require("../../services/userService");
const { raw, notFound, error } = require("../../cores/response");

const deleteRouter = Router();

// Menghapus pengguna berdasarkan ID
deleteRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await UserService.deleteById(id); 

    if (result) {
      return raw(res, "sukses hapus user");
    } else {
      return notFound(res, "pengguna tidak ditemukan");
    }
  } catch (err) {
    return error(res, "kesalahan saat hapus pengguna", err.message);
  }
});

module.exports = deleteRouter;

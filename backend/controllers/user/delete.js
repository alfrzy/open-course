const { Router } = require("express");
const UserService = require("../../services/userService");
const { raw, notFound, error } = require("../../cores/response");

const deleteRouter = Router();

// Menghapus pengguna berdasarkan ID
deleteRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  console.log(`Mencoba menghapus pengguna dengan ID: ${id}`); // Debugging

  try {
    const result = await UserService.deleteById(id); // Menghapus pengguna dari database
    console.log(`Hasil penghapusan: ${JSON.stringify(result)}`); // Debugging

    if (result) {
      return raw(res, "sukses hapus user");
    } else {
     

      return notFound(res, "pengguna tidak ditemukan")
    }
  } catch (err) {
    // console.error("Error saat menghapus pengguna:", err); // Debugging untuk mencetak error
    return error(res, "kesalahan saat hapus pengguna", err.message)
  }
});

module.exports = deleteRouter;

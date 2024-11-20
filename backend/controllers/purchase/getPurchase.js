const { Router } = require("express");
const purchaseService = require("../../services/purchaseService");
const { error, success } = require("../../cores/response");

const getPurchase = Router();

getPurchase.get('/user/:user_id', async (req, res) => {
      const userId = req.params.user_id || req.user.id; // Ambil dari params atau dari token (jika menggunakan middleware autentikasi)
      try {
        const purchases = await purchaseService.fetchPurchasesByUserId(userId);
        return success(res, "Data pembelian berhasil diambil", purchases);
      } catch (err) {
        console.error("Gagal mengambil data pembelian:", err);
        return error(res, "Gagal mengambil data pembelian", err.message);
      }
  });

  module.exports = getPurchase;
  
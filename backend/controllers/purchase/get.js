// routes/post.js
const { Router } = require("express");
const purchaseService = require("../../services/purchaseService");
const { error, success } = require("../../cores/response");

const get = Router();

// GET all data (termasuk buat tau id terakhir di db)
get.get("/", async (req, res) => {
    try {
      const purchases = await purchaseService.getAllPurchases();
      return success(res, "Data pembelian berhasil diambil", purchases);
    } catch (err) {
      console.error("Gagal mengambil data pembelian:", err);
      return error(res, "Gagal mengambil data pembelian", err.message);
    }
  });

module.exports = get;

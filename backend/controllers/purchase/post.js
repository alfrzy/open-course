const { Router } = require("express");
const purchaseService = require("../../services/purchaseService");
const { created, error } = require("../../cores/response");

const post = Router();

// Post 
post.post("/save", async (req, res) => {
  const { user_id, course_id, invoice_number, total } = req.body; 

  try {
    const purchase = await purchaseService.createPurchase({ user_id, course_id, invoice_number, total });
    return created(res, "Pembelian berhasil dibuat", purchase);
  } catch (err) {
    console.error("Gagal membuat pembelian:", err);
    return error(res, "Gagal membuat pembelian", err.message);
  }
});

module.exports = post;



module.exports = post;

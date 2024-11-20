// service/purchaseService.js
const PurchaseRepository = require("../repository/purchaseRepository");
const purchaseRepo = new PurchaseRepository();

// post
exports.createPurchase = async ({ user_id, course_id, invoice_number, total }) => {
  return await purchaseRepo.create({ user_id, course_id, invoice_number, total });
};

// get all
exports.getAllPurchases = async () => {
  return await purchaseRepo.getAll();
};

exports.fetchPurchasesByUserId = async (userId) => {
  return purchaseRepo.getPurchasesByUserId(userId);
};
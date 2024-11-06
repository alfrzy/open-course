const { Router } = require("express");

const postPurchase = require("./post")
const getAllPurchase = require("./get")

const purchaseApiController = Router();

// post purchase
purchaseApiController.use(postPurchase)
// get all
purchaseApiController.use(getAllPurchase)

module.exports = purchaseApiController;

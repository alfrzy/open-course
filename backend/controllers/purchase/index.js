const { Router } = require("express");

const postPurchase = require("./post")
const getAllPurchase = require("./get")
const getPurchasesByUserId = require("./getpurchase")

const purchaseApiController = Router();

// post purchase
purchaseApiController.use(postPurchase)
// get all
purchaseApiController.use(getAllPurchase)
// get by user id
purchaseApiController.use(getPurchasesByUserId)

module.exports = purchaseApiController;

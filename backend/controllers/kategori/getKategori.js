const { Router } = require("express");
const response = require("../../cores/response");
const KategoriService = require("../../services/kategoriService");

const getKategori = Router();

// Get all categories
getKategori.get("/getKategori", async (req, res) => {
  try {
    const kategori = await KategoriService.getAllKategori();
    return response.success(res, "Categories fetched successfully", kategori);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return response.error(res, "Failed to fetch categories", error.message);
  }
});

module.exports = getKategori;

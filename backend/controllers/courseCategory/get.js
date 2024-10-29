const { Router } = require("express");
const CourseCategoryService = require("../../services/courseCategoryService");
const { success, error } = require("../../cores/response");

const get = Router();

// GET semua kategori
get.get("/", async (req, res) => {
  try {
    const allCategories = await CourseCategoryService.findAll();

    return success(res, "All course categories retrieved successfully", allCategories);
  } catch (err) {
    return error(
      res,
      "An error occurred while fetching all course categories: " + err.message
    );
  }
});

module.exports = get;

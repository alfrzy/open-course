const { Router } = require("express");
const response = require("../../cores/response");
const ModuleService = require("../../services/moduleService");

const get = Router();

// Get module by ID
get.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Validate input
    if (!id) {
      return response.error(res, "Module ID is required.", 400);
    }

    const module = await ModuleService.getModuleById(id);

    if (!module) {
      return response.error(res, "Module not found.", 404);
    }

    response.success(res, "Module retrieved successfully.", module);
  } catch (error) {
    console.error("Error fetching module by ID:", error);
    response.error(res, "Failed to fetch module. " + error.message, 500);
  }
});

module.exports = get;
const { Router } = require("express");
const response = require("../../cores/response");
const ModuleService = require("../../services/moduleService");

const getBySectionId = Router();

getBySectionId.get("/:section_id/section", async (req, res) => {
    try {
      const { section_id } = req.params;
  
      // Validate input
      if (!section_id) {
        return response.error(res, "Section ID is required.", 400);
      }
  
      const modules = await ModuleService.getModulesBySectionId(section_id);
  
      if (modules.length === 0) {
        return response.error(res, "No modules found for this section.", 404);
      }
  
      response.success(res, "Modules retrieved successfully.", modules);
    } catch (error) {
      console.error("Error fetching modules for section:", error);
      response.error(res, "Failed to fetch modules. " + error.message, 500);
    }
  });

module.exports = getBySectionId;
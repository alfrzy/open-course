const { Router } = require("express");
const response = require("../../cores/response");
const ModuleService = require("../../services/moduleService");
const { sequelize } = require("../../config/database");

const editModule = Router();

editModule.put("/bab/:section_id/modul/:module_id", async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { section_id, module_id } = req.params;
    const { title, description, status } = req.body;

    const existingModule = await ModuleService.getModuleById(module_id);
    if (!existingModule) {
      return response.error(res, "Module not found", 404);
    }

    const updatedModule = await ModuleService.updateModule(
      module_id,
      {
        section_id,
        title,
        description,
        status,
      },
      { transaction }
    );

    await transaction.commit();
    response.success(res, "Module successfully updated", updatedModule);
  } catch (error) {
    await transaction.rollback();
    console.error(error);
    response.error(res, "Failed to update module. " + error.message);
  }
});

module.exports = editModule;

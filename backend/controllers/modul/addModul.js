const { Router } = require("express");
const response = require("../../cores/response");
const ModuleService = require("../../services/moduleService");
const { sequelize } = require("../../config/database");

const addModule = Router();

addModule.post("/bab/:section_id/modul", async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { section_id } = req.params;
    const { title, description, status } = req.body;

    const newModule = await ModuleService.addModule(
      {
        section_id,
        title,
        description,
        status,
      },
      { transaction }
    );

    await transaction.commit();
    response.created(res, "Module successfully added", newModule);
  } catch (error) {
    await transaction.rollback();
    console.error(error);
    response.error(res, "Failed to add module. " + error.message);
  }
});

module.exports = addModule;

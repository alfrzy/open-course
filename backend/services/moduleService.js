const ModuleRepository = require("../repository/moduleRepository");
const moduleRepo = new ModuleRepository();

// Add module
exports.addModule = async (data, options) => {
  try {
    const newModule = await moduleRepo.createModule(data, options);
    return newModule;
  } catch (error) {
    console.error("Error adding module:", error);
    throw new Error("Failed to add module");
  }
};

// Update module
exports.updateModule = async (id, data, options) => {
  try {
    const module = await moduleRepo.getModuleById(id);
    if (!module) return null;

    const updatedModule = await moduleRepo.updateModule(id, data, options);
    return updatedModule;
  } catch (error) {
    console.error("Error updating module:", error);
    throw new Error("Failed to update module");
  }
};

// Get modules by section
exports.getModulesBySectionId = async (section_id) => {
  try {
    const modules = await moduleRepo.getAllModulesBySectionId(section_id);
    return modules;
  } catch (error) {
    console.error("Error fetching modules:", error);
    throw new Error("Failed to fetch modules");
  }
};

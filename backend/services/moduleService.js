const ModuleRepository = require("../repository/moduleRepository");
const moduleRepo = new ModuleRepository();

// Add module
exports.addModule = async (data, options) => {
  try {
    if (!data.title || !data.section_id) {
      throw new Error("Title and section_id are required.");
    }
    const newModule = await moduleRepo.createModule(data, options);
    return newModule;
  } catch (error) {
    console.error("Error adding module:", error);
    throw new Error("Failed to add module: " + error.message);
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
    console.error("Error updating module with ID:", id, error);
    throw new Error("Failed to update module with ID " + id + ": " + error.message);
  }
};

// Get module by ID
exports.getModuleById = async (id) => {
  try {
    const module = await moduleRepo.getModuleById(id);
    return module; // Will return the module or null
  } catch (error) {
    console.error("Error fetching module by ID:", error);
    throw new Error("Failed to fetch module by ID");
  }
};

// Get modules by section
exports.getModulesBySectionId = async (section_id) => {
  try {
    const modules = await moduleRepo.getAllModulesBySectionId(section_id);
    return modules;
  } catch (error) {
    console.error("Error fetching modules for section:", section_id, error);
    throw new Error("Failed to fetch modules for section " + section_id + ": " + error.message);
  }
};

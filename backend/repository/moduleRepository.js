const Module = require("../models/module");

class ModuleRepository {
  async createModule(data, options) {
    try {
      const module = await Module.create(data, options);
      return module.toJSON();
    } catch (error) {
      console.error("Error creating module:", error);
      throw new Error("Failed to create module");
    }
  }

  async getModuleById(id) {
    try {
      const module = await Module.findByPk(id);
      return module ? module.toJSON() : null;
    } catch (error) {
      console.error("Error fetching module by ID:", error);
      throw new Error("Failed to fetch module");
    }
  }

  async updateModule(id, data, options) {
    try {
      const module = await Module.findByPk(id);
      if (!module) return null;
      await module.update(data, options);
      return module.toJSON();
    } catch (error) {
      console.error("Error updating module:", error);
      throw new Error("Failed to update module");
    }
  }

  async getAllModulesBySectionId(section_id) {
    try {
      const modules = await Module.findAll({ where: { section_id } });
      return modules.map((module) => module.toJSON());
    } catch (error) {
      console.error("Error fetching modules for section:", error);
      throw new Error("Failed to fetch modules");
    }
  }
}

module.exports = ModuleRepository;

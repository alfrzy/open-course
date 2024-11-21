const Section = require("../models/section");

class SectionRepository {
  async createSection(data, options) {
    try {
      const section = await Section.create(data, options);
      return section.toJSON();
    } catch (error) {
      console.error("Error creating section:", error);
      throw new Error("Failed to create section");
    }
  }

  async getSectionById(id) {
    try {
      const section = await Section.findByPk(id);
      return section ? section.toJSON() : null;
    } catch (error) {
      console.error("Error fetching section by ID:", error);
      throw new Error("Failed to fetch section");
    }
  }

  async updateSection(id, data, options) {
    try {
      const section = await Section.findByPk(id);
      if (!section) return null;
      await section.update(data, options);
      return section.toJSON();
    } catch (error) {
      console.error("Error updating section:", error);
      throw new Error("Failed to update section");
    }
  }

  async getAllSectionsByCourseId(course_id) {
    try {
      const sections = await Section.findAll({ where: { course_id } });
      return sections.map((section) => section.toJSON());
    } catch (error) {
      console.error("Error fetching sections for course:", error);
      throw new Error("Failed to fetch sections");
    }
  }
}

module.exports = SectionRepository;

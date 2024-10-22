const SectionRepository = require("../repository/sectionRepository");
const sectionRepo = new SectionRepository();

// Add section
exports.addSection = async (data, options) => {
  try {
    const newSection = await sectionRepo.createSection(data, options);
    return newSection;
  } catch (error) {
    console.error("Error adding section:", error);
    throw new Error("Failed to add section");
  }
};

// Update section
exports.updateSection = async (id, data, options) => {
  try {
    const section = await sectionRepo.getSectionById(id);
    if (!section) return null;

    const updatedSection = await sectionRepo.updateSection(id, data, options);
    return updatedSection;
  } catch (error) {
    console.error("Error updating section:", error);
    throw new Error("Failed to update section");
  }
};

// Get sections by course
exports.getSectionsByCourseId = async (course_id) => {
  try {
    const sections = await sectionRepo.getAllSectionsByCourseId(course_id);
    return sections;
  } catch (error) {
    console.error("Error fetching sections:", error);
    throw new Error("Failed to fetch sections");
  }
};

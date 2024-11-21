const LearningListRepository = require("../repository/learningListRepository");
const learningListRepo = new LearningListRepository();

// Add section
exports.addList = async (data, options) => {
  try {
    const newList = await learningListRepo.createList(data, options);
    return newList;
  } catch (error) {
    console.error("Error adding learning list:", error);
    throw new Error("Failed to add learning list");
  }
};

// Update section
exports.updateList = async (id, data, options) => {
  try {
    const learningList = await learningListRepo.getListById(id);
    if (!learningList) return null;

    const updatedLearningList = await learningListRepo.updateList(id, data, options);
    return updatedLearningList;
  } catch (error) {
    console.error("Error updating list:", error);
    throw new Error("Failed to update list");
  }
};

// Get sections by course
exports.getListByCourseId = async (course_id) => {
  try {
    const learningList = await learningListRepo.getAllListByCourseId(course_id);
    return learningList;
  } catch (error) {
    console.error("Error fetching learningList:", error);
    throw new Error("Failed to fetch learningList");
  }
};

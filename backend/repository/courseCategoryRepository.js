const CourseCategory = require("../models/courseCategory");

class CourseCategoryRepository {
  async findAll() {
    const whereClause = {
      deleted_at: null,
    };


    const courseCategories = await CourseCategory.findAll({
      where: whereClause,
   
    });

    return courseCategories.map((category) => category.toJSON());
  }
}

module.exports = CourseCategoryRepository;

const association = require("../models/association");
const Course = require("../models/course");
const CourseCategory = require("../models/courseCategory");
const LearningList = require("../models/learningList");
const User = require("../models/user");

class CourseRepository {
  async findAll({ instructor_id } = {}) {
    const whereClause = {
      deleted_at: null,
    };

    if (instructor_id) {
      whereClause.instructor_id = instructor_id;
    }

    const courses = await Course.findAll({
      where: whereClause,
      include: [
        {
          model: User,
          as: "Instructor", 
          attributes: ["full_name", "phone", "gmail"],
        },
        {
          model: LearningList, 
          as: "LearningLists",
          attributes: ["name"], 
        },
      ],
     
    });

    return courses.map((course) => course.toJSON());
  }

  async findById(id) {
    const course = await Course.findOne({
      where: {
        id,
        deleted_at: null,
      },
      include: [
        {
          model: User,
          as: "Instructor",
          attributes: ["full_name", "phone", "gmail"],
        },
        {
          model: LearningList,
          as: "LearningLists",
          attributes: ["name"],
        },
        {
          model: CourseCategory,
          as: "Category",
          attributes: ["name", "title"],
        },
       
      ],
    });

    return course ? course.toJSON() : null;
  }
}



module.exports = CourseRepository;

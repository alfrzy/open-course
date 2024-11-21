const association = require("../models/association");
const Course = require("../models/course");
const CourseCategory = require("../models/courseCategory");
const LearningList = require("../models/learningList");
const Module = require("../models/module");
const Section = require("../models/section");
const User = require("../models/user");
const UserCourses = require("../models/userCourse");

class CourseRepository {
  //get all
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

//get by id
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
          model: User,
          as: "Members", // Sesuaikan nama alias "Members" dengan kebutuhan
          attributes: ["id", "full_name", "gmail"],
          through: {
            attributes: [], // Tidak perlu atribut tambahan dari tabel penghubung
          },
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
        {
          model: Section,
          as: "Sections",
          include: [
            {
              model: Module,
              as: "Modules",
            },
          ],
        },
      ],
    });

    if (!course) {
      return null;
    }

    const userCount = await UserCourses.count({
      where: { course_id: id },
    });

    const courseData = course.toJSON();
    courseData.userCount = userCount;

    return courseData;
}

async addMember(courseId, userId) {
  // Cek apakah user sudah terdaftar di course
  const existingEnrollment = await UserCourses.findOne({
    where: { course_id: courseId, user_id: userId },
  });

  if (existingEnrollment) {
    throw new Error("User sudah terdaftar di course ini.");
  }

  // Tambahkan user ke course
  const userCourse = await UserCourses.create({
    course_id: courseId,
    user_id: userId,
    is_finish: false, // Set default is_finish ke false
  });

  return userCourse;
}
}
module.exports = CourseRepository;
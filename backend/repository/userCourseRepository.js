const association = require("../models/association");
const UserCourses = require("../models/userCourse");
const Course = require("../models/course");
const User = require("../models/user");

class UserCourseRepository {
  async findAll({ user_id, course_id } = {}) {
    const whereClause = {
      deleted_at: null,
    };

    // Jika user_id disediakan kasih /id
    if (user_id) {
      whereClause.user_id = user_id;
    }

    // Jika course_id disediakan, tambahkan ke whereClause
    if (course_id) {
      whereClause.course_id = course_id;
    }

    const userCourses = await UserCourses.findAll({
      where: whereClause,
      include: [
        {
          model: Course,
          as: "CourseRelation",
          attributes: ["name", "instructor_id", "duration", "description", "thumbnail"],
          include: [
            {
              model: User,
              as: "Instructor",
              attributes: ["full_name"],
            },
          ],
        },
      ],
    });

    return userCourses.map((userCourse) => userCourse.toJSON());
  }

  // Fungsi untuk membuat entri baru di UserCourses
  async create({ course_id, user_id, is_finish, enrollment_date, due_date }) {
     const existingEnrollment = await UserCourses.findOne({
      where: {
        course_id: course_id,
        user_id: user_id,
      },
    });

     if (existingEnrollment) {
      throw new Error("User sudah terdaftar di kelas ini.");
    }

    const userCourse = await UserCourses.create({
      course_id,
      user_id,
      is_finish,
      enrollment_date,
      due_date,
    });
    return userCourse.toJSON();
  }

  // Fungsi untuk mengambil semua user course enrollments
  async getAll() {
    const userCourses = await UserCourses.findAll({
      include: [
        {
          model: Course,
          as: "CourseRelation", // Sesuaikan dengan nama alias asosiasi
          attributes: ["name"],
        },
      ],
    });
    return userCourses.map((userCourse) => userCourse.toJSON());
  }
}

module.exports = UserCourseRepository;

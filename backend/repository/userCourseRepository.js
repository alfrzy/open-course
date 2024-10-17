// const UserCourse = require("../models/userCourse");

// class UserCourseRepository {
//   // Ambil semua user_courses yang belum dihapus berdasarkan user_id
//   async findAll({ user_id }) {
//     const whereClause = {
//       deleted_at: null,
//     };

//     if (user_id) {
//       whereClause.user_id = user_id;
//     }

//     const userCourses = await UserCourse.findAll({
//       where: whereClause,
//     });

//     return userCourses.map((userCourse) => userCourse.toJSON());
//   }
// }

// module.exports = UserCourseRepository;


const UserCourses = require("../models/userCourse");
const Course = require("../models/course");
const association = require("../models/association");
const User = require("../models/user");

class UserCourseRepository {
  async findAll({ user_id }) {
    const whereClause = {
      deleted_at: null,
    };

    if (user_id) {
      whereClause.user_id = user_id;
    }

    const userCourses = await UserCourses.findAll({
      where: whereClause,
      include: [
        {
          model: Course,
          as: "Courses",
          attributes: ["name"],
        },
      
      ],
    });

    return userCourses.map((userCourse) => userCourse.toJSON());
  }
}

module.exports = UserCourseRepository;

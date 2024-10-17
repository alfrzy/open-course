const CourseRepository = require("../repository/courseRepository");

const courseRepo = new CourseRepository();

exports.findAll = async ({ user_id }) => {
  try {
    return await courseRepo.findAll({ user_id });
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw new Error("Failed to fetch courses");
  }
};

// // Ambil semua kursus
// exports.findAll = async () => {
//   try {
//     return await courseRepo.findAll();
//   } catch (error) {
//     console.error("Error fetching courses:", error);
//     throw new Error("Failed to fetch courses");
//   }
// };

// // Ambil kursus berdasarkan ID
// exports.getCourseById = async (id) => {
//   try {
//     const course = await courseRepo.getCourse(id);
//     if (!course) {
//       return null;
//     }
//     return course;
//   } catch (error) {
//     console.error("Error finding course by id:", error);
//     throw new Error("Failed to find course");
//   }
// };

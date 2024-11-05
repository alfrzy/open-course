const LearningList = require("./learningList");
const Course = require("./course");
const CourseCategory = require("./courseCategory");
const Module = require("./module");
const Section = require("./section");
const UserCourses = require("./userCourse");
const User = require("./user");
const Purchase = require("./purchase");  // Purchase model

// learning list dengan course
LearningList.belongsTo(Course, {
  foreignKey: "course_id",
  as: "Courses"
});
Course.hasMany(LearningList, {
  foreignKey: "course_id",
  as: "LearningLists"
});

// Course dan CourseCategory
CourseCategory.hasMany(Course, {
  foreignKey: "course_category_id",
  as: "Courses",
});

Course.belongsTo(CourseCategory, {
  foreignKey: "course_category_id",
  as: "Category",
});

// module dengan section
Module.belongsTo(Section, {
  foreignKey: "section_id",
  as: "Sections"
});

Section.hasMany(Module, {
  foreignKey: "section_id",
  as: "Modules"
});

// section dengan course
Section.belongsTo(Course, {
  foreignKey: "course_id",
  as: "Courses"
});

Course.hasMany(Section, {
  foreignKey: "course_id",
  id: "Sections"
});

// user course dengan course
Course.hasMany(UserCourses, {
  foreignKey: "course_id",
  as: "UserCourses"
});

UserCourses.belongsTo(Course, {
  foreignKey: "course_id",
  as: "Courses"
});

// user dengan userCourse
UserCourses.belongsTo(User, {
  foreignKey: "user_id",
  as: "Users"
});

User.hasMany(UserCourses, {
  foreignKey: "user_id",
  as: "UserCourses"
});

// // dosen dengan kursus
// User.hasMany(Section, {
//   foreignKey: "user_id",
//   as: "Sections"
// });

// Section.belongsTo(User, {
//   foreignKey: "user_id",
//   as: "Users"
// });


// purchase dengan course
Purchase.belongsTo(Course, {
  foreignKey: "course_id",
});

Course.hasMany(Purchase, {
  foreignKey: "course_id",
});

// purchase dengan user
Purchase.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Purchase, {
  foreignKey: "user_id",
});

// Relasi antara Course dan User sebagai Instruktur
Course.belongsTo(User, {
  foreignKey: "instructor_id", 
  as: "Instructor",
});

User.hasMany(Course, {
  foreignKey: "instructor_id",
  as: "InstructedCourses",
});
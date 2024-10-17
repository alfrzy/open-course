const LearningList = require("./learningList");
const Course = require("./course");
const CourseCategory = require("./courseCategory");
const Module = require("./module");
const Section = require("./section");
const UserCourses = require("./userCourse");
const User = require("./user");

// learning list dengan course
LearningList.belongsTo(Course, {
  foreignKey: "course_id",
  as: "course",
});
Course.hasMany(LearningList, {
  foreignKey: "course_id",
  as: "learningLists",
});

// course categori dengan course
Course.hasMany(CourseCategory, {
  foreignKey: "course_category_id",
  as: "courseCategories",
});
CourseCategory.belongsTo(Course, {
  foreignKey: "course_category_id",
  as: "course",
});

// module dengan section
Module.belongsTo(Section, {
  foreignKey: "section_id",
  as: "section",
});
Section.hasMany(Module, {
  foreignKey: "section_id",
  as: "modules",
});

// section dengan course
Section.belongsTo(Course, {
  foreignKey: "course_id",
  as: "course",
});
Course.hasMany(Section, {
  foreignKey: "course_id",
  as: "sections",
});

// user course dengan course
Course.hasMany(UserCourses, {
  foreignKey: "course_id",
  as: "userCourses",
});
UserCourses.belongsTo(Course, {
  foreignKey: "course_id",
  as: "course",
});

// user dengan usercourse
UserCourses.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});
User.hasMany(UserCourses, {
  foreignKey: "user_id",
  as: "userCourses",
});

// dosen dengan kursus
User.hasMany(Section, {
  foreignKey: "user_id",
  as: "sections",
});
Section.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});

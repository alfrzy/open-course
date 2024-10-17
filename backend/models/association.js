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
  as: "Courses"
});
Course.hasMany(LearningList, {
  foreignKey: "course_id",
  as: "LearningLists"
});

// course categori dengan course
Course.hasMany(CourseCategory, {
  foreignKey: "course_category_id",
  as: "CourseCategories"
});

CourseCategory.belongsTo(Course, {
  foreignKey: "course_category_id",
  as: "Courses"
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

// user dengan usercourse
UserCourses.belongsTo(User, {
  foreignKey: "user_id",
  as: "Users"
});

User.hasMany(UserCourses, {
  foreignKey: "user_id",
  as: "UserCourses"
});

// dosen dengan kursus
User.hasMany(Section, {
  foreignKey: "user_id",
  as: "Sections"
});

Section.belongsTo(User, {
  foreignKey: "user_id",
  as: "Users"
});

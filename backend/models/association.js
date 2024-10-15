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
});
Course.hasMany(LearningList, {
  foreignKey: "course_id",
});

// course category dengan course
Course.hasMany(CourseCategory, {
  foreignKey: "course_category_id",
});

CourseCategory.belongsTo(Course, {
  foreignKey: "course_category_id",
});

// module dengan section
Module.belongsTo(Section, {
  foreignKey: "section_id",
});

Section.hasMany(Module, {
  foreignKey: "section_id",
});

// section dengan course
Section.belongsTo(Course, {
  foreignKey: "course_id",
});

Course.hasMany(Section, {
  foreignKey: "course_id",
});

// user course dengan course
Course.hasMany(UserCourses, {
  foreignKey: "course_id",
});

UserCourses.belongsTo(Course, {
  foreignKey: "course_id",
});

// user dengan userCourse
UserCourses.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(UserCourses, {
  foreignKey: "user_id",
});


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

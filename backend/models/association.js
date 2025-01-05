const LearningList = require("./learningList");
const Course = require("./course");
const CourseCategory = require("./courseCategory");
const Module = require("./module");
const Section = require("./section");
const UserCourses = require("./userCourse");
const User = require("./user");
const Purchase = require("./purchase");
const Question = require("./question");
const Score = require("./score");

// learning list dengan course
LearningList.belongsTo(Course, {
  foreignKey: "course_id",
  as: "Courses",
});
Course.hasMany(LearningList, {
  foreignKey: "course_id",
  as: "LearningLists",
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
  as: "Sections",
});

Section.hasMany(Module, {
  foreignKey: "section_id",
  as: "Modules",
});

// section dengan course
Section.belongsTo(Course, {
  foreignKey: "course_id",
  as: "Courses",
});

Course.hasMany(Section, {
  foreignKey: "course_id",
  id: "Sections",
});

// user course dengan course
Course.hasMany(UserCourses, {
  foreignKey: "course_id",
  as: "UserCourseRelations",
});

UserCourses.belongsTo(Course, {
  foreignKey: "course_id",
  as: "CourseRelation",
});

// user dengan userCourse
UserCourses.belongsTo(User, {
  foreignKey: "user_id",
  as: "UserRelation",
});

User.hasMany(UserCourses, {
  foreignKey: "user_id",
  as: "UserCourseRelations",
});

// purchase dengan course
Course.hasMany(Purchase, {
  foreignKey: "course_id",
  as: "Purchases",
});

Purchase.belongsTo(Course, {
  foreignKey: "course_id",
  as: "Course",
});

// purchase dengan user
Purchase.belongsTo(User, {
  foreignKey: "user_id",
  as: "UserPurchase",
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

Course.belongsToMany(User, {
  through: UserCourses,
  as: "Members", // Nama alias ini akan digunakan untuk mengambil anggota
  foreignKey: "course_id",
});

User.belongsToMany(Course, {
  through: UserCourses,
  as: "Courses",
  foreignKey: "user_id",
});

// Relasi antara Question dan Course
Question.belongsTo(Course, {
  foreignKey: "course_id",
  as: "Course",
});

Course.hasMany(Question, {
  foreignKey: "course_id",
  as: "Questions",
});

// Relasi antara Scores dan Users
Score.belongsTo(User, {
  foreignKey: "user_id",
  as: "User",
});

User.hasMany(Score, {
  foreignKey: "user_id",
  as: "Scores",
});

// Relasi antara Scores dan Courses
Score.belongsTo(Course, {
  foreignKey: "course_id",
  as: "Course",
});

Course.hasMany(Score, {
  foreignKey: "course_id",
  as: "Scores",
});
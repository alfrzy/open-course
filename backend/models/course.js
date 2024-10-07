const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const LearningList = require("./learningList");
const CourseCategory = require("./courseCategory");
const Section = require("./section");
const UserCourses = require("./userCourse");

const Course = sequelize.define(
  "Courses",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    course_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: "CourseCategories",
      //   key: "id", 
      // },
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    language: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    thumbnail: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    is_publish: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: "Courses",
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    underscored: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  }
);

// relasi 
Course.hasMany(CourseCategory, {
  foreignKey: 'course_category_id',
});

// relasi
Course.hasMany(Section, {
  foreignKey: 'course_id',
});

// relasi
Course.hasMany(UserCourses, {
  foreignKey: "course_id",
});

// relasi
Course.hasMany(LearningList, {
  foreignKey: 'course_id',
});


module.exports = Course;


const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const Course = require("./course");

const CourseCategory = sequelize.define(
  "CourseCategories",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "CourseCategories",
    freezeTableName: true,
    timestamps: true,
    underscored: true,
    paranoid: true, 
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",

  }
);

// relasi 
CourseCategory.belongsTo(Course, {
  foreignKey: 'course_category_id',
});

module.exports = CourseCategory;

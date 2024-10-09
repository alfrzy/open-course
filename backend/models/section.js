const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const Course = require("./course");
const Module = require("./module");

const Section = sequelize.define(
  "Sections",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Sections",
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    underscored: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  }
);

// // relasi
// Section.belongsTo(Course, {
//   foreignKey: 'course_id',
// });

// // relasi
// Section.hasMany(Module, {
//   foreignKey: 'section_id',
// });

module.exports = Section;






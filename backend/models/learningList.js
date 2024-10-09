const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const Course = require('./course'); 

const LearningList = sequelize.define(
  "LearningLists",
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
      references: {
        model: 'Courses',  
        key: 'id',     
      },
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "LearningLists",
    freezeTableName: true,
    paranoid: true,
    timestamps: true,
    underscored: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  }
);

// // relasi
// LearningList.belongsTo(Course, {
//   foreignKey: 'course_id',
// });

module.exports = LearningList;

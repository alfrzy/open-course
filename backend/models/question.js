const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Question = sequelize.define(
  "Question",
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
        model: "Courses",
        key: "id",
      },
    },
    question_text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    choices: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    correct_answer: {
      type: DataTypes.STRING(1), // Misalnya: "A", "B", "C", atau "D"
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Questions",
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    underscored: true,
    created_at: "created_at",
    updated_at: "updated_at",
    deleted_at: "deleted_at",
  }
);

module.exports = Question;

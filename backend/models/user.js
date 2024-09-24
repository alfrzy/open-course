const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const User = sequelize.define(
  "Users",
  {
    full_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    gmail: {
      type: DataTypes.STRING(255),
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    role: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    nim: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: true,
    },
    nidn: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: true,
    },
    profile_picture: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    created_at: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    deleted_at: {
      type: DataTypes.DATE,
      field: "deleted_at",
    },
  },
  {
    sequelize,
    tableName: "Users",
    freezeTableName: true,
    timestamps: true,
    paranoid: true, // Enable soft deletes
    underscored: true,
  }
);

module.exports = User;

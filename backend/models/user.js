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
    position: {
      type: DataTypes.STRING,
      allowNull: true,
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
    sequelize,
    tableName: "Users",
    freezeTableName: true,
    timestamps: true, // Aktifkan timestamps
    paranoid: true, // Enable soft deletes
    underscored: true,
    createdAt: "created_at", // Tentukan nama kolom untuk createdAt
    updatedAt: "updated_at", // Tentukan nama kolom untuk updatedAt
    deletedAt: "deleted_at", // Tentukan nama kolom untuk deletedAt
  }
);

module.exports = User;

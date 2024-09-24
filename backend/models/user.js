const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

// Define role constants starting from 0
const ROLES = {
  MAHASISWA: 0,
  DOSEN: 1,
  ADMIN: 2,
};

const User = sequelize.define(
  "Users",
  {
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
    },
    gmail: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.INTEGER,
      defaultValue: ROLES.MAHASISWA,
      validate: {
        isIn: [[ROLES.MAHASISWA, ROLES.DOSEN, ROLES.ADMIN]],
      },
    },
    nim: {
      type: DataTypes.STRING,
    },
    nidn: {
      type: DataTypes.STRING,
    },
    position: {
      type: DataTypes.STRING,
    },
    profile_picture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
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
    freezeTableName: true,
    timestamps: true,
    paranoid: true, // Enable soft deletes
    underscored: true,
  }
);

module.exports = User;

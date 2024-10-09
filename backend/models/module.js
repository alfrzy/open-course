const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const Section = require("./section");

const Module = sequelize.define(
  "Modules",
  {
    section_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive'), 
      allowNull: false,
      defaultValue: 'active',
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "Modules",
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
  }
);

// // relasi
// Module.belongsTo(Section, {
//   foreignKey: 'section_id',
// });


module.exports = Module;

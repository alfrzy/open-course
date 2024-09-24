const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/database')

const Book = sequelize.define(
  'Books',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    author: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'Books',
    paranoid: true,
  }
)

module.exports = Book

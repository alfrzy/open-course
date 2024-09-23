'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      full_name: { // Menggunakan full_name untuk konsistensi
        type: Sequelize.STRING,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, // Pastikan username unik
      },
      phone: {
        type: Sequelize.STRING,
      },
      gmail: {  
        type: Sequelize.STRING,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      role: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0, // Default ke MAHASISWA
      },
      nim: { // Tambahkan kolom nim
        type: Sequelize.STRING,
        allowNull: true, // Sesuaikan dengan kebutuhan Anda
      },
      nidn: { // Tambahkan kolom nidn
        type: Sequelize.STRING,
        allowNull: true, // Sesuaikan dengan kebutuhan Anda
      },
      position: { // Tambahkan kolom position
        type: Sequelize.STRING,
      },
      profile_picture: { // Tambahkan kolom profile_picture
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};

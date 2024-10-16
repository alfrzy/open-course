"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Add the 'tanggal_mulai' column to the table (replace 'your_table_name' with the actual table name)
    await queryInterface.addColumn("Courses", "tanggal_mulai", {
      type: Sequelize.DATE,
      allowNull: true, // Change to false if you want to make this field required
    });
  },

  async down(queryInterface, Sequelize) {
    // Remove the 'tanggal_mulai' column from the table
    await queryInterface.removeColumn("Courses", "tanggal_mulai");
  },
};

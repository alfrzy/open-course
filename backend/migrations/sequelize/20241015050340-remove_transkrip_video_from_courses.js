"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Remove the 'trankrip_video' column from the 'courses' table
    await queryInterface.removeColumn("Courses", "transkrip_video");
  },

  async down(queryInterface, Sequelize) {
    // Add the 'trankrip_video' column back to the 'courses' table (if needed)
    await queryInterface.addColumn("Courses", "transkrip_video", {
      type: Sequelize.STRING, // Adjust the data type as necessary
      allowNull: true, // Set to false if the column should not accept null values
    });
  },
};

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Courses", "instructor_id", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "Users", 
        key: "id",     
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Courses", "instructor_id");
  },
};

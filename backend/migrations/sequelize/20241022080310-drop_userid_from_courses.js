'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Courses", "user_id");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn("Courses", "user_id", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "Users", 
        key: "id",     
      },
    });
  },
};

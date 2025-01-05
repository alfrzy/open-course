"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Scores", "total_questions", {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,  // Nilai default jika tidak disertakan
    });
    await queryInterface.addColumn("Scores", "correct_answers", {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,  // Nilai default jika tidak disertakan
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Scores", "total_questions");
    await queryInterface.removeColumn("Scores", "correct_answers");
  },
};

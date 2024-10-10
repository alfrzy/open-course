'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('LearningLists', [
      {
        course_id: 1, 
        name: 'Basic Concepts',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 1, 
        name: 'Advanced Topics',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 2,
        name: 'Data Structures Overview',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 2,
        name: 'Algorithm Analysis',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 3,
        name: 'Frontend Development Basics',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('LearningLists', null, {});
  },
};

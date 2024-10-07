'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sections', [
      {
        course_id: 1, 
        title: 'Introduction to Programming',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 1, 
        title: 'Variables and Data Types',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 2,
        title: 'Advanced Data Structures',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 2,
        title: 'Algorithms in Depth',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 3, 
        title: 'Frontend Frameworks Overview',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sections', null, {});
  },
};

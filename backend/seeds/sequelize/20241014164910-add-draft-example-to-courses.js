'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Courses', [
      // Data untuk user_id 24

      // Data untuk user_id 1
      {
        course_category_id: 3,
        name: 'Draft matkul',
        description: 'An introductory course on machine learning concepts.',
        duration: 45,
        price: 149.99,
        language: 'English',
        thumbnail: 'path',
        is_publish: false,
        user_id: 1, 
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_category_id: 3,
        name: 'Draft matkul bang',
        description: 'An introductory course on machine learning concepts.',
        duration: 45,
        price: 149.99,
        language: 'English',
        thumbnail: 'path',
        is_publish: false,
        user_id: 24, 
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Courses', {
      user_id: 24,
    }, {});
    await queryInterface.bulkDelete('Courses', {
      user_id: 1,
    }, {});
  }
};

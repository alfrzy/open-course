'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Courses', [
      {
        course_category_id: 2,
        name: 'Courses 1 with instructor',
        description: 'An introductory course on machine learning concepts.',
        duration: 45,
        price: 149.99,
        language: 'English',
        thumbnail: 'path',
        is_publish: false,
        user_id: 48, 
        instructor_id: 24,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_category_id: 2,
        name: 'Courses 2 with instructor',
        description: 'An introductory course on machine learning concepts.',
        duration: 45,
        price: 149.99,
        language: 'English',
        thumbnail: 'path',
        is_publish: false,
        user_id: 48, 
        instructor_id: 24,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_category_id: 2,
        name: 'Courses 3 with instructor',
        description: 'An introductory course on machine learning concepts.',
        duration: 45,
        price: 149.99,
        language: 'English',
        thumbnail: 'path',
        is_publish: false,
        user_id: 48, 
        instructor_id: 48,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
  }
};

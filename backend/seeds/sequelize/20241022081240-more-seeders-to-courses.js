'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Courses', [
      {
        course_category_id: 2,
        name: 'Courses with instructor',
        description: 'An introductory course on machine learning concepts.',
        duration: 45,
        price: 149.99,
        language: 'English',
        thumbnail: 'path',
        is_publish: true,
        instructor_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_category_id: 2,
        name: 'Courses with instructor',
        description: 'An introductory course on machine learning concepts.',
        duration: 45,
        price: 149.99,
        language: 'English',
        thumbnail: 'path',
        is_publish: true,
        instructor_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_category_id: 2,
        name: 'Courses with instructor',
        description: 'An introductory course on machine learning concepts.',
        duration: 45,
        price: 149.99,
        language: 'English',
        thumbnail: 'path',
        is_publish: true,
        instructor_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_category_id: 2,
        name: 'Courses with instructor',
        description: 'An introductory course on machine learning concepts.',
        duration: 45,
        price: 149.99,
        language: 'English',
        thumbnail: 'path',
        is_publish: false,
        instructor_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_category_id: 2,
        name: 'Inggris mumet',
        description: 'An introductory course on machine learning concepts.',
        duration: 45,
        price: 149.99,
        language: 'English',
        thumbnail: 'path',
        is_publish: false,
        instructor_id: 2, 
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_category_id: 2,
        name: 'Matematika mumet',
        description: 'An introductory course on machine learning concepts.',
        duration: 45,
        price: 149.99,
        language: 'English',
        thumbnail: 'path',
        is_publish: false,
        instructor_id: 1, 
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_category_id: 3,
        name: 'Draft matkul',
        description: 'An introductory course on machine learning concepts.',
        duration: 45,
        price: 149.99,
        language: 'English',
        thumbnail: 'path',
        is_publish: false,
        instructor_id: 1, 
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
        instructor_id: 2, 
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
  }
};

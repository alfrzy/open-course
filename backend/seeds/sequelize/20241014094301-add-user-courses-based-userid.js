'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Courses', [
      // Data untuk user_id 24
      {
        course_category_id: 1, // id course category
        name: 'Web Development Basics',
        description: 'An introductory course on web development.',
        duration: 35,
        price: 89.99,
        language: 'English',
        thumbnail: 'path',
        is_publish: true,
        user_id: 24, 
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_category_id: 2,
        name: 'React for Beginners',
        description: 'Learn the basics of React and build your first app.',
        duration: 30,
        price: 79.99,
        language: 'English',
        thumbnail: 'path',
        is_publish: true,
        user_id: 24,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_category_id: 3,
        name: 'Node.js for Beginners',
        description: 'An introductory course on Node.js.',
        duration: 25,
        price: 69.99,
        language: 'English',
        thumbnail: 'path',
        is_publish: true,
        user_id: 24,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_category_id: 1,
        name: 'Introduction to APIs',
        description: 'Learn how to create and consume APIs.',
        duration: 40,
        price: 99.99,
        language: 'English',
        thumbnail: 'path',
        is_publish: true,
        user_id: 24,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_category_id: 2,
        name: 'HTML & CSS Fundamentals',
        description: 'Learn the building blocks of web development.',
        duration: 30,
        price: 59.99,
        language: 'English',
        thumbnail: 'path',
        is_publish: true,
        user_id: 24,
        created_at: new Date(),
        updated_at: new Date(),
      },

      // Data untuk user_id 1
      {
        course_category_id: 3,
        name: 'Machine Learning Basics',
        description: 'An introductory course on machine learning concepts.',
        duration: 45,
        price: 149.99,
        language: 'English',
        thumbnail: 'path',
        is_publish: true,
        user_id: 1, 
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

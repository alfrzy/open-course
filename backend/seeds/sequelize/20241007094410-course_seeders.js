'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Courses', [
      {
        course_category_id: 1, // id course category
        name: 'Introduction to Programming',
        description: 'Learn the basics of programming using Python.',
        duration: 30, // Durasi dalam jam
        price: 99.99,
        language: 'English',
        thumbnail: 'path',
        is_publish: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_category_id: 1, 
        name: 'Data Structures and Algorithms',
        description: 'Deep dive into data structures and algorithms in Java.',
        duration: 40,
        price: 149.99,
        language: 'English',
        thumbnail: 'path',
        is_publish: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_category_id: 2, 
        name: 'Advanced Web Development',
        description: 'Build advanced web applications using React and Node.js.',
        duration: 50,
        price: 199.99,
        language: 'English',
        thumbnail: 'path',
        is_publish: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_category_id: 3, 
        name: 'Database Management Systems',
        description: 'Learn to design and manage databases using SQL.',
        duration: 45,
        price: 129.99,
        language: 'English',
        thumbnail: 'path',
        is_publish: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Courses', null, {});
  }
};

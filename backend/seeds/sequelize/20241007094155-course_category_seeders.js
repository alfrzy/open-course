'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('CourseCategories', [
      {
        name: 'Programming',
        title: 'Programming Languages',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Data Science',
        title: 'Data Science and Machine Learning',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Web Development',
        title: 'Web Development Courses',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Mobile Development',
        title: 'Mobile App Development',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CourseCategories', null, {});
  }
};

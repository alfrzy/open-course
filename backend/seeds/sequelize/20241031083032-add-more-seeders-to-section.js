'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sections', [

      {
        course_id: 2, 
        title: 'Pengumuman',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 1, 
        title: 'Pengumuman',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sections', null, {});
  },
};

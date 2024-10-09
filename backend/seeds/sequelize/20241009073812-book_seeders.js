'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        // kalau di user gak sesuai id nya gak bakalan bisa
        user_id: 4 ,
        name: 'Belajar Node.js',
        author: 'John Doe',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        name: 'Dasar-Dasar Pemrograman',
        author: 'Jane Smith',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        name: 'JavaScript untuk Pemula',
        author: 'Alice Johnson',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 3,
        name: 'Pemrograman Web dengan React',
        author: 'Bob Brown',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 3,
        name: 'Menguasai SQL',
        author: 'Charlie White',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  },
};

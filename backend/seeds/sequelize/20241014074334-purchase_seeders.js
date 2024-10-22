'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Purchases', [
      {
        invoice_number: 'INV-' + new Date().getTime() + '-001', // Contoh invoice number
        course_id: 1, // Asumsi course_id yang valid
        user_id: 1, // Asumsi user_id yang valid
        is_verification: true,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        invoice_number: 'INV-' + new Date().getTime() + '-002',
        course_id: 2,
        user_id: 2,
        is_verification: false,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        invoice_number: 'INV-' + new Date().getTime() + '-003',
        course_id: 3,
        user_id: 1,
        is_verification: true,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        invoice_number: 'INV-' + new Date().getTime() + '-004',
        course_id: 4,
        user_id: 3,
        is_verification: false,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Purchases', null, {});
  }
};
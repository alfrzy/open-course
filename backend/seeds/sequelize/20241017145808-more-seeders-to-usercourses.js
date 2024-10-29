'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserCourses', [
      {
        course_id: 1, 
        user_id: 1, 
        is_finish: false,
        enrollment_date: new Date(),
        due_date: new Date(new Date().setDate(new Date().getDate() + 30)), 
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 2,
        user_id: 1,
        is_finish: true,
        enrollment_date: new Date(),
        due_date: new Date(new Date().setDate(new Date().getDate() + 60)), // 60 hari setelah enrollment
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 2,
        user_id: 2, 
        is_finish: false,
        enrollment_date: new Date(),
        due_date: new Date(new Date().setDate(new Date().getDate() + 30)),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 1,
        user_id: 1,
        is_finish: true,
        enrollment_date: new Date(),
        due_date: new Date(new Date().setDate(new Date().getDate() + 60)),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 3,
        user_id: 2,
        is_finish: true,
        enrollment_date: new Date(),
        due_date: new Date(new Date().setDate(new Date().getDate() + 60)),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 1, 
        user_id: 2, 
        is_finish: false,
        enrollment_date: new Date(),
        due_date: new Date(new Date().setDate(new Date().getDate() + 30)), 
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 2,
        user_id: 1,
        is_finish: true,
        enrollment_date: new Date(),
        due_date: new Date(new Date().setDate(new Date().getDate() + 60)), // 60 hari setelah enrollment
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 3,
        user_id: 1, 
        is_finish: false,
        enrollment_date: new Date(),
        due_date: new Date(new Date().setDate(new Date().getDate() + 30)),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 4,
        user_id: 2,
        is_finish: true,
        enrollment_date: new Date(),
        due_date: new Date(new Date().setDate(new Date().getDate() + 60)),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 4,
        user_id: 1,
        is_finish: true,
        enrollment_date: new Date(),
        due_date: new Date(new Date().setDate(new Date().getDate() + 60)),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserCourses', null, {});
  },
};

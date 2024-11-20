"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Modules", [
      {
        section_id: 1, 
        title: 'Module 1: Getting Started',
        status: 'active',
        description: 'An introduction to the course materials and expectations.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        section_id: 1, 
        title: 'Module 2: Basic Concepts',
        status: 'active',
        description: 'Learn about the basic concepts of programming.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        section_id: 2, 
        title: 'Module 1: Advanced Data Structures',
        status: 'inactive',
        description: 'Deep dive into advanced data structures.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        section_id: 2, 
        title: 'Module 2: Algorithm Analysis',
        status: 'active',
        description: 'Learn how to analyze algorithms for efficiency.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        section_id: 3, 
        title: 'Module 1: Introduction to Frontend Frameworks',
        status: 'active',
        description: 'Overview of popular frontend frameworks.',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Modules", null, {});
  },
};

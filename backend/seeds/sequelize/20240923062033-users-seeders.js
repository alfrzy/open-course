"use strict";

const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const saltRounds = 10;

    const hashedPassMhs = await bcrypt.hash("password123", saltRounds);
    const hashedPassDosen = await bcrypt.hash("password123", saltRounds);
    const hashedPassAdmin = await bcrypt.hash("password123", saltRounds);

    return queryInterface.bulkInsert("Users", [
      {
        full_name: "user satu",
        username: "user satu",
        gmail: "usersatu@gmail.com",
        password: hashedPassMhs,
        phone: "081234567",
        role: 0,
        nim: "A1234",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        full_name: "dosen satu",
        username: "dosen satu",
        gmail: "dosen@gmail.com",
        password: hashedPassDosen,
        phone: "081234567",
        role: 1,
        nidn: "D1234",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        full_name: "admin satu",
        username: "admin satu",
        gmail: "admin@gmail.com",
        password: hashedPassAdmin,
        role: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};

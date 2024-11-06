'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Modules', [
      {
        section_id: 2, 
        title: 'Module 1: Getting Started',
        status: 'active',
        description: 
        `<div class="space-y-8">
          <!-- Section 1 -->
          <div class="border p-4 rounded-md shadow-md">
            <h2 class="text-2xl font-bold mb-2">Pengertian Keuangan</h2>
            <p class="text-gray-700 mb-4">
              Praeterea, ex culpa non invenies unum aut non accusatis unum. Et nihil iniutam. Nemo nocere tibi erit, et non inimicos, et ne illa laederentur.
            </p>
            <p class="text-gray-700 mb-4">
              Tanta petere igitur, ne sineres memini fieri etiam aliquam inclinationem ad consequendum minima.
            </p>
            <a href="#" class="block border border-gray-300 p-2 rounded-md hover:bg-gray-100 transition">
              Referensi link eksternal [1]
            </a>
            <!-- Image and text side by side -->
            <div class="mt-4 flex space-x-4">
              <img src="https://via.placeholder.com/150" alt="Gambar" class="w-1/3 object-cover rounded-md shadow-sm">
              <p class="text-gray-700">
                Praeterea, ex culpa non invenies unum aut non accusatis unum. Et nihil iniutam. Nemo nocere tibi erit, et non inimicos, et ne illa laederentur. Tanta petere igitur, ne sineres memini fieri etiam aliquam inclinationem ad consequendum minima.
              </p>
            </div>
          </div>

          <!-- Section 2 -->
          <div class="border p-4 rounded-md shadow-md">
            <h2 class="text-2xl font-bold mb-2">Investasi Uang untuk Masa Depan</h2>
            <p class="text-gray-700 mb-4">
              Praeterea, ex culpa non invenies unum aut non accusatis unum. Et nihil iniutam. Nemo nocere tibi erit, et non inimicos, et ne illa laederentur.
            </p>
            <img src="https://via.placeholder.com/350x150" alt="Gambar" class="w-full object-cover rounded-md shadow-sm mb-4">
            <a href="#" class="block border border-gray-300 p-2 rounded-md hover:bg-gray-100 transition">
              Referensi link eksternal [1]
            </a>
            <p class="text-gray-700 mt-4">
              Praeterea, ex culpa non invenies unum aut non accusatis unum. Et nihil iniutam. Nemo nocere tibi erit, et non inimicos, et ne illa laederentur.
            </p>
          </div>
        </div>`,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        section_id: 2, 
        title: 'Module 2: Basic Concepts',
        status: 'active',
        description: 
        `<div class="space-y-8">
          <!-- Section 1 -->
          <div class="border p-4 rounded-md shadow-md">
            <h2 class="text-2xl font-bold mb-2">Pengertian Keuangan</h2>
            <p class="text-gray-700 mb-4">
              Praeterea, ex culpa non invenies unum aut non accusatis unum. Et nihil iniutam. Nemo nocere tibi erit, et non inimicos, et ne illa laederentur.
            </p>
            <p class="text-gray-700 mb-4">
              Tanta petere igitur, ne sineres memini fieri etiam aliquam inclinationem ad consequendum minima.
            </p>
            <a href="#" class="block border border-gray-300 p-2 rounded-md hover:bg-gray-100 transition">
              Referensi link eksternal [1]
            </a>
            <!-- Image and text side by side -->
            <div class="mt-4 flex space-x-4">
              <img src="https://via.placeholder.com/150" alt="Gambar" class="w-1/3 object-cover rounded-md shadow-sm">
              <p class="text-gray-700">
                Praeterea, ex culpa non invenies unum aut non accusatis unum. Et nihil iniutam. Nemo nocere tibi erit, et non inimicos, et ne illa laederentur. Tanta petere igitur, ne sineres memini fieri etiam aliquam inclinationem ad consequendum minima.
              </p>
            </div>
          </div>

          <!-- Section 2 -->
          <div class="border p-4 rounded-md shadow-md">
            <h2 class="text-2xl font-bold mb-2">Investasi Uang untuk Masa Depan</h2>
            <p class="text-gray-700 mb-4">
              Praeterea, ex culpa non invenies unum aut non accusatis unum. Et nihil iniutam. Nemo nocere tibi erit, et non inimicos, et ne illa laederentur.
            </p>
            <img src="https://via.placeholder.com/350x150" alt="Gambar" class="w-full object-cover rounded-md shadow-sm mb-4">
            <a href="#" class="block border border-gray-300 p-2 rounded-md hover:bg-gray-100 transition">
              Referensi link eksternal [1]
            </a>
            <p class="text-gray-700 mt-4">
              Praeterea, ex culpa non invenies unum aut non accusatis unum. Et nihil iniutam. Nemo nocere tibi erit, et non inimicos, et ne illa laederentur.
            </p>
          </div>
        </div>`,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        section_id: 4, 
        title: 'Module 1: Advanced Data Structures',
        status: 'inactive',
        description: 
        `<div class="space-y-8">
          <!-- Section 1 -->
          <div class="border p-4 rounded-md shadow-md">
            <h2 class="text-2xl font-bold mb-2">Pengertian Keuangan</h2>
            <p class="text-gray-700 mb-4">
              Praeterea, ex culpa non invenies unum aut non accusatis unum. Et nihil iniutam. Nemo nocere tibi erit, et non inimicos, et ne illa laederentur.
            </p>
            <p class="text-gray-700 mb-4">
              Tanta petere igitur, ne sineres memini fieri etiam aliquam inclinationem ad consequendum minima.
            </p>
            <a href="#" class="block border border-gray-300 p-2 rounded-md hover:bg-gray-100 transition">
              Referensi link eksternal [1]
            </a>
            <!-- Image and text side by side -->
            <div class="mt-4 flex space-x-4">
              <img src="https://via.placeholder.com/150" alt="Gambar" class="w-1/3 object-cover rounded-md shadow-sm">
              <p class="text-gray-700">
                Praeterea, ex culpa non invenies unum aut non accusatis unum. Et nihil iniutam. Nemo nocere tibi erit, et non inimicos, et ne illa laederentur. Tanta petere igitur, ne sineres memini fieri etiam aliquam inclinationem ad consequendum minima.
              </p>
            </div>
          </div>

          <!-- Section 2 -->
          <div class="border p-4 rounded-md shadow-md">
            <h2 class="text-2xl font-bold mb-2">Investasi Uang untuk Masa Depan</h2>
            <p class="text-gray-700 mb-4">
              Praeterea, ex culpa non invenies unum aut non accusatis unum. Et nihil iniutam. Nemo nocere tibi erit, et non inimicos, et ne illa laederentur.
            </p>
            <img src="https://via.placeholder.com/350x150" alt="Gambar" class="w-full object-cover rounded-md shadow-sm mb-4">
            <a href="#" class="block border border-gray-300 p-2 rounded-md hover:bg-gray-100 transition">
              Referensi link eksternal [1]
            </a>
            <p class="text-gray-700 mt-4">
              Praeterea, ex culpa non invenies unum aut non accusatis unum. Et nihil iniutam. Nemo nocere tibi erit, et non inimicos, et ne illa laederentur.
            </p>
          </div>
        </div>`,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        section_id: 4, 
        title: 'Module 2: Algorithm Analysis',
        status: 'active',
        description: 
        `<div class="space-y-8">
          <!-- Section 1 -->
          <div class="border p-4 rounded-md shadow-md">
            <h2 class="text-2xl font-bold mb-2">Pengertian Keuangan</h2>
            <p class="text-gray-700 mb-4">
              Praeterea, ex culpa non invenies unum aut non accusatis unum. Et nihil iniutam. Nemo nocere tibi erit, et non inimicos, et ne illa laederentur.
            </p>
            <p class="text-gray-700 mb-4">
              Tanta petere igitur, ne sineres memini fieri etiam aliquam inclinationem ad consequendum minima.
            </p>
            <a href="#" class="block border border-gray-300 p-2 rounded-md hover:bg-gray-100 transition">
              Referensi link eksternal [1]
            </a>
            <!-- Image and text side by side -->
            <div class="mt-4 flex space-x-4">
              <img src="https://via.placeholder.com/150" alt="Gambar" class="w-1/3 object-cover rounded-md shadow-sm">
              <p class="text-gray-700">
                Praeterea, ex culpa non invenies unum aut non accusatis unum. Et nihil iniutam. Nemo nocere tibi erit, et non inimicos, et ne illa laederentur. Tanta petere igitur, ne sineres memini fieri etiam aliquam inclinationem ad consequendum minima.
              </p>
            </div>
          </div>

          <!-- Section 2 -->
          <div class="border p-4 rounded-md shadow-md">
            <h2 class="text-2xl font-bold mb-2">Investasi Uang untuk Masa Depan</h2>
            <p class="text-gray-700 mb-4">
              Praeterea, ex culpa non invenies unum aut non accusatis unum. Et nihil iniutam. Nemo nocere tibi erit, et non inimicos, et ne illa laederentur.
            </p>
            <img src="https://via.placeholder.com/350x150" alt="Gambar" class="w-full object-cover rounded-md shadow-sm mb-4">
            <a href="#" class="block border border-gray-300 p-2 rounded-md hover:bg-gray-100 transition">
              Referensi link eksternal [1]
            </a>
            <p class="text-gray-700 mt-4">
              Praeterea, ex culpa non invenies unum aut non accusatis unum. Et nihil iniutam. Nemo nocere tibi erit, et non inimicos, et ne illa laederentur.
            </p>
          </div>
        </div>`,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        section_id: 3, 
        title: 'Module 1: Introduction to Frontend Frameworks',
        status: 'active',
        description: 
        `<div class="space-y-8">
          <!-- Section 1 -->
          <div class="border p-4 rounded-md shadow-md">
            <h2 class="text-2xl font-bold mb-2">Pengertian Keuangan</h2>
            <p class="text-gray-700 mb-4">
              Praeterea, ex culpa non invenies unum aut non accusatis unum. Et nihil iniutam. Nemo nocere tibi erit, et non inimicos, et ne illa laederentur.
            </p>
            <p class="text-gray-700 mb-4">
              Tanta petere igitur, ne sineres memini fieri etiam aliquam inclinationem ad consequendum minima.
            </p>
            <a href="#" class="block border border-gray-300 p-2 rounded-md hover:bg-gray-100 transition">
              Referensi link eksternal [1]
            </a>
            <!-- Image and text side by side -->
            <div class="mt-4 flex space-x-4">
              <img src="https://via.placeholder.com/150" alt="Gambar" class="w-1/3 object-cover rounded-md shadow-sm">
              <p class="text-gray-700">
                Praeterea, ex culpa non invenies unum aut non accusatis unum. Et nihil iniutam. Nemo nocere tibi erit, et non inimicos, et ne illa laederentur. Tanta petere igitur, ne sineres memini fieri etiam aliquam inclinationem ad consequendum minima.
              </p>
            </div>
          </div>

          <!-- Section 2 -->
          <div class="border p-4 rounded-md shadow-md">
            <h2 class="text-2xl font-bold mb-2">Investasi Uang untuk Masa Depan</h2>
            <p class="text-gray-700 mb-4">
              Praeterea, ex culpa non invenies unum aut non accusatis unum. Et nihil iniutam. Nemo nocere tibi erit, et non inimicos, et ne illa laederentur.
            </p>
            <img src="https://via.placeholder.com/350x150" alt="Gambar" class="w-full object-cover rounded-md shadow-sm mb-4">
            <a href="#" class="block border border-gray-300 p-2 rounded-md hover:bg-gray-100 transition">
              Referensi link eksternal [1]
            </a>
            <p class="text-gray-700 mt-4">
              Praeterea, ex culpa non invenies unum aut non accusatis unum. Et nihil iniutam. Nemo nocere tibi erit, et non inimicos, et ne illa laederentur.
            </p>
          </div>
        </div>`,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Modules', null, {});
  },
};

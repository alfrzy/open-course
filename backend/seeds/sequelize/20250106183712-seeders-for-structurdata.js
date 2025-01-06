'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Modules', [
      {
        section_id: 3, 
        title: 'Pengenalan Struktur Data',
        status: 'active',
        description: 
        `<div class="space-y-8">
        <!-- Section 1: Apa Itu Struktur Data -->
        <div class="border p-4 rounded-md shadow-md">
          <h2 class="text-2xl font-bold mb-2">Apa Itu Struktur Data?</h2>
          <p class="text-gray-700 mb-4">
            Struktur data adalah cara untuk mengatur dan mengelola data sehingga dapat digunakan secara efisien. Dalam pemrograman, struktur data digunakan untuk menyimpan, mengakses, dan memanipulasi data.
          </p>
          <p class="text-gray-700 mb-4">
            Struktur data sangat penting karena memengaruhi efisiensi algoritma yang digunakan dalam pemrograman. Contoh struktur data termasuk array, linked list, stack, queue, dan tree.
          </p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Binary_tree.svg/300px-Binary_tree.svg.png" 
            alt="Ilustrasi Binary Tree" class="w-full object-cover rounded-md shadow-sm">
        </div>
    
        <!-- Section 2: Jenis-Jenis Struktur Data -->
        <div class="border p-4 rounded-md shadow-md">
          <h2 class="text-2xl font-bold mb-2">Jenis-Jenis Struktur Data</h2>
          <p class="text-gray-700 mb-4">
            Struktur data dapat dibagi menjadi dua kategori utama:
          </p>
          <ul class="list-disc list-inside text-gray-700 mb-4">
            <li><strong>Struktur Data Linear:</strong> Elemen disusun dalam urutan, seperti array, linked list, stack, dan queue.</li>
            <li><strong>Struktur Data Non-Linear:</strong> Elemen tidak memiliki urutan yang tetap, seperti tree dan graph.</li>
          </ul>
          <p class="text-gray-700 mb-4">
            Setiap jenis struktur data memiliki kelebihan dan kekurangan, serta cocok untuk kebutuhan tertentu. Misalnya, stack digunakan untuk operasi LIFO (Last In First Out), sedangkan tree digunakan untuk hierarki.
          </p>
        </div>
      </div>`,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        section_id: 3, 
        title: 'Pentingnya Struktur Data',
        status: 'active',
        description: 
        `<div class="space-y-8">
    <!-- Section 3: Mengapa Struktur Data Penting? -->
    <div class="border p-4 rounded-md shadow-md">
      <h2 class="text-2xl font-bold mb-2">Mengapa Struktur Data Penting?</h2>
      <p class="text-gray-700 mb-4">
        Struktur data adalah fondasi dalam pengembangan perangkat lunak. Tanpa struktur data yang efisien, aplikasi dapat menjadi lambat dan sulit dikelola. Struktur data membantu programmer mengoptimalkan kinerja program.
      </p>
      <p class="text-gray-700 mb-4">
        Pemahaman yang baik tentang struktur data memungkinkan Anda untuk memilih solusi yang tepat untuk masalah yang berbeda. Ini adalah keterampilan penting bagi pengembang perangkat lunak dan ilmuwan komputer.
      </p>
      <img src="https://miro.medium.com/max/700/1*RqEFOjoaVmt3iUVLXx8dBg.jpeg" 
        alt="Ilustrasi Penggunaan Struktur Data" class="w-full object-cover rounded-md shadow-sm">
    </div>

    <!-- Section 4: Contoh Kasus Penggunaan Struktur Data -->
    <div class="border p-4 rounded-md shadow-md">
      <h2 class="text-2xl font-bold mb-2">Contoh Kasus Penggunaan Struktur Data</h2>
      <p class="text-gray-700 mb-4">
        Berikut adalah beberapa contoh bagaimana struktur data digunakan dalam aplikasi dunia nyata:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-4">
        <li><strong>Array:</strong> Digunakan untuk menyimpan daftar item seperti daftar belanja.</li>
        <li><strong>Queue:</strong> Digunakan untuk antrian layanan pelanggan.</li>
        <li><strong>Tree:</strong> Digunakan dalam struktur direktori file.</li>
        <li><strong>Graph:</strong> Digunakan dalam pemetaan jaringan transportasi.</li>
      </ul>
      <a href="https://www.geeksforgeeks.org/data-structures/" class="block border border-gray-300 p-2 rounded-md hover:bg-gray-100 transition">
        Pelajari lebih lanjut tentang struktur data
      </a>
    </div>
  </div>`,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        section_id: 4, 
        title: 'Pendahuluan ke Algoritma',
        status: 'active',
        description: 
        `<div class="space-y-8">
        <!-- Section 1: Apa Itu Algoritma -->
        <div class="border p-4 rounded-md shadow-md">
          <h2 class="text-2xl font-bold mb-2">Apa Itu Algoritma?</h2>
          <p class="text-gray-700 mb-4">
            Algoritma adalah serangkaian langkah yang logis dan sistematis untuk menyelesaikan masalah atau mencapai tujuan tertentu. Algoritma digunakan di hampir setiap aspek pemrograman komputer, dari pencarian data hingga pemrosesan gambar.
          </p>
          <p class="text-gray-700 mb-4">
            Algoritma yang baik harus memenuhi kriteria seperti efisiensi, kejelasan, dan skalabilitas. Contoh klasik algoritma adalah pengurutan (sorting), pencarian (searching), dan algoritma grafik.
          </p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Bubble_sort_animation.gif/220px-Bubble_sort_animation.gif" 
            alt="Ilustrasi Bubble Sort" class="w-full object-cover rounded-md shadow-sm">
        </div>
    
        <!-- Section 2: Karakteristik Algoritma -->
        <div class="border p-4 rounded-md shadow-md">
          <h2 class="text-2xl font-bold mb-2">Karakteristik Algoritma</h2>
          <p class="text-gray-700 mb-4">
            Algoritma memiliki beberapa karakteristik utama yang membuatnya efektif:
          </p>
          <ul class="list-disc list-inside text-gray-700 mb-4">
            <li><strong>Finiteness:</strong> Algoritma harus memiliki jumlah langkah yang terbatas.</li>
            <li><strong>Definiteness:</strong> Setiap langkah harus jelas dan tidak ambigu.</li>
            <li><strong>Input dan Output:</strong> Algoritma harus menerima input dan menghasilkan output.</li>
            <li><strong>Efisiensi:</strong> Algoritma harus berjalan dalam waktu dan memori yang optimal.</li>
          </ul>
          <p class="text-gray-700 mb-4">
            Dengan memahami karakteristik ini, kita dapat merancang algoritma yang sesuai untuk berbagai kasus penggunaan.
          </p>
        </div>
      </div>`,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        section_id: 4, 
        title: 'Pentingnya Algoritma',
        status: 'active',
        description: 
        `<div class="space-y-8">
          <!-- Section 3: Mengapa Algoritma Penting? -->
          <div class="border p-4 rounded-md shadow-md">
            <h2 class="text-2xl font-bold mb-2">Mengapa Algoritma Penting?</h2>
            <p class="text-gray-700 mb-4">
              Algoritma adalah inti dari solusi berbasis teknologi. Dalam pemrograman, algoritma membantu menyelesaikan masalah secara efisien, dari tugas sederhana hingga skenario kompleks.
            </p>
            <p class="text-gray-700 mb-4">
              Dengan algoritma yang tepat, aplikasi dapat berjalan lebih cepat, menggunakan sumber daya dengan lebih baik, dan menghasilkan hasil yang akurat. Sebaliknya, algoritma yang buruk dapat menyebabkan masalah kinerja dan kesalahan.
            </p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Dijkstra_Animation.gif/250px-Dijkstra_Animation.gif" 
              alt="Ilustrasi Algoritma Dijkstra" class="w-full object-cover rounded-md shadow-sm">
          </div>
      
          <!-- Section 4: Contoh Algoritma Umum -->
          <div class="border p-4 rounded-md shadow-md">
            <h2 class="text-2xl font-bold mb-2">Contoh Algoritma Umum</h2>
            <p class="text-gray-700 mb-4">
              Berikut adalah beberapa algoritma yang sering digunakan:
            </p>
            <ul class="list-disc list-inside text-gray-700 mb-4">
              <li><strong>Bubble Sort:</strong> Algoritma pengurutan sederhana yang menggunakan perbandingan berulang antar elemen.</li>
              <li><strong>Dijkstra:</strong> Algoritma untuk menemukan jalur terpendek di graf berarah.</li>
              <li><strong>Binary Search:</strong> Algoritma pencarian yang bekerja pada data yang telah diurutkan.</li>
            </ul>
            <a href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/" class="block border border-gray-300 p-2 rounded-md hover:bg-gray-100 transition">
              Pelajari lebih lanjut tentang algoritma
            </a>
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

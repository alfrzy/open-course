'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Modules', [
      {
        section_id: 1, 
        title: 'Dasar Dasar Pemrograman',
        status: 'active',
        description: 
        `<div class="space-y-8">
  <!-- Section 1: Pengertian Pemrograman -->
  <div class="border p-4 rounded-md shadow-md">
    <h2 class="text-2xl font-bold mb-2">Pengertian Pemrograman</h2>
    <p class="text-gray-700 mb-4">
      Pemrograman adalah proses menulis, menguji, dan memelihara kode untuk membuat perangkat lunak. Dalam pemrograman, instruksi diberikan kepada komputer untuk menyelesaikan tugas tertentu.
    </p>
    <p class="text-gray-700 mb-4">
      Bahasa pemrograman seperti Python, Java, dan JavaScript digunakan untuk menulis kode yang dapat dimengerti oleh komputer. Pemrograman dasar adalah fondasi untuk mempelajari teknologi lebih lanjut.
    </p>
  </div>

  <!-- Section 2: Komponen Dasar Pemrograman -->
  <div class="border p-4 rounded-md shadow-md">
    <h2 class="text-2xl font-bold mb-2">Komponen Dasar Pemrograman</h2>
    <p class="text-gray-700 mb-4">
      Pemrograman terdiri dari beberapa konsep dasar yang penting untuk dipahami:
    </p>
    <ul class="list-disc list-inside text-gray-700 mb-4">
      <li><strong>Variabel:</strong> Tempat untuk menyimpan data, seperti angka atau teks.</li>
      <li><strong>Operator:</strong> Simbol untuk melakukan operasi, seperti penjumlahan (+) atau pembandingan (==).</li>
      <li><strong>Kontrol Alur:</strong> Struktur yang mengatur jalannya program, seperti <code>if-else</code> dan <code>loop</code>.</li>
      <li><strong>Fungsi:</strong> Blok kode yang dapat digunakan kembali untuk melakukan tugas tertentu.</li>
    </ul>
    <img src="https://i.pinimg.com/736x/e4/ae/91/e4ae913770319fc3230da7b28530d82c.jpg" alt="Diagram Komponen Dasar Pemrograman" class="w-full object-cover rounded-md shadow-sm">
  </div>

  <!-- Section 3: Struktur Program Sederhana -->
  <div class="border p-4 rounded-md shadow-md">
    <h2 class="text-2xl font-bold mb-2">Struktur Program Sederhana</h2>
    <p class="text-gray-700 mb-4">
      Berikut adalah contoh program sederhana dalam bahasa Python:
    </p>
    <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto">
<code class="text-sm text-gray-800">
# Program menghitung luas persegi panjang
panjang = float(input("Masukkan panjang: "))
lebar = float(input("Masukkan lebar: "))
luas = panjang * lebar
print("Luas persegi panjang:", luas)
</code>
    </pre>
    <p class="text-gray-700 mt-4">
      Program ini meminta pengguna untuk memasukkan panjang dan lebar, lalu menghitung luas persegi panjang menggunakan formula dasar.
    </p>
  </div>
</div>`,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        section_id: 1, 
        title: 'Pentingnya Pemrograman Dasar',
        status: 'active',
        description: 
        `<div class="space-y-8">
        <!-- Section 4: Paradigma Pemrograman -->
  <div class="border p-4 rounded-md shadow-md">
    <h2 class="text-2xl font-bold mb-2">Paradigma Pemrograman</h2>
    <p class="text-gray-700 mb-4">
      Ada berbagai paradigma dalam pemrograman, di antaranya:
    </p>
    <ul class="list-disc list-inside text-gray-700 mb-4">
      <li><strong>Procedural:</strong> Berbasis langkah-langkah, contoh: C, Python.</li>
      <li><strong>Object-Oriented:</strong> Berbasis objek, contoh: Java, C++.</li>
      <li><strong>Functional:</strong> Berbasis fungsi matematis, contoh: Haskell, Scala.</li>
    </ul>
    <a href="https://youtu.be/K2yBLk4hAp0?si=1Fg_JTyhQFquXntd" class="block border border-gray-300 p-2 rounded-md hover:bg-gray-100 transition">
      Pelajari lebih lanjut tentang paradigma pemrograman
    </a>
  </div>

  <!-- Section 5: Pentingnya Pemrograman Dasar -->
  <div class="border p-4 rounded-md shadow-md">
    <h2 class="text-2xl font-bold mb-2">Pentingnya Pemrograman Dasar</h2>
    <p class="text-gray-700 mb-4">
      Pemrograman dasar adalah langkah awal untuk memahami cara kerja perangkat lunak dan algoritma. Dengan memahami konsep dasar, Anda dapat dengan mudah mempelajari bahasa pemrograman lainnya.
    </p>
    <p class="text-gray-700 mb-4">
      Penguasaan pemrograman dasar memungkinkan Anda untuk menciptakan aplikasi, mengembangkan logika pemecahan masalah, dan memulai karir di dunia teknologi.
    </p>
  </div>
</div>`,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        section_id: 2, 
        title: 'Pengertian',
        status: 'active',
        description: 
        `<div class="space-y-8">
  <!-- Section 1: Pengertian Variabel -->
  <div class="border p-4 rounded-md shadow-md">
    <h2 class="text-2xl font-bold mb-2">Pengertian Variabel</h2>
    <p class="text-gray-700 mb-4">
      Variabel adalah tempat untuk menyimpan data dalam program. Variabel memungkinkan programmer untuk menyimpan nilai yang dapat digunakan dan dimanipulasi selama program berjalan.
    </p>
    <p class="text-gray-700 mb-4">
      Contohnya, jika Anda ingin menyimpan nama pengguna, Anda dapat membuat variabel bernama <code>nama</code> dan mengisinya dengan nilai seperti "Ali".
    </p>
    <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto">
<code class="text-sm text-gray-800">
# Contoh variabel di Python
nama = "Ali"
umur = 20
print("Nama:", nama)
print("Umur:", umur)
</code>
    </pre>
  </div>

  <!-- Section 2: Tipe Data -->
  <div class="border p-4 rounded-md shadow-md">
    <h2 class="text-2xl font-bold mb-2">Tipe Data</h2>
    <p class="text-gray-700 mb-4">
      Tipe data menunjukkan jenis nilai yang dapat disimpan dalam variabel. Berikut adalah beberapa tipe data umum:
    </p>
    <ul class="list-disc list-inside text-gray-700 mb-4">
      <li><strong>Integer (int):</strong> Angka bulat, seperti <code>1</code>, <code>20</code>, atau <code>-5</code>.</li>
      <li><strong>Float:</strong> Angka desimal, seperti <code>3.14</code> atau <code>-0.99</code>.</li>
      <li><strong>String (str):</strong> Teks, seperti <code>"Halo Dunia"</code>.</li>
      <li><strong>Boolean (bool):</strong> Nilai logika, yaitu <code>True</code> atau <code>False</code>.</li>
      <li><strong>List:</strong> Kumpulan data dalam urutan tertentu, seperti <code>[1, 2, 3]</code>.</li>
    </ul>
    <img src="https://i.pinimg.com/736x/61/cd/b6/61cdb63ffc6263390b3f6c336cce9123.jpg" alt="Diagram Tipe Data" class="w-full object-cover rounded-md shadow-sm">
  </div>
  </div>`,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        section_id: 2, 
        title: 'Contoh dan Deklarasi',
        status: 'active',
        description: 
        `<div class="space-y-8">
        <!-- Section 3: Contoh Tipe Data -->
  <div class="border p-4 rounded-md shadow-md">
    <h2 class="text-2xl font-bold mb-2">Contoh Penggunaan Tipe Data</h2>
    <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto">
<code class="text-sm text-gray-800">
# Contoh tipe data di Python
nama = "Ali"       # String
umur = 20          # Integer
tinggi = 170.5     # Float
is_student = True  # Boolean
hobi = ["membaca", "berenang"]  # List

print("Nama:", nama)
print("Umur:", umur)
print("Tinggi:", tinggi, "cm")
print("Mahasiswa:", is_student)
print("Hobi:", hobi)
</code>
    </pre>
    <p class="text-gray-700 mt-4">
      Program di atas mendemonstrasikan berbagai tipe data yang dapat digunakan dalam program. Anda dapat mencoba mengganti nilainya untuk memahami bagaimana tipe data bekerja.
    </p>
  </div>

  <!-- Section 4: Deklarasi dan Inisialisasi Variabel -->
  <div class="border p-4 rounded-md shadow-md">
    <h2 class="text-2xl font-bold mb-2">Deklarasi dan Inisialisasi Variabel</h2>
    <p class="text-gray-700 mb-4">
      Dalam pemrograman, deklarasi variabel adalah proses membuat variabel, sedangkan inisialisasi adalah memberikan nilai awal kepada variabel tersebut.
    </p>
    <p class="text-gray-700 mb-4">
      Contoh:
    </p>
    <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto">
<code class="text-sm text-gray-800">
# Deklarasi dan inisialisasi variabel
x = 10      # x diinisialisasi dengan nilai 10
y = "Halo"  # y diinisialisasi dengan nilai "Halo"
</code>
    </pre>
    <p class="text-gray-700 mt-4">
      Anda dapat mengubah nilai variabel kapan saja, tetapi tipe data harus sesuai dengan yang dibutuhkan oleh program.
    </p>
  </div>

  <!-- Section 5: Pentingnya Pemahaman Variabel dan Tipe Data -->
  <div class="border p-4 rounded-md shadow-md">
    <h2 class="text-2xl font-bold mb-2">Pentingnya Pemahaman Variabel dan Tipe Data</h2>
    <p class="text-gray-700 mb-4">
      Variabel dan tipe data adalah dasar dari setiap bahasa pemrograman. Pemahaman yang baik tentang cara kerja variabel dan tipe data akan membantu Anda menulis kode yang lebih efisien dan mudah dipahami.
    </p>
    <a href="#" class="block border border-gray-300 p-2 rounded-md hover:bg-gray-100 transition">
      Pelajari lebih lanjut tentang tipe data di dokumentasi Python
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

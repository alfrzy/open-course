// const User = require('../models/user');

// class UserRepository {

//     async save(data) {
//         const { id } = data

//         const [user, created] = await User.findOrCreate({
//             where: {
//                 id
//             },
//             defaults: data
//         })
//         if(!created) await user.update(data)

//         return user.toJSON()
//     }
// }

// module.exports = UserRepository

const User = require("../models/user");

class UserRepository {
  // save
  async save(data) {
    // Hapus id dari data jika ada
    delete data.id;

    // Buat user baru
    const user = await User.create(data);

    return user.toJSON();
  }

  // get
  async findAll() {
    const users = await User.findAll(); // Mengambil semua pengguna
    return users.map((user) => user.toJSON());
  }

   // delete
   async deleteById(id) {
    const user = await User.findByPk(id); // Mencari pengguna berdasarkan ID
    if (!user) {
      return null; // Jika tidak ditemukan, kembalikan null
    }
    
    await user.destroy(); // Hapus pengguna dari database
    return user.toJSON(); // Kembalikan data pengguna yang dihapus
  }
}

module.exports = UserRepository;

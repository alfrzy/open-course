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
    const users = await User.findAll(); 
    return users.map((user) => user.toJSON());
  }

   // delete
   async deleteById(id) {
    const user = await User.findByPk(id); 
    if (!user) {
      return null; 
    }
    
    await user.destroy(); 
    return user.toJSON(); 
  }
}

module.exports = UserRepository;

const User = require("../models/user");
const { Op } = require("sequelize");

class UserRepository {
  // save
  async save(data) {
    // Hapus id dari data jika ada
    delete data.id;

    // Buat user baru
    const user = await User.create(data);

    return user.toJSON();
  }

  async login(gmail) {
    return await User.findOne({ where: { gmail } });
  }

  async getUser(id) {
    const user = await User.findByPk(id);
    return user ? user.toJSON() : null;
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

  // update
  async update(id, data) {
    const user = await User.findByPk(id); 
    if (!user) {
      return null; 
    }

    await user.update(data); 
    return user.toJSON();
  }

  async searchUsers(searchTerm) {
    const users = await User.findAll({
      where: {
        full_name: {
          [Op.iLike]: `%${searchTerm}%`, // Pencarian case-insensitive
        },
      },
      attributes: ["id", "full_name", "gmail"], // Hanya mengambil field yang diperlukan
    });

    return users.map((user) => user.toJSON());
  }
}

module.exports = UserRepository;
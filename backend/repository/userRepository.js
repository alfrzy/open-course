const User = require("../models/user");

class UserRepository {
  async save(data) {
    const { id } = data;

    const [user, created] = await User.findOrCreate({
      where: {
        id,
      },
      defaults: data,
    });
    if (!created) await user.update(data);

    return user.toJSON();
  }

  async login(gmail) {
    return await User.findOne({ where: { gmail } });
  }

  async getUser(id) {
    const user = await User.findByPk(id); 
    return user ? user.toJSON() : null;
  }
}

module.exports = UserRepository;

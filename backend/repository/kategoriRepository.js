const Kategori = require("../models/courseCategory");

class KategoriRepository {
  async save(data) {
    delete data.id;
    const kategori = await Kategori.create(data);
    return kategori.toJSON();
  }

  async findById(id) {
    const kategori = await Kategori.findByPk(id);
    return kategori ? kategori.toJSON() : null;
  }

  async findAll() {
    const kategori = await Kategori.findAll();
    return kategori.map((kategori) => kategori.toJSON());
  }

  async deleteById(id) {
    const kategori = await Kategori.findByPk(id);
    if (!kategori) return null;
    await kategori.destroy();
    return kategori.toJSON();
  }

  async update(id, data) {
    const kategori = await Kategori.findByPk(id);
    if (!kategori) return null;
    await kategori.update(data);
    return kategori.toJSON();
  }
}

module.exports = KategoriRepository;

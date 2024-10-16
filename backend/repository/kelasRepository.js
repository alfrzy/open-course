const Course = require("../models/course");

class KelasRepository {
  async save(data) {
    delete data.id;
    const course = await Course.create(data);
    return course.toJSON();
  }

  async findById(id) {
    const course = await Course.findByPk(id);
    return course ? course.toJSON() : null;
  }

  async findAll() {
    const courses = await Course.findAll();
    return courses.map((course) => course.toJSON());
  }

  async deleteById(id) {
    const course = await Course.findByPk(id);
    if (!course) return null;
    await course.destroy();
    return course.toJSON();
  }

  async update(id, data) {
    const course = await Course.findByPk(id);
    if (!course) return null;
    await course.update(data);
    return course.toJSON();
  }
}

module.exports = KelasRepository;

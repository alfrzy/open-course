const { Router } = require("express");

const response = require("../../cores/response");

const KelasService = require("../../services/kelasService");
const SectionService = require("../../services/sectionService");
const { sequelize } = require("../../config/database");

const addKelas = Router();

addKelas.post("/addKelas", async (req, res) => {
  console.log("Request Body:", req.body);

  const transaction = await sequelize.transaction();

  try {
    const { name, description, course_category_id, tanggal_mulai, duration, price, language, thumbnail, is_publish, lama_kelas_perminggu, jam_perminggu, tag, instructor_id, sections } = req.body;

    const addKelas = await KelasService.addKelas(
      {
        name,
        description,
        course_category_id,
        tanggal_mulai,
        duration,
        price,
        language,
        thumbnail,
        is_publish,
        lama_kelas_perminggu,
        jam_perminggu,
        tag,
        instructor_id,
      },
      { transaction }
    );

    //section lebih dari 1
    if (sections && sections.length > 0) {
      const sectionPromises = sections.map((sectionTitle) => {
        return SectionService.addSection(
          {
            course_id: addKelas.id,
            title: sectionTitle,
          },
          { transaction }
        );
      });
      await Promise.all(sectionPromises);
    }

    // commit
    await transaction.commit();

    response.created(res, "Kelas berhasil ditambahkan", addKelas);
  } catch (error) {
    console.error(error);
    response.error(res, "Gagal menambahkan kelas. " + error.message);
  }
});

module.exports = addKelas;

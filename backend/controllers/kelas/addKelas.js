const { Router } = require("express");

const response = require("../../cores/response");

const KelasService = require("../../services/kelasService");
const SectionService = require("../../services/sectionService");
const { sequelize } = require("../../config/database");
const LearningListService = require("../../services/learningListService");

const addKelas = Router();

addKelas.post("/addKelas/:id?", async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const { id } = req.params;
    const { name, description, course_category_id, tanggal_mulai, duration, price, language, thumbnail, is_publish, lama_kelas_perminggu, jam_perminggu, tag, instructor_id, sections, learningList } = req.body;

    let message;
    let addKelas;

    if (id) {
      addKelas = await KelasService.updateKelas(
        id,
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
      message = "Kelas Berhasil Diupdate";
    } else {
      addKelas = await KelasService.addKelas(
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

      message = "Kelas Berhasil Ditambahkan";
    }

    //section lebih dari 1
    if (sections && sections.length > 0) {
      const sectionPromises = sections.map((section) => {
        if (section.id) {
          // Update section if ID exists
          return SectionService.updateSection(
            section.id,
            {
              course_id: addKelas.id,
              title: section.title,
            },
            { transaction }
          );
        } else {
          // Create new section if no ID
          return SectionService.addSection(
            {
              course_id: addKelas.id,
              title: section.title,
            },
            { transaction }
          );
        }
      });
      await Promise.all(sectionPromises);
    }

    if (learningList && learningList.length > 0) {
      const learningListPromises = learningList.map((learning) => {
        if (learning.id) {
          return LearningListService.updateList(
            learning.id,
            {
              course_id: addKelas.id,
              name: learning.name,
            },
            { transaction }
          );
        } else {
          return LearningListService.addList(
            {
              course_id: addKelas.id,
              name: learning.name,
            },
            { transaction }
          );
        }
      });
      await Promise.all(learningListPromises);
    }

    // commit
    await transaction.commit();

    response.created(res, message, addKelas);
  } catch (error) {
    console.error(error);
    await transaction.rollback(); //rollback error
    response.error(res, "Gagal menambahkan kelas. " + error.message);
  }
});

module.exports = addKelas;

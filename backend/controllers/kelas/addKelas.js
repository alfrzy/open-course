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
    const { sections, learningList, language, duration, price, jam_perminggu, tag, ...kelasData } = req.body;

    if (id) kelasData.id = id;
    kelasData.language = language;
    kelasData.duration = duration;
    kelasData.price = price;
    kelasData.jam_perminggu = jam_perminggu;
    kelasData.tag = tag;

    const savedKelas = await KelasService.saveOrUpdateKelas(kelasData, { transaction });

    if (sections && sections.length > 0) {
      const sectionPromises = sections.map((section) => {
        const sectionData = { course_id: savedKelas.id, title: section.title };
        return section.id ? SectionService.updateSection(section.id, sectionData, { transaction }) : SectionService.addSection(sectionData, { transaction });
      });
      await Promise.all(sectionPromises);
    }

    // Handle Learning List
    if (learningList && learningList.length > 0) {
      const learningListPromises = learningList.map((learning) => {
        const learningData = { course_id: savedKelas.id, name: learning.name };
        return learning.id ? LearningListService.updateList(learning.id, learningData, { transaction }) : LearningListService.addList(learningData, { transaction });
      });
      await Promise.all(learningListPromises);
    }

    // Commit transaction
    await transaction.commit();
    const message = id ? "Kelas Berhasil Diupdate" : "Kelas Berhasil Ditambahkan";
    response.created(res, message, savedKelas);
  } catch (error) {
    console.error(error);
    await transaction.rollback();
    response.error(res, "Gagal menambahkan kelas. " + error.message);
  }
});

module.exports = addKelas;

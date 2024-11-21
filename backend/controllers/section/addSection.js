const { Router } = require("express");

const response = require("../../cores/response");

const SectionService = require("../../services/sectionService");

const addSection = Router();

addSection.post("/kelas/:course_id/section", async (req, res) => {
  try {
    const { course_id } = req.params;
    const { title } = req.body;

    const sectionData = {
      course_id,
      title,
    };

    const newSection = await SectionService.addSection(sectionData);

    return response.success(res, "Section berhasil ditambahkan", newSection);
  } catch (error) {
    console.error("Error adding section:", error);
    return response.error(res, "Gagal menambahkan section", error.message);
  }
});

module.exports = addSection;

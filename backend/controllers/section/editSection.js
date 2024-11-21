const { Router } = require("express");

const response = require("../../cores/response");

const SectionService = require("../../services/sectionService");

const editSection = Router();

editSection.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    const updatedSection = await SectionService.updateSection(id, { title });

    if (!updatedSection) {
      return response.notFound(res, "Section tidak ditemukan");
    }

    return response.success(res, "Section berhasil diupdate", updatedSection);
  } catch (error) {
    console.error("Error updating section:", error);
    return response.error(res, "Gagal mengupdate section", error.message);
  }
});

module.exports = editSection;

const { Router } = require("express");
const response = require("../../cores/response");
const KelasService = require("../../services/kelasService");

const updateKelas = Router();

updateKelas.put("/updateKelas/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, course_category_id, tanggal_mulai, duration, price, language, thumbnail, is_publish, lama_kelas_perminggu, jam_perminggu, tag, instructor_id } = req.body;

    const kelas = await KelasService.getKelasById(id);
    if (!kelas) {
      return response.notFound(res, "Kelas tidak ditemukan");
    }

    const updatedData = {
      name: name || kelas.name,
      description: description || kelas.description,
      course_category_id: course_category_id || kelas.course_category_id,
      tanggal_mulai: tanggal_mulai || kelas.tanggal_mulai,
      duration: duration || kelas.duration,
      price: price || kelas.price,
      language: language || kelas.language,
      thumbnail: thumbnail || kelas.thumbnail,
      //boolean
      is_publish: is_publish !== undefined ? is_publish : kelas.is_publish,
      lama_kelas_perminggu: lama_kelas_perminggu || kelas.lama_kelas_perminggu,
      jam_perminggu: jam_perminggu || kelas.jam_perminggu,
      tag: tag || kelas.tag,
      instructor_id: instructor_id || kelas.instructor_id,
    };

    const updatedKelas = await KelasService.updateKelas(id, updatedData);

    return response.success(res, "Kelas berhasil diupdate", updatedKelas);
  } catch (error) {
    console.error("Error updating class:", error);
    return response.error(res, "Gagal mengupdate kelas", error.message);
  }
});

module.exports = updateKelas;

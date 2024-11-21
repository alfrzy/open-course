const { Router } = require("express");
const response = require("../../cores/response");
const KelasService = require("../../services/kelasService");
const SectionService = require("../../services/sectionService");
const LearningListService = require("../../services/learningListService");
const UserService = require("../../services/userService");
const kategoriService = require("../../services/kategoriService");

const getDetailKelas = Router();

getDetailKelas.get("/detailKelas/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const kelas = await KelasService.getKelasById(id);

    if (!kelas) {
      return response.error(res, `Kelas dengan ID ${id} tidak ditemukan.`, 404);
    }

    const sections = await SectionService.getSectionsByCourseId(id);
    const learningList = await LearningListService.getListByCourseId(id);

    const category = kelas.course_category_id ? await kategoriService.getKategoriById(kelas.course_category_id) : null;

    const instructor = kelas.instructor_id ? await UserService.getUserById(kelas.instructor_id) : null;

    const kelasDetail = {
      ...kelas,
      instructor: instructor
        ? {
            name: instructor.username || "Nama tidak tersedia",
            email: instructor.gmail || "Email tidak tersedia",
          }
        : { name: "Tidak ada dosen", email: "Tidak ada email" },
      category_name: category ? category.name : "Kategori tidak tersedia",
      sections,
      learningList,
    };

    // Respond with the class details
    response.success(res, "Berhasil mendapatkan detail kelas", kelasDetail);
  } catch (error) {
    console.error(error);
    response.error(res, "Gagal mendapatkan detail kelas. " + error.message);
  }
});

module.exports = getDetailKelas;

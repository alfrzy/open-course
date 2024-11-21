const { Router } = require("express");
const response = require("../../cores/response");
const KelasService = require("../../services/kelasService");
const SectionService = require("../../services/sectionService");
const LearningListService = require("../../services/learningListService");
const UserService = require("../../services/userService");

const getAllKelas = Router();

getAllKelas.get("/getAllKelas", async (req, res) => {
  try {
    const allKelas = await KelasService.getAllKelas();

    const kelasWithDetails = await Promise.all(
      allKelas.map(async (kelas) => {
        const sections = await SectionService.getSectionsByCourseId(kelas.id);
        const learningList = await LearningListService.getListByCourseId(kelas.id);
        const instructor = kelas.instructor_id ? await UserService.getUserById(kelas.instructor_id) : null;
        return {
          ...kelas,
          instructor: instructor ? instructor.username : "tidak ada dosen",
          sections,
          learningList,
        };
      })
    );

    response.success(res, "Berhasil mendapatkan semua data kelas", kelasWithDetails);
  } catch (error) {
    console.error(error);
    response.error(res, "Gagal mendapatkan data kelas. " + error.message);
  }
});

module.exports = getAllKelas;

const KelasRepository = require("../repository/kelasRepository");

const kelasRepo = new KelasRepository();

// Add class
// exports.addKelas = async (data) => {
//   try {
//     const newKelas = await kelasRepo.save(data);
//     return newKelas;
//   } catch (error) {
//     console.error("Error adding class:", error);
//     throw new Error("Failed to add class");
//   }
// };

exports.saveOrUpdateKelas = async (data) => {
  try {
    if (!data.id) delete data.id;

    const kelas = await kelasRepo.createOrUpdate(data);
    return kelas;
  } catch (error) {
    console.error("Error saving or updating class:", error);
    throw new Error("Failed to save or update class");
  }
};

// Get all classes
exports.getAllKelas = async () => {
  try {
    const kelasList = await kelasRepo.findAll();
    return kelasList;
  } catch (error) {
    console.error("Error fetching all classes:", error);
    throw new Error("Failed to fetch classes");
  }
};

// Get class by ID
exports.getKelasById = async (id) => {
  try {
    const kelas = await kelasRepo.findById(id);
    if (!kelas) {
      return null;
    }
    return kelas;
  } catch (error) {
    console.error("Error fetching class by id:", error);
    throw new Error("Failed to fetch class");
  }
};

// Update class
exports.updateKelas = async (id, data) => {
  try {
    const kelas = await kelasRepo.update(id, data);
    if (!kelas) return null;
    return kelas;
  } catch (error) {
    console.error("Error updating class:", error);
    throw new Error("Failed to update class");
  }
};

// Delete class
exports.deleteKelas = async (id) => {
  try {
    const kelas = await kelasRepo.findById(id);
    if (!kelas) return null;

    await kelasRepo.deleteById(id);
    return true;
  } catch (error) {
    console.error("Error deleting class:", error);
    throw new Error("Failed to delete class");
  }
};

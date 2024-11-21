const KategoriRepository = require("../repository/kategoriRepository");

const kategoriRepo = new KategoriRepository();

// Add class
exports.addKelas = async (data) => {
  try {
    const newKaterori = await kategoriRepo.save(data);
    return newKaterori;
  } catch (error) {
    console.error("Error adding class:", error);
    throw new Error("Failed to add class");
  }
};

// Get all classes
exports.getAllKategori = async () => {
  try {
    const kategoriList = await kategoriRepo.findAll();
    return kategoriList;
  } catch (error) {
    console.error("Error fetching all classes:", error);
    throw new Error("Failed to fetch classes");
  }
};

// Get class by ID
exports.getKategoriById = async (id) => {
  try {
    const kategori = await kategoriRepo.findById(id);
    if (!kategori) {
      return null;
    }
    return kategori;
  } catch (error) {
    console.error("Error fetching class by id:", error);
    throw new Error("Failed to fetch class");
  }
};

// Update class
exports.updateKategori = async (id, data) => {
  try {
    const kategori = await kategoriRepo.findById(id);
    if (!kategori) return null;

    const updatedKategori = await kategoriRepo.update(id, data);
    return updatedKategori;
  } catch (error) {
    console.error("Error updating class:", error);
    throw new Error("Failed to update class");
  }
};

// Delete class
exports.deleteKelas = async (id) => {
  try {
    const kategori = await kategoriRepo.findById(id);
    if (!kategori) return null;

    await kategoriRepo.deleteById(id);
    return true;
  } catch (error) {
    console.error("Error deleting class:", error);
    throw new Error("Failed to delete class");
  }
};

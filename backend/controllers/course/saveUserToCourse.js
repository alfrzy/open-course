// controllers/courseController.js
const { Router } = require("express");
const { error, success } = require("../../cores/response");
const courseService = require("../../services/courseService");

const saveUserToCourse = Router();

saveUserToCourse.post("/:courseId/add-member", async (req, res) => {
  const { userId } = req.body;
  const { courseId } = req.params;

  console.log("Received courseId:", courseId); // Log courseId
  console.log("Received userId:", userId); // Log userId

  try {
    const result = await courseService.addMember(courseId, userId);
    return success(res, "Member berhasil ditambahkan ke course.", result);
  } catch (err) {
    console.error("Error menambahkan member:", err);
    return error(res, "Error menambahkan member", err.message);
  }
});

module.exports = saveUserToCourse;
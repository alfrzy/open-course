// routes/post.js
const { Router } = require("express");
const userCourseService = require("../../services/userCourseService");
const { created, error } = require("../../cores/response");

const post = Router();

// Endpoint POST untuk membuat user course baru
post.post("/save", async (req, res) => {
  const { course_id, user_id, is_finish, enrollment_date, due_date } = req.body;

  try {
    const newUserCourse = await userCourseService.createUserCourse({
      course_id,
      user_id,
      is_finish,
      enrollment_date,
      due_date,
    });

    return created(res, "User course enrollment created successfully", newUserCourse);
  } catch (err) {
    console.error("Failed to create user course enrollment:", err);
    return error(res, "Failed to create user course enrollment: " + err.message);
  }
});

module.exports = post;

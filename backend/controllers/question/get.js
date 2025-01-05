const QuestionService = require("../../services/questionService");
const { success, error } = require("../../cores/response");
const { Router } = require("express");

const get = Router();

get.get("/:courseId", async (req, res) => {
    try {
      const { courseId } = req.params;
      const questions = await QuestionService.findAllByCourse(courseId);
      return success(res, "Questions retrieved successfully", questions);
    } catch (err) {
      return error(res, "Failed to retrieve questions", err.message);
    }
  });

module.exports = get;
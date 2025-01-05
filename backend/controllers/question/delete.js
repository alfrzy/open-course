const { Router } = require("express");
const QuestionService = require("../../services/questionService");
const { success, error } = require("../../cores/response");

const del = Router();

// Delete a question by ID
del.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedQuestion = await QuestionService.delete(id);
    if (!deletedQuestion) return error(res, "Question not found");
    return success(res, "Question deleted successfully", deletedQuestion);
  } catch (err) {
    return error(res, "Failed to delete question", err.message);
  }
});

module.exports = del;
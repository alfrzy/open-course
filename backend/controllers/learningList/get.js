const { Router } = require("express");
const LearningListService = require("../../services/learningListService");
const { success, error } = require("../../cores/response");

const learningListController = Router();

// GET all learning lists
learningListController.get("/", async (req, res) => {
  try {
    const allLearningLists = await LearningListService.findAll();

    return success(res, "All learning lists retrieved successfully", allLearningLists);
  } catch (err) {
    return error(
      res,
      "An error occurred while fetching all learning lists: " + err.message
    );
  }
});

module.exports = learningListController;

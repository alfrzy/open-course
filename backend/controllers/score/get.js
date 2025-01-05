const ScoreService = require("../../services/scoreService");
const { success, error } = require("../../cores/response");
const { Router } = require("express");

const get = Router();

get.get("/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const scores = await ScoreService.findAllByUser(userId);
      return success(res, "Score retrieved successfully", scores);
    } catch (err) {
      return error(res, "Failed to retrieve scores", err.message);
    }
  });

module.exports = get;
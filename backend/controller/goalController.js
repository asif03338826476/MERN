const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text field");
  }
  res.status(200).send(req.body.text);
});

const updateGoals = asyncHandler(async (req, res) => {
  try {
    res.status(200).json({ message: `Goal at ${req.params.id} updated` });
  } catch {
    res.status(500).send("something vich");
  }
});
const deleteGoals = asyncHandler(async (req, res) => {
  try {
    res.status(200).json({ message: `Goal at ${req.params.id} deleted` });
  } catch {
    res.status(500).send("something vich");
  }
});

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };

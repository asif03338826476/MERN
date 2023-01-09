const asyncHandler = require("express-async-handler");
const goalModel = require("../model/goalModel");
const getGoals = asyncHandler(async (req, res) => {
  const goals = await goalModel.find();
  res.status(200).json(goals);
});

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text field");
  }
  const goal = await goalModel.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
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

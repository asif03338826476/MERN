const getGoals = (req, res) => {
  try {
    res.status(200).json({ message: "Get Goals" });
  } catch {
    res.status(500).send("something vich");
  }
};
const setGoals = (req, res) => {
  try {
    res.status(200).json({ message: "Set Goals" });
  } catch {
    res.status(500).send("something vich");
  }
};
const updateGoals = (req, res) => {
  try {
    res.status(200).json({ message: `Goal at ${req.params.id} updated` });
  } catch {
    res.status(500).send("something vich");
  }
};
const deleteGoals = (req, res) => {
  try {
    res.status(200).json({ message: `Goal at ${req.params.id} deleted` });
  } catch {
    res.status(500).send("something vich");
  }
};

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };

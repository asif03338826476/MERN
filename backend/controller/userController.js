const getUser = (req, res) => {
  try {
    res.status(200).json({ message: "User Get" });
  } catch {
    res.status(500).json("user vich");
  }
};

module.exports = { getUser };

const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add text valuse"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);

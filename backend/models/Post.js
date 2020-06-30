const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      trim: true,
      required: [true, "Please add a title"],
    },
    videoUrl: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", PostSchema);

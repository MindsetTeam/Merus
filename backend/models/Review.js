const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, "Please add a rating between 1 and 5"],
    },
    toUser: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

ReviewSchema.index({ toUser: 1, user: 1 }, { unique: true });

ReviewSchema.statics.getAverageRating = async function (toUserId) {
  const result = await this.aggregate([
    {
      $match: {
        toUser: toUserId,
      },
    },
    {
      $group: {
        _id: "$toUser",
        averageRating: { $avg: "$rating" },
      },
    },
  ]);
  await this.model("User").findByIdAndUpdate(toUserId, {
    averageRate: result[0].averageRating,
  });
};

ReviewSchema.statics.getReviewCount = async function (toUserId) {
  const result = await this.aggregate([
    { $match: { toUser: toUserId } },
    { $count: "reviewCount" },
  ]);
  await this.model("User").findByIdAndUpdate(toUserId, {
    reviewCount: result[0].reviewCount,
  });
};

ReviewSchema.pre("remove", function () {
  this.constructor.getAverageRating(this.toUser);
  this.constructor.getReviewCount(this.toUser);
});
ReviewSchema.post("save", function () {
  this.constructor.getAverageRating(this.toUser);
  this.constructor.getReviewCount(this.toUser);
});

module.exports = mongoose.model("Review", ReviewSchema);

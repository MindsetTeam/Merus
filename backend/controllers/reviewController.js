const Review = require("../models/Review");

const asyncHandler = require("../utils/asyncHandler");
const ErrorResponse = require("../utils/errorResponse");

module.exports = {
  getReviews: asyncHandler(async (req, res, next) => {
    let reviews = [];
    let totalCount = 0;
    if (req.query.userId) {
      let limit = +req.query.sort || 10;
      let page = +req.query.page || 1;
      let sort = req.query.sort || "-createAt";
      let queryTotalCount = Review.countDocuments({ toUser: req.query.userId });
      let queryReviews = Review.find({ toUser: req.params.userId })
        .skip((page - 1) * limit)
        .limit(limit)
        .sort(sort);
      [totalCount, reviews] = await Promise.all([
        queryTotalCount,
        queryReviews,
      ]);
    }
    res.status(200).json({
      success: true,
      msg: "Get all reviews",
      totalCount,
      data: reviews,
    });
  }),
  getReview: asyncHandler(async (req, res, next) => {
    const reviewId = req.params.id;
    const review = await Review.findById(reviewId);
    if (!review) {
      throw new ErrorResponse("review id " + reviewId + " not found", 404);
    }
    res.status(200).json({
      success: true,
      msg: "Get Single reviews",
      data: review,
    });
  }),
  updateReview: asyncHandler(async (req, res, next) => {
    const reviewId = req.params.id;
    const review = await Review.findByIdAndUpdate(reviewId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!review) {
      throw new ErrorResponse("review id " + reviewId + " not found", 404);
    }
    res.status(200).json({
      success: true,
      msg: `Review id ${req.params.id} updated`,
    });
  }),
  deleteReview: asyncHandler(async (req, res, next) => {
    let reviewId = req.params.id;
    const review = await Review.findOne(reviewId);
    if (!review) {
      throw new ErrorResponse("review id " + reviewId + " not found", 404);
    }
    await review.remove();
    res.status(200).json({
      success: true,
      msg: `Review id ${req.params.id} deleted`,
    });
  }),
  createReview: asyncHandler(async (req, res, next) => {
    let review;
    if (req.params.userId) {
      review = await Review.create({ ...req.query, toUser: req.params.userId });
    }
    res.status(200).json({
      success: true,
      msg: "Review created",
      data: review,
    });
  }),
};

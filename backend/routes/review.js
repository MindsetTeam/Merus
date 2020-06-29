const express = require("express");

const {
  createReview,
  getReviews,
  getReview,
  deleteReview,
  updateReview,
} = require("../controllers/reviewController");

const router = express.Router();

router.route("/").post(createReview).get(getReviews);
router.route("/:id").get(getReview).put(updateReview).delete(deleteReview);

module.exports = router;

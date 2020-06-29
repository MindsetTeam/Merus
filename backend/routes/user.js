const express = require("express");

const {
  createUser,
  getUsers,
  getUser,
  updateUser,
} = require("../controllers/userController");
const reviewRouter = require("./review");
const postRouter = require("./post");

const router = express.Router({ mergeParams: true });

router.use("/:userId/reviews", reviewRouter);
router.use("/:userId/posts", postRouter);

router.route("/").post(createUser).get(getUsers);
router.route("/:id").get(getUser).put(updateUser);

module.exports = router;

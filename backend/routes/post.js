const express = require("express");

const {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

const router = express.Router();

router.route("/").post(createPost).get(getPosts);
router.route("/:id").get(getPost).put(updatePost).delete(deletePost);

module.exports = router;

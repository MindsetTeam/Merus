const Post = require("../models/Post");

const asyncHandler = require("../utils/asyncHandler");
const ErrorResponse = require("../utils/errorResponse");

module.exports = {
  getPosts: asyncHandler(async (req, res, next) => {
    let posts;
    if (req.query.userId) {
      let sort = req.query.sort || "-createAt";
      posts = await Post.find({ toUser: req.params.userId }).sort(sort);
    }
    res.status(200).json({
      success: true,
      msg: "Get all posts",
      data: posts,
    });
  }),
  getPost: asyncHandler(async (req, res, next) => {
    const PostId = req.params.id;
    const Post = await Post.findById(PostId);
    if (!Post) {
      throw new ErrorResponse("Post id " + PostId + " not found", 404);
    }
    res.status(200).json({
      success: true,
      msg: "Get Single Posts",
      data: Post,
    });
  }),
  updatePost: asyncHandler(async (req, res, next) => {
    const PostId = req.params.id;
    const Post = await Post.findByIdAndUpdate(PostId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!Post) {
      throw new ErrorResponse("Post id " + PostId + " not found", 404);
    }
    res.status(200).json({
      success: true,
      msg: `Post id ${req.params.id} updated`,
    });
  }),
  deletePost: asyncHandler(async (req, res, next) => {
    let postId = req.params.id;
    const post = await Post.findOne(postId);
    if (!post) {
      throw new ErrorResponse("Post id " + postId + " not found", 404);
    }
    await post.remove();
    res.status(200).json({
      success: true,
      msg: `Post id ${req.params.id} deleted`,
    });
  }),
  createPost: asyncHandler(async (req, res, next) => {
    let post;
    if (req.params.userId) {
      post = await Post.create({ ...req.query, toUser: req.params.userId });
    }
    res.status(200).json({
      success: true,
      msg: "Post created",
      data: post,
    });
  }),
};

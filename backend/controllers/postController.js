const Post = require("../models/Post");

const asyncHandler = require("../utils/asyncHandler");
const ErrorResponse = require("../utils/errorResponse");

module.exports = {
  getPosts: asyncHandler(async (req, res, next) => {
    let posts;
    if (req.params.userId) {
      let sort = req.query.sort || "-createAt";
      posts = await Post.find({ user: req.params.userId }).sort(sort).select('-user');
    }
    res.status(200).json({
      success: true,
      msg: "Get all posts",
      data: posts,
    });
  }),
  getPost: asyncHandler(async (req, res, next) => {
    const postId = req.params.id;
    const post = await Post.findById(postId).populate('user');
    if (!post) {
      throw new ErrorResponse("Post id " + postId + " not found", 404);
    }
    res.status(200).json({
      success: true,
      msg: "Get Single Posts",
      data: post,
    });
  }),
  updatePost: asyncHandler(async (req, res, next) => {
    const postId = req.params.id;
    const post = await Post.findByIdAndUpdate(postId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!post) {
      throw new ErrorResponse("Post id " + postId + " not found", 404);
    }
    res.status(200).json({
      success: true,
      msg: `Post id ${req.params.id} updated`,
      data: post
    });
  }),
  deletePost: asyncHandler(async (req, res, next) => {
    let postId = req.params.id;
    const post = await Post.findById(postId);
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
    if (req.params.userId) {
      let post = await Post.create({ ...req.body, user: req.params.userId });
      res.status(200).json({
        success: true,
        msg: "Post created",
        data: post,
      });
    } else {
      throw new ErrorResponse("Please provide User Id", 400);
    }
  }),
};

const User = require("../models/User");

const asyncHandler = require("../utils/asyncHandler");
const ErrorResponse = require("../utils/errorResponse");

module.exports = {
  // only user with skill
  getUsers: asyncHandler(async (req, res, next) => {
    const fieldForRemove = ["sort", "include", "page", "limit", "search"];
    const reqQuery = { ...req.query };
    fieldForRemove.forEach((v) => delete reqQuery[v]);

    let formateQuery = JSON.parse(
      JSON.stringify(reqQuery).replace(/\b(gt|gte|lt|lte)\b/g, (v) => "$" + v)
    );
    if (req.query.skill) {
      const splitSkill = req.query.skill.split(",");
      if (splitSkill.length > 1) {
        formateQuery.skill = {
          $in: splitSkill.map((v) => v.toLowerCase()),
        };
      } else {
        formateQuery.skill = splitSkill[0].toLowerCase();
      }
    }
    if (req.query.search) {
      formateQuery = { $text: { $search: req.query.search }, ...formateQuery };
    }

    // remove normal user without skill
    formateQuery = {
      skill: {
        $ne: [],
      },
      ...formateQuery,
    };
    let totalDocuments = User.countDocuments(formateQuery);
    let computeQuery = User.find(formateQuery);
    if (req.query.sort) {
      computeQuery.sort(req.query.sort.split(",").join(" "));
    } else {
      computeQuery.sort("-createdAt");
    }
    if (req.query.include) {
      let includeArray = req.query.include.split(",");
      if (
        includeArray.indexOf("posts") >= 0 ||
        (req.query.include.includes("-") &&
          includeArray.indexOf("-posts") == -1)
      )
        computeQuery.populate("posts");
      computeQuery.select(req.query.include.split(",").join(" "));
    } else {
      computeQuery.populate("posts");
    }
    let limit = +req.query.sort || 20;
    let page = +req.query.page || 1;
    computeQuery.skip((page - 1) * limit).limit(limit);
    const [users, totalCount] = await Promise.all([
      computeQuery,
      totalDocuments,
    ]);
    res.status(200).json({
      success: true,
      msg: "Get all users",
      totalCount,
      data: users,
    });
  }),
  getUser: asyncHandler(async (req, res, next) => {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      throw new ErrorResponse("User id " + userId + " not found", 404);
    }
    res.status(200).json({
      success: true,
      msg: "Get Single Users",
      data: user,
    });
  }),
  updateUser: asyncHandler(async (req, res, next) => {
    if (req.body.skill) {
      req.body.skill = JSON.parse(req.body.skill.replace(/'/g, '"'));
    }
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      throw new ErrorResponse("User do not existed", 404);
    }
    res.status(200).json({
      success: true,
      msg: `User id ${req.params.id} updated`,
      data: user,
    });
  }),
  createUser: asyncHandler(async (req, res, next) => {
    if (req.body.skill) {
      req.body.skill = JSON.parse(req.body.skill.replace(/'/g, '"'));
    }
    const user = await User.create(req.body);
    res.status(200).json({
      success: true,
      msg: "User created",
      data: user,
    });
  }),
  deleteUser: asyncHandler(async (req, res, next) => {
    let userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      throw new ErrorResponse("User id " + userId + " not found", 404);
    }
    await user.remove();
    res.status(200).json({
      success: true,
      msg: `User id ${req.params.id} deleted`,
    });
  }),
};

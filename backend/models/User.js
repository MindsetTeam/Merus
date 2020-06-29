const mongoose = require("mongoose");
const slugify = require("slugify");

const ErrorResponse = require("../utils/errorResponse");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, "Please a username"],
    },
    description: String,
    skill: [
      {
        type: String,
        enum: ["singer", "dancer", "magician", "influencer"],
      },
    ],
    slug: {
      type: String,
      unique: [true, "Username already existed"],
    },
    email: {
      type: String,
      required: [true, "Please add email"],
      unique: [true, "Email already existed"],
    },
    coverBackground: {
      type: String,
      default: "http://lorempixel.com/640/480/nature",
    },
    imageUrl: {
      type: String,
      default:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ruehldesign/128.jpg",
    },
    location: String,
    price: Number,
    averageRate: Number,
    reviewCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

UserSchema.index(
  {
    username: "text",
    skill: "text",
    description: "text",
  },
  {
    weights: {
      username: 5,
      skill: 4,
      description: 3,
    },
    name: "ProductsTextIndex",
  }
);

UserSchema.path("skill").validate(function (val) {
  if (val.length > 2) throw new ErrorResponse("Skill must less than 2");
});

UserSchema.pre("save", function (next) {
  this.slug = slugify(this.username, { lower: true });
  next();
});

UserSchema.post("remove", async function (next) {
  let queryDeletePost = this.model("Post").deleteMany({ user: this._id });
  let queryDeleteReview = this.model("Review").deleteMany({ toUser: this._id });
  await Promise.all([queryDeletePost, queryDeleteReview]);
  next();
});

module.exports = mongoose.model("User", UserSchema);

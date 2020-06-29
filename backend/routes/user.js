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

// fetch('http://localhost:5000/api/v1/users/:id', {
//   method: 'POST',
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify({
//       imageUrl: 'http:/asdfasd'
//     })
// });

// fetch('http://localhost:5000/api/v1/users/:userId/posts?sort=');

// //GET popular talent;
// fetch('http://localhost:5000/api/v1/users?sort=reviewCount&limit=6');
// //GET recent created user;
// fetch('http://localhost:5000/api/v1/users?limit=6');
// // GET search queyr;
// fetch('http://localhost:5000/api/v1/users?search=chumsrun');
// // GET select specific skill;
// fetch('http://localhost:5000/api/v1/users?skill=dancer');

// //POST create user;
// fetch('http://localhost:5000/api/v1/users', {
//   method: 'POST',
//   headers: {
//     'Content-type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'cheat',
//     email: 'cheat@gmail.com'
//   })
// });
// //POST add review;
// fetch('http://localhost:5000/api/v1/users/:userId/', {
//   method: 'POST',
//   headers: {
//     'Content-type': 'application/json'
//   },
//   body: JSON.stringify({
//     rating: 'cheat',
//     text: 'cheat@gmail.com'
//   })
// });



// // created post
// fetch('http://localhost:5000/api/v1/users/:userId/posts', {
//   method: 'POST',
//   headers: {
//     'Content-type': 'application/json'
//   },
//   body: JSON.stringify({
//     title: 'adfasdfasd'
//   })
// });

// // res.status(200).json({
// //   success: true,
// //   msg: "Post created",
// //   data: post,
// // });



router.route("/").post(createUser).get(getUsers);
// http://localhost:5000/api/v1/:id
router.route("/:id").get(getUser).put(updateUser);

module.exports = router;

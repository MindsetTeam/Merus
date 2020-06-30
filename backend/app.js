const express = require("express");
const dotenv = require("dotenv");
const chalk = require("chalk");
const morgan = require("morgan");
const cors = require('cors');

const connectionDB = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");

const userRoutes = require("./routes/user");
const reviewRoutes = require("./routes/review");
const postRoutes = require("./routes/post");

dotenv.config({
  path: "./config/config.env",
});

const app = express();

app.use(cors());
app.use(express.json());

connectionDB();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/reviews", reviewRoutes);
app.use("/api/v1/posts", postRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(chalk.bgCyan.black("server start at http://localhost:" + PORT))
);

process.on("unhandledRejection", (err) => {
  console.error(err);
  process.exit(1);
});

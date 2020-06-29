const chalk = require("chalk");

const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  console.error(err);
  console.log(chalk.red(err.name));
  let errors;
  if (err.name === "CastError") {
    err = new ErrorResponse("Resource not found " + err.value, 404);
  } else if (err.name === "ValidationError") {
    errors = Object.values(err.errors).map((val) => {
      return {
        message: val.message,
        path: val.path,
        kind: val.kind,
      };
    });
    err = new ErrorResponse("Validation Failed", 422);
  }

  if (err.code == 11000) {
    const errMessageSplit = err.message.split("index:")[1].split(" ");
    console.log(err.message);
    errors = {
      message: "Value already existed",
      path:
        errMessageSplit[1].split("_")[0] == "slug"
          ? "username"
          : errMessageSplit[1],
      kind: "duplication",
    };
    err = new ErrorResponse("Duplication field value entered", 400);
  }

  res.status(err.statusCode || 500).json({
    success: false,
    msg: err.message || "Server Error",
    errors,
  });
};

module.exports = errorHandler;

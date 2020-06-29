const mongoose = require("mongoose");
const chalk = require("chalk");

const connectionDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(chalk.bgGrey("MongoDb Connected at : " + conn.connection.host));
};

module.exports = connectionDB;

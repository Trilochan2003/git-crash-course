const mongoose = require("mongoose");

const mongoURL =
  'mongodb+srv://user:test1234@cluster0.nggbetm.mongodb.net/hotels';

const db = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("Connection Sucessful to DB");
  } catch (error) {
    console.log("Database connection Failed");
    console.log(error);
    process.exit(0);
    console.log("aaaaa");
  }
};

module.exports = db;
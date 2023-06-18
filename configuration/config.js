const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected Successfully");
  } catch (err) {
    console.log("Error in Database");
  }
};

module.exports = dbConnect;

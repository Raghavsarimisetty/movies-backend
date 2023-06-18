const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  movieName: String,
  rating: Number,
});

const movieModel = mongoose.model("movies", movieSchema);
exports.movieModel = movieModel;

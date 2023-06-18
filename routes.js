const express = require("express");
const router = express.Router();

const { getMovies } = require("./controllers");

router.get("/getMovies", getMovies);

module.exports = router;

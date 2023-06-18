const { movieModel } = require("./models");

const getMovies = async (req, res) => {
  try {
    const response = await movieModel.find({});
    res.status(200).json({ sucsess: true, data: response });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: err,
    });
  }
};

exports.getMovies = getMovies;

const path = require("path");

const index = (req, res) => {
  res.render(path.resolve(__dirname, "../Views/index.ejs"));
};

const private = (req, res) => {
  res.render(path.resolve(__dirname, "../Views/index.ejs"));
};

module.exports = {
  index: index,
  private: private,
};

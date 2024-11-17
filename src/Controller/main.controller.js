const path = require("path");

const index = (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../private/private.html"));
  console.log(path.resolve(__dirname, "../../private/private.html"));
};
module.exports = {
  index: index,
};

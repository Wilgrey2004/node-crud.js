const queryString = require("querystring");

const index = (req, res) => {
  const query = queryString.stringify(req.query);
  console.log(query);
  fetch("https://fakestoreapi.com/products?" + query)
    .then((res) => res.json())
    .then((json) => res.send(json));
};

const finid = (req, res) => {
  fetch("https://fakestoreapi.com/products/" + req.params.id)
    .then((res) => res.json())
    .then((json) => res.json(json));
};

module.exports = {
  index: index,
  finid: finid,
};

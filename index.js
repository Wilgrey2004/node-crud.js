require("dotenv").config();

const path = require("path");

const express = require("express");

const app = express();

const mainRouter = require("./src/routes/main.router.js");

app.use(express.static(path.join(__dirname, "public")));

//app.use(express.static(path.join(__dirname, "Views")));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "src/Views"));

app.use(mainRouter);

app.use(require("./src/routes/productos.router.js"));

const port = process.env.PORT || 3001;

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port} !`)
);

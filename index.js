require("dotenv").config();

const path = require("path");

const express = require("express");

const layout = require("express-ejs-layouts");

const app = express();

app.use(express.urlencoded({ extended: false }));

const mainRouter = require("./src/routes/main.router.js");

app.use(express.static(path.join(__dirname, "public")));

//app.use(express.static(path.join(__dirname, "Views")));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "src/Views"));

app.use(layout);
app.set("layout", "layouts/layout");

app.use(mainRouter);

app.use(require("./src/routes/productos.router.js"));

app.use(require("./src/routes/contacto.route.js"));

const port = process.env.PORT || 3001;

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port} !`)
);

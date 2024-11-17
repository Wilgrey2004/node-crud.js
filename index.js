require("dotenv").config();

const express = require("express");

const app = express();

const mainRouter = require("./src/routes/productos.router.js");

app.use(mainRouter);

app.use(require("./src/routes/productos.router.js"));

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const express = require("express");

const router = express.Router();

const controller = require("../Controller/productos.controller.js");

router.get("/productos", controller.index);

router.get("/productos/:id", controller.show);

module.exports = router;

const express = require("express");

const router = express.Router();

const controller = require("../Controller/productos.controller.js");

router.get("/", controller.index);

router.get("/:id", controller.finid);

module.exports = router;

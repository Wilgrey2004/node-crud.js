const express = require("express");

const router = express.Router();

const controller = require("../Controller/main.controller.js");
router.get("/", controller.index);

module.exports = router;

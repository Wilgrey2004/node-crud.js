const express = require("express");

const router = express.Router();

const controller = require("../Controller/main.controller.js");
router.get("/", controller.index);

router.get("/private", controller.private);

module.exports = router;

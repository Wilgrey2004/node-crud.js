const express = require("express");

const router = express.Router();

const controller = require("../Controller/contacto.controller.js");

router.get("/contacto", controller.index);
router.post("/contacto", controller.submit);

module.exports = router;

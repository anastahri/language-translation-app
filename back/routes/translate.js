"use strict";

var express = require("express");
var translateController = require("./../controllers/translateController");

var router = express.Router();

router.post("/translate", translateController.translate);

module.exports = router;

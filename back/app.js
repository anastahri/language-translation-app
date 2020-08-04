"use strict";

var express = require("express");
var config = require("./config");
var cors = require("cors");
var translateRouter = require("./routes/translate");

var app = express();

app.use(cors());
app.use(express.json());

app.use("/api", translateRouter);

app.listen(config.PORT, () => {
  console.log(`App started on port :  ${config.PORT}`);
});

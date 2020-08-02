"use strict";

const express = require("express");
const config = require("./config");
var cors = require("cors");
const translateRouter = require("./routes/translate");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", translateRouter);

app.listen(config.PORT, () => {
  console.log(`App started on port :  ${config.PORT}`);
});

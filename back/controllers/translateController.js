"use strict";

var translateService = require("../services/translateService");

exports.translate = async function (req, res) {
  const source = req.body.source;
  const target = req.body.target;
  const text = req.body.text;

  if (!source || !target || !text) {
    const missingFields = [
      !source ? "source" : undefined,
      !target ? "target" : undefined,
      !text ? "text" : undefined,
    ]
      .filter((elt) => elt)
      .join(" and ");

    return res.status(400).json({
      status: 400,
      message: `Bad request. Body parameter(s): ${missingFields} missing`,
    });
  }

  let translation = "";

  try {
    translation = await translateService.translate(source, target, text);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.json({ source, target, translation });
};

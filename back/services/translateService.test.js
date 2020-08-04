/**
 * @jest-environment node
 */

const translateService = require("./translateService");

test("Translation service is working", function () {
  expect.assertions(1);
  return translateService
    .translate("en", "fr", "hello")
    .then(function (result) {
      expect(result).toMatch(/bonjour/i);
    });
});

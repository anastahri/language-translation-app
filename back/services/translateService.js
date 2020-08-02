"use strict";

const axios = require("axios");
const qs = require("qs");

/**
 *  Topcoder practice challenge
 *
 *  https://apps.topcoder.com/forums/?module=Thread&threadID=957448&start=0
 *  curl --location --request POST 'https://translate.google.com/translate_a/single?client=at&dt=t&dt=ld&dt=qca&dt=rm&dt=bd&dj=1&hl=%25s&ie=UTF-8&oe=UTF-8&inputm=2&otf=2&iid=1dd3b944-fa62-4b55-b330-74909a99969e&' \
 *  --header 'Content-Type: application/x-www-form-urlencoded' \
 *  --header 'User-Agent: AndroidTranslate/5.3.0.RC02.130475354-53000263 5.1 phone TRANSLATE_OPM5_TEST_1' \
 *  --data-urlencode 'sl=de' \
 *  --data-urlencode 'tl=en' \
 *  --data-urlencode 'q=Hallo'
 */
const translateApi = (source, target, text) => {
  const data = qs.stringify({ sl: source, tl: target, q: text });
  return axios({
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent":
        "AndroidTranslate/5.3.0.RC02.130475354-53000263 5.1 phone TRANSLATE_OPM5_TEST_1",
    },
    url:
      "https://translate.google.com/translate_a/single?client=at&dt=t&dt=ld&dt=qca&dt=rm&dt=bd&dj=1&hl=%25s&ie=UTF-8&oe=UTF-8&inputm=2&otf=2&iid=1dd3b944-fa62-4b55-b330-74909a99969e&",
    data,
  })
    .then((response) => response.data)
    .catch(function (error) {
      if (error.response) {
        console.log("Error response status", error.response.status);
        console.log("Error response data", error.response.data);
        throw new Error(
          `Request failed with status: ${error.response.status}. Message: ${error.response.data}`
        );
      } else if (error.request) {
        console.log("Error request", error.request);
        throw new Error(`Request failed: ${error.request}`);
      } else {
        console.log("Error message", error.message);
        throw new Error(`Request failed: ${error.message}`);
      }
    });
};

exports.translate = async (source, target, text) =>
  await translateApi(source, target, text).then((data) => {
    let trans = "";
    if (data && Array.isArray(data.sentences) && data.sentences[0])
      trans = data.sentences[0].trans;
    return trans;
  });

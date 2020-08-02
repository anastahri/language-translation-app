import React, { useState, useEffect, useCallback } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SourceTargetBar from "./SourceTargetBar";
import translateApi from "./../api/translateApi";
import debounce from "lodash/debounce";

const TranslateForm = () => {
  const [langState, setLangState] = useState({
    source: "en",
    target: "fr",
  });

  const [originalText, setOriginalText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleLangChange = (event) => {
    const name = event.target.name;
    setLangState({
      ...langState,
      [name]: event.target.value,
    });
  };

  const handleTextChange = (event) => {
    setOriginalText(event.target.value);
  };

  const fetchTranslation = (text, langObj, callback) => {
    console.log("fetchTranslation");
    console.log("text", text);
    if (typeof text !== "string" || text.trim().length < 1) {
      return;
    }
    console.log("fetching textState.original", text);
    translateApi(langObj.source, langObj.target, text).then((res) => {
      callback(res.data.translation);
    });
  };

  const debouncedFetchTranslation = useCallback(
    debounce(fetchTranslation, 2000),
    []
  );

  useEffect(() => {
    debouncedFetchTranslation(originalText, langState, setTranslatedText);
  }, [originalText, langState]);

  return (
    <>
      <SourceTargetBar
        onChange={handleLangChange}
        source={langState.source}
        target={langState.target}
      />
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-multiline-static"
            label="Original"
            rows={4}
            variant="outlined"
            onChange={handleTextChange}
            multiline
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-multiline-static"
            label="Translated"
            rows={4}
            variant="outlined"
            multiline
            fullWidth
            value={translatedText}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default TranslateForm;

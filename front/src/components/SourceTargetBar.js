import React from "react";
import Grid from "@material-ui/core/Grid";
import LanguageSelect from "./LanguageSelect";

const SourceTargetBar = ({ onChange, source, target }) => {
  return (
    <Grid container justify="center" spacing={1}>
      <Grid item>
        <LanguageSelect
          onChange={onChange}
          value={source}
          name="source"
          label="Source"
        />
      </Grid>
      <Grid item>
        <LanguageSelect
          onChange={onChange}
          value={target}
          name="target"
          label="Target"
        />
      </Grid>
    </Grid>
  );
};

export default SourceTargetBar;

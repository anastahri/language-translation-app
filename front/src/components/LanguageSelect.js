import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import languages from "./../constants/languages";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    marginBottom: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const LanguageSelect = ({ onChange, value, name, label }) => {
  const classes = useStyles();
  const inputId = `${name}-input`;

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor={inputId}>{label}</InputLabel>
      <Select
        native
        value={value}
        onChange={onChange}
        label={label}
        inputProps={{
          name,
          id: inputId,
        }}
      >
        {languages.map((lang, idx) => (
          <option key={idx} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSelect;

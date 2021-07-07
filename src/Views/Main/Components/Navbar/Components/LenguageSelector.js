import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useTranslation } from "react-i18next";

const WhiteAlien = "#fcfcfc";
const SpaceRed = "#d90429";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(4),
    minWidth: 120,
  },
  // select: {
  //   color: WhiteAlien,
  //   borderColor: WhiteAlien,
  //   "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
  //     borderColor: WhiteAlien,
  //   },
  //   "& .MuiOutlinedInput-notchedOutline": {
  //     borderColor: "gray",
  //   },
  //   "& .MuiOutlinedInput-root:hover": {
  //     borderColor: "blue",
  //   },
  // },

  inputLabel: {
    color: WhiteAlien,
    "&.MuiFormLabel-root.Mui-focused": {
      color: WhiteAlien,
    },
  },
}));

const StyledSelect = withStyles({
  root: {
    color: WhiteAlien,
    borderColor: WhiteAlien,
    "&&:hover": {
      borderColor: "purple",
    },
    "&&:focus": {
      borderColor: WhiteAlien,
    },
  },
})(Select);


const StyledInput = withStyles({
  root: {
    color: WhiteAlien,
    borderColor: WhiteAlien,
    "&&:hover": {
      borderColor: "purple",
    },
    "&&:focus": {
      borderColor: WhiteAlien,
    },
  },
})(InputLabel);

export default function SimpleSelect() {
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleChange = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <StyledInput
          className={classes.inputLabel}
          id="lenguage-selector-input-label"
        >
          {t("Navbar.select_title")}
        </StyledInput>
        <StyledSelect
          className={classes.select}
          labelId="lenguage-selector-label"
          id="lenguage-selector"
          value={i18n.language}
          onChange={handleChange}
          label={t("Navbar.select_title")}
        >
          <MenuItem value={"es_ES"}>Castellano</MenuItem>
          <MenuItem value={"en_EN"}>English</MenuItem>
        </StyledSelect>
      </FormControl>
    </div>
  );
}

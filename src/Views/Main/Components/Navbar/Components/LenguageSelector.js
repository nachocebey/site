import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useTranslation } from 'react-i18next';

const WhiteAlien = '#fcfcfc';
const SpaceRed = '#d90429';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(4),
    minWidth: 120,
  },
  select: {
    color: WhiteAlien,
    borderColor: WhiteAlien,
    '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: WhiteAlien,
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: "gray",
    },
    ':hover &.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: WhiteAlien,
    },
  },

  inputLabel: {
    color: WhiteAlien,
    '&.MuiFormLabel-root.Mui-focused': {
      color: WhiteAlien,
    },
  },
}));

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
        <InputLabel className={classes.inputLabel} id="lenguage-selector-input-label">
          {t('Navbar.select_title')}
        </InputLabel>
        <Select
          className={classes.select}
          labelId="lenguage-selector-label"
          id="lenguage-selector"
          value={i18n.language}
          onChange={handleChange}
          label={t('Navbar.select_title')}
        >
          <MenuItem value={'es_ES'}>Castellano</MenuItem>
          <MenuItem value={'en_EN'}>English</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

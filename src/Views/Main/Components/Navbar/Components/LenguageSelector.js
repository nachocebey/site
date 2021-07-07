import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

const WhiteAlien = '#fcfcfc';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(4),
    minWidth: 120,
  },
  select: {
    color: WhiteAlien,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  inputLabel: {
    color: WhiteAlien,
    '&.MuiFormLabel-root.Mui-focused': {
      color: WhiteAlien,
    },
  },
}));

const theme = createMuiTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        '& $notchedOutline': {
          borderColor: 'gray',
        },
        '&:hover $notchedOutline': {
          borderColor: WhiteAlien,
        },
        '&$focused $notchedOutline': {
          borderColor: WhiteAlien,
        },
      },
    },
  },
});

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
      <MuiThemeProvider theme={theme}>
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
      </MuiThemeProvider>
    </div>
  );
}

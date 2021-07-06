import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const styles = {
  root: {
    background: "white",
    // background: "#000000",
  },
  select: {
    borderRadius: 4,
    position: "relative",
  },
};

function Navbar(props) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleChange = (event) => {
    changeLanguage(event.target.value);
  };
  const { window, classes } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={trigger}>
      <AppBar className={clsx(classes.root)}>
        <Toolbar>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">
              {t("select_title")}
            </InputLabel>
            <Select
              native
              value={i18n.language}
              onChange={handleChange}
              label={t("select_title")}
              className={clsx(classes.select)}
            >
              <option value={"en_EN"}>English</option>
              <option value={"es_ES"}>Castellano</option>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}

export default withStyles(styles)(Navbar);

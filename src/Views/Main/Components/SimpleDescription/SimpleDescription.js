import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  descriptionContainer: {
    justifyContent: "center",
    paddingTop: "8vh",
    paddingBottom: "8vh",
  },
  descriptionBox: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  body: {
    color: "#adb5bd",
  },
  title: {
    fontSize: "4rem",
  },
}));

function SimpleDescription() {
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={5}
      alignItems="center"
      className={classes.descriptionContainer}
    >
      <Grid item xs={6} className={classes.descriptionBox}>
        <Typography variant="h5" className={classes.title} gutterBottom>
          ¡Hello world!
        </Typography>
        <Typography variant="body1" className={classes.body}gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default SimpleDescription;

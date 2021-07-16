import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ImagesCarousel from "./Components/ImagesCarousel";
import { makeStyles } from "@material-ui/core/styles";
import Dummy1 from "../../../../assets/Images/Dummy1.png";
import Dummy2 from "../../../../assets/Images/Dummy2.png";
import Dummy3 from "../../../../assets/Images/Dummy3.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  body: {
    color: "#adb5bd",
  },
}));

export default function Personal() {
  const classes = useStyles();
  const images = [Dummy1, Dummy2, Dummy3];

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography variant="h1">Basically, me.</Typography>
          <Typography variant="h6" className={classes.body} gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            id sem non lorem cursus varius. Sed a dignissim nulla, et fermentum
            nibh. Aenean ultricies diam dui, quis accumsan ipsum condimentum
            vitae. Proin vitae dolor bibendum, fermentum diam ac, rhoncus est.
            Phasellus consectetur, turpis nec lacinia fermentum, erat libero
            aliquet erat, et aliquet lacus sem nec nulla. Morbi feugiat rhoncus
            dolor, sit amet mollis nisi rutrum ullamcorper. Nam sit amet justo
            ultrices, porta turpis eget, convallis dolor. Phasellus interdum
            malesuada risus sit amet dapibus. Quisque consectetur, tellus ac
            interdum bibendum, magna lorem condimentum ligula, nec egestas velit
            velit non nunc. In ac velit ornare, tempor sem dignissim, ornare
            orci. Nunc ac est eu nulla tincidunt aliquet. Curabitur sollicitudin
            purus mi, a vehicula sapien varius ut.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ImagesCarousel images={images} />
        </Grid>
      </Grid>
    </div>
  );
}

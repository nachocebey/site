import React from 'react';
import Particles from 'react-tsparticles';
import particlesOptions from './particles.json';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  titleFont: {
    fontFamily: 'OceanBrush, serif',
    fontSize: '8vw',
    fontWeight: 'unset',
  },
  titleName: {
    marginBottom: 'unset',
  },
  titleSurname: {
    marginTop: 'unset',
    marginBottom: 'unset',
  },
};

function TitleCanvas(props) {
  const { classes } = props;
  return (
    <Container className="title-container general-height">
      <Grid container className="canvas-container general-height">
        <Grid container>
          <Particles options={particlesOptions} />
        </Grid>
        <Grid container className="general-height" direction="column" justify="center" alignItems="center">
          <h1 className={`${classes.titleName} ${classes.titleFont}`}>Nacho Cebey</h1>
          <h2 className={`${classes.titleSurname} ${classes.titleFont}`}>Honorato</h2>
          <h4 className="">Front-end developer</h4>
        </Grid>
      </Grid>
    </Container>
  );
}

export default withStyles(styles)(TitleCanvas);

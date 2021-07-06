import React from 'react';
import Particles from 'react-tsparticles';
import particlesOptions from './particles.json';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useSpring, animated } from 'react-spring';

import './Styles.css';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  titleFont: {
    fontFamily: 'OceanBrush',
    fontSize: '7vmax',
    fontWeight: 'unset',
  },
  titleName: {
    marginBottom: 'unset',
  },
  titleSurname: {
    marginTop: 'unset',
    marginBottom: 'unset',
  },
  divider: {
    borderBottom: '5px solid red',
    width: '25%',
    minWidth: '200px',
    zIndex: 10,
  },
  titleDescription: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
  },
};

function TitleCanvas(props) {
  const { classes } = props;
  const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const [propss, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 450, friction: 70 } }));

  return (
    <Container className="title-container general-height">
      <Grid container className="canvas-container general-height">
        <Grid container>
          <Particles options={particlesOptions} />
        </Grid>
        <Grid container className="general-height" justify="center">
          <animated.div
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: propss.xys.to(trans) }}
          >
            <Grid container className="general-height" direction="column" justify="center" alignItems="center">
              <h1 className={`${classes.titleName} ${classes.titleFont}`}>Nacho Cebey</h1>
              <h2 className={`${classes.titleSurname} ${classes.titleFont}`}>Honorato</h2>
              <div className={classes.divider} />
              <h3 className={classes.titleDescription}>Front-end developer</h3>
            </Grid>
          </animated.div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default withStyles(styles)(TitleCanvas);

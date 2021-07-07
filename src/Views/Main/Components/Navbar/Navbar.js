import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { withStyles } from '@material-ui/core/styles';
import LenguageSelector from './Components/LenguageSelector';
import clsx from 'clsx';
const styles = {
  root: {
    backgroundColor: 'transparent',
  },
  rightToolbar: {
    marginLeft: 'auto',
    marginRight: -12,
  },
};

function Navbar(props) {
  const { window, classes } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar className={clsx(classes.root)}>
        <Toolbar>
          <section className={classes.rightToolbar}>
            <LenguageSelector />
          </section>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}

export default withStyles(styles)(Navbar);

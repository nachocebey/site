import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import './Styles.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  customizeToolbar: {
    paddingTop: 40,
  },
  title: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  appbarContainer: {
    // background: 'linear-gradient(to top, #000000 0%, #6A040F 200%)',
    backgroundColor: '#000000',
  },
  contactButton: {
    backgroundColor: 'rgb(120, 120, 120)',
    borderRadius: 25,
    marginRight: 10,
    padding: '13px 30px 13px 30px',
    textTransform: 'none',

    '&:hover': {
      backgroundColor: '#fff',
      color: '#000000',
      boxShadow: 'none',
    },
  },
}));

function HeaderAppBar() {
  const classes = useStyles();
  const trigger = useScrollTrigger({ target: window, disableHysteresis: false, threshold: 20 });

  return (
    <div className={classes.root}>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar position="static" className={classes.appbarContainer}>
          <Toolbar className={classes.customizeToolbar}>
            <Grid container justify="flex-end" alignItems="center">
              {/* <Button size="large" variant="contained" className={classes.contactButton}>
                Contact
              </Button> */}

              <a href="/#" className="rainbow-button" alt="Contact">
                {null}
              </a>
            </Grid>
          </Toolbar>
        </AppBar>
      </Slide>
    </div>
  );
}

export default HeaderAppBar;

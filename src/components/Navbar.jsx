import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
  navbar: {
    flexGrow: 1,
    position: 'fixed',
    width: '100%',
    zIndex: 10,
    margin: '0 -8px',
  },
  appBar:{
    flexGrow: 1,
    background: '#000',
    cursor: 'pointer'
  },
  toolBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    flexGrow: 1,
    background: '#000',
    color: '#FFF',
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
  },
  menuIcon: {
    cursor: 'pointer',
    '&:hover': {
      color: 'red',
    },
  },
}));

const Navbar = ({onHamburgerClicked=()=>{}}) => {
  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" className={classes.title}>
            <MenuIcon onClick={onHamburgerClicked} className={classes.menuIcon}/>
            Webapp
          </Typography>
          <PersonIcon />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#5AFF3D',
    fontSize: '2rem',
  },
  colorText: {
    color: '#121211',
  },
  colorcrop: {
    color: '#5AFF3D',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#5AFF3D',
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#5AFF3D',
    fontSize: '4rem',
  },
  gr: {
    color: '#1d3b1a',
    fontSize: '2rem',
    top: 350,
    left:1,
    textAlign: 'center',

  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
          
          <span className={classes.colorcrop}>  Crop Farming </span>
            <span className={classes.colorText}> Recommendation </span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br /> <span className={classes.colorText}>
            Crop Farming 
              <br/>Recommendation System.</span> 
          </h1>
        </div>
      </Collapse>
      &nbsp;
    
      <div>
      <div className={classes.gr} >
        <a href="https://www.google.com/" target="_blank">         
        <Button className={classes.gr} color='green' variant='contained' backgroundcolor='green' ><b>Get Recommendation</b></Button></a> 
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;

<Button left='100px' className={classes.gr} color='green' variant='contained' backgroundcolor='green' 
        ><b>More Information</b></Button>
        
      
      </div>
      </div>
    </div>
  );
}   
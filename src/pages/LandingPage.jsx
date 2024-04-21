import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import CityWidget from '../components/CityWidget';
import Map from '../components/Map';
import { mockData } from '../utils/mockData';
import Navbar from '../components/Navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  widgetContainer: {
    position: 'absolute',
    padding: theme.spacing(2),
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
    maxHeight: '80vh',
    overflowY: 'auto',
    width: '97%',
  },
  widgetWrapper: {
    width: '25%',
  },
  subTitle: {
    position: 'absolute',
    top: '30%',
    left: '2%',
    zIndex: 20,
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
    color: '#fff',
    fontSize: '18px',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  bgBlueColor:{
    background: '#044861',
    padding: '4px 12px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px',
    fontSize: '14px',
    lineHeight: '20px',
  }
}));

const LandingPage = () => {
  const classes = useStyles();

  const handleCityClick = (city) => {
    
    console.log('clicked city', city);
  };

  return (
    <div>
      <Navbar />
      <div className={classes.root}>
        <Map cities={mockData.cities} onCityClick={handleCityClick} />
        <div className={classes.subTitle}>
          <Typography variant="h5">Hello User,</Typography>
          <div className={classes.bgBlueColor}>
            <svg className={classes.icon} width="16" height="16" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
            <Typography variant="h8">There are 2 to action items.</Typography>
          </div>
        </div>
        <div className={classes.widgetContainer}>
          <Grid container spacing={2} direction="row">
            {mockData.cities.map((city) => (
              <Grid item key={city.id} className={classes.widgetWrapper}>
                <CityWidget city={city} onClick={handleCityClick} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, makeStyles, Drawer, IconButton, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import Sidebar from '../components/Sidebar';
import Chart from '../components/Chart';
import { mockData } from '../utils/mockData';
import Navbar from '../components/Navbar';
import DataTable from '../components/Table';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: '-9px -9px 0 -10px',
    position: 'relative',
    top: '64px',
    color: '#FFF',
    height: '600px',
  },
  header: {
    width: '100px',
    position: 'fixed',
    zIndex: 1500,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  headerOpen: {
    width: '354px',
    position: 'fixed',
    zIndex: 1500,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  gridContainer: {
    height: '100%',
  },
  chartContainer: {
    
  },
  switchContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  switch: {
    marginLeft: theme.spacing(1),
  },
  drawerRoot: {
    position: 'relative !important',
  },
  drawerPaper: {
    background: '#2c4870',
    top: '63px',
    width: '354px',
    flexShrink: 0,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    width: '60px',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  backdrop: {
    top: '64px',
  },
  doubleArrow: {
    zIndex: 1,
    color: '#FFF',
    cursor: 'pointer',
    transition: theme.transitions.create(['transform'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  chevronIconOpen: {
    transform: 'rotate(180deg)',
  },
  chartSection: {
    display: 'flex',
    flexDirection: 'column',
    background: '#16253a',
  },
  chartSectionFullWidth: {
    marginLeft: '71px',
    marginTop: '-16px',
  },
  datasetHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#16253a',
    padding: '16px',
    marginLeft: '-8px',
  },
  datasetName: {
    marginLeft: theme.spacing(2),
  },
}));

const DetailsPage = () => {
  const classes = useStyles();
  const { cityId } = useParams();
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDataset, setSelectedDataset] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showHistorical, setShowHistorical] = useState(true);
  const [showForecast, setShowForecast] = useState(true);

  useEffect(() => {
    const city = mockData.cities.find((c) => c.id === parseInt(cityId));
    setSelectedCity(city);
    setSelectedDataset(mockData.datasets.find((item) => item.stackId === city.stackId));
  }, [cityId]);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleDatasetSelect = (dataset) => {
    setSelectedDataset(dataset);
  };

  const handleNavigateBack = () => {
    navigate('/');
  };

  const handleToggleHistorical = () => {
    setShowHistorical(!showHistorical);
  };

  const handleToggleForecast = () => {
    setShowForecast(!showForecast);
  };

  const onHamburgerClicked = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (!selectedDataset) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar onHamburgerClicked={onHamburgerClicked} />
      <div className={classes.root}>
        <div className={isSidebarOpen ? classes.headerOpen : classes.header}>
          <IconButton className={classes.backButton} onClick={handleNavigateBack}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton
                className={`${classes.doubleArrow} ${isSidebarOpen && classes.chevronIconOpen}`}
                onClick={handleSidebarToggle}
              >
                <DoubleArrowIcon />
          </IconButton>
        </div>
        <Grid container spacing={2} className={classes.gridContainer} >
          <Grid item xs={isSidebarOpen ? 3 : 0}>
            <Drawer
              anchor="left"
              variant="permanent"
              classes={{
                paper: `${classes.drawerPaper} ${!isSidebarOpen && classes.drawerPaperClose}`,
                root: classes.drawerRoot,
              }}
              BackdropProps={{ classes: { root: classes.backdrop } }}
            >
              <Sidebar
                datasets={mockData.datasets}
                selectedDataset={selectedDataset}
                onDatasetSelect={handleDatasetSelect}
              />
            </Drawer>
          </Grid>
          <Grid item xs={isSidebarOpen ? 9 : 12} className={clsx(classes.chartSection, {[classes.chartSectionFullWidth]: !isSidebarOpen })}>
            <div className={classes.datasetHeader}>
              <Typography variant="h6" className={classes.datasetName}>
                {`Selected Dataset: ${selectedDataset?.name}`}
              </Typography>
              <Typography variant="h7" className={classes.datasetName}>
                {`Stack Id: ${selectedDataset?.stackId}`}
              </Typography>
            </div>
            <div className={classes.chartContainer}>
              <Chart
                dataset={selectedDataset}
                showHistorical={showHistorical}
                showForecast={showForecast}
                handleToggleHistorical={handleToggleHistorical}
                handleToggleForecast={handleToggleForecast}
              />
              <DataTable dataset={selectedDataset} showHistorical={showHistorical} showForecast={showForecast}  />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default DetailsPage;
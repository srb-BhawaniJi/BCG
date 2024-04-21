import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Grid, Switch, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  chartContainer: {
    height: 400,
  },
  switchContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
}));

const Chart = ({ dataset,showHistorical, showForecast, handleToggleForecast, handleToggleHistorical }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.switchContainer}>
        <Typography>Historical</Typography>
        <Switch checked={showHistorical} onChange={handleToggleHistorical} color="primary" />
        <Typography>Forecast</Typography>
        <Switch checked={showForecast} onChange={handleToggleForecast} color="primary"/>
      </div>
      <div className={classes.chartContainer}>
        <ResponsiveContainer>
          <LineChart data={dataset.chartData}>
            <XAxis dataKey="quarter" />
            <YAxis />
            <Tooltip />
            <Legend />
            {showHistorical && (
              <Line type="monotone" dataKey="historical" stroke="#8884d8" />
            )}
            {showForecast && (
              <Line type="monotone" dataKey="forecast" stroke="#82ca9d" />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
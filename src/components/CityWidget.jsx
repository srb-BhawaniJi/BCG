import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  card: {
    cursor: 'pointer',
    border: 'solid 1px #3bae3b',
    borderTop: `solid 1px blue`,
    borderRadius: "8px",
    boxShadow: theme.shadows[1],
    '&:hover': {
      boxShadow: theme.shadows[4],
    },
    backgroundColor: 'transparent',
  },
  typoColor: {
    color: '#FFF',
  },
  chartContainer: {
    height: 100,
  },
  tooltip: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
  },
}));

const CustomTooltip = ({ active, payload, label }) => {
  const classes = useStyles();
  if (active && payload && payload.length) {
    return (
      <div className={classes.tooltip}>
        <Typography variant="subtitle2">{`Quarter: ${label}`}</Typography>
        <Typography variant="body2">{`Value: ${payload[0].value}`}</Typography>
      </div>
    );
  }
  return null;
};

const CityWidget = ({ city, onClick }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = () => {
    onClick(city);
    navigate(`/details/${city.id}`);
  };

  return (
    <Card className={classes.card} onClick={handleClick}>
      <CardContent>
        <Typography variant="h6" className={classes.typoColor}>{city.name}</Typography>
        <div className={classes.chartContainer}>
          <ResponsiveContainer>
            <LineChart data={city.chartData}>
              <XAxis dataKey="quarter" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default CityWidget;
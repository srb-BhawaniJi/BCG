import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  table: {
    minWidth: 650,
    borderCollapse: 'collapse',
    '& th, & td': {
      padding: theme.spacing(1),
      textAlign: 'left',
      border: '1px solid #ddd',
    },
    '& th': {
      backgroundColor: '#f2f2f2',
    },
  },
}));

const DataTable = ({ dataset, showHistorical, showForecast }) => {
  const classes = useStyles();
  const dataObj = dataset.tableData;
  console.log("dataObj",dataObj)

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="data table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {Object.entries(dataObj)[0][1].map((item) => (
                <TableCell key={item.quarter}>{item.quarter}</TableCell>
              ))}
              {Object.entries(dataObj)[0][1].map((item) => (
                <TableCell key={item.quarter}>{item.quarter}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>

            {Object.entries(dataObj).map(([dataKey, dataValues]) => (
              <React.Fragment key={dataKey}>
                <TableRow>
                  <TableCell component="th" scope="row">
                    {dataKey}
                  </TableCell>
                  {dataValues.map((item) => (
                    <TableCell key={item.quarter}>{showHistorical ? item.historical : ''}</TableCell>
                  ))}
                  {dataValues.map((item) => (
                    <TableCell key={item.quarter}>{showForecast ? item.forecast: ''}</TableCell>
                  ))}
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataTable;
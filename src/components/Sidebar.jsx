import React from 'react';
import { List, ListItem, ListItemText, Divider, makeStyles } from '@material-ui/core';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    width: 300,
    padding: theme.spacing(2),
    marginTop: '40px',
  },
  listItem: {
    cursor: 'pointer',
    color: '#fff',
    border: 'solid 1px #379Aff',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: '#379AFF',
    },
    '&.Mui-selected': {
      backgroundColor: '#FFF',
      color: '#000',
      '&:hover': {
        backgroundColor: '#FFF',
      },
    },
  },
}));

const Sidebar = ({ datasets, selectedDataset, onDatasetSelect }) => {
  const classes = useStyles();

  const handleDatasetClick = (dataset) => {
    onDatasetSelect(dataset);
  };

  return (
    <div className={classes.sidebar}>
      <List>
        {datasets.map((dataset) => (
          <React.Fragment key={dataset.id}>
            <ListItem
              button
              className={classes.listItem}
              selected={dataset === selectedDataset}
              onClick={() => handleDatasetClick(dataset)}
            >
              <ListItemText primary={dataset.name} />
            </ListItem>
            <Divider key={`divider-${dataset.id}`} />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup, Sphere } from 'react-simple-maps';
import { makeStyles, Tooltip, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    position: 'relative',
    margin: '-10px',
  },
  tooltip: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
    pointerEvents: 'none',
  },
  tooltipWrapper: {
    position: 'absolute',
    left: "35%",
    top: "20%",
    zIndex: 1,
    pointerEvents: 'none',
  },
  controls: {
    position: 'fixed',
    bottom: '20%',
    right: '2%',
    zIndex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
}));

const Map = ({ cities, onCityClick }) => {
  const classes = useStyles();
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });
  const [hoveredCity, setHoveredCity] = useState(null);
  const [mapSize, setMapSize] = useState({ width: '100%', height: `calc(100% - 64px)` });

  useEffect(() => {
    setPosition({ coordinates: [0, 0], zoom: 1 });
    setTimeout(() => {
      setPosition({ coordinates: [0, 20], zoom: 2 });
    }, 100);

    const handleResize = () => {
      setMapSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleZoomIn = () => {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  };

  const handleMoveEnd = (position) => {
    setPosition(position);
  };

  const handleCityClick = (city) => {
    onCityClick(city);
  };

  const handleCityHover = (city) => {
    setHoveredCity(city);
  };

  return (
    <div className={classes.mapContainer}>
      <ComposableMap
        projection="geoMercator"
        width={900}
        height={600}
      >
        <ZoomableGroup
          zoom={position.zoom}
          // center={position.coordinates}
          onMoveEnd={handleMoveEnd}
        >
          <Sphere fill="#16253a" />
          <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} fill="#105a75" stroke='#044861' stroke-width="0.5px"  />
              ))
            }
          </Geographies>
          {cities.map((city) => (
            <Marker
              key={city.id}
              coordinates={city.coordinates}
              onMouseEnter={() => handleCityHover(city)}
              onMouseLeave={() => handleCityHover(null)}
              onClick={() => handleCityClick(city)}
            >
              <circle r={5} fill="#F00" stroke="#fff" strokeWidth={2} />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
      <div className={classes.tooltipWrapper}>
        {hoveredCity && (
          <Tooltip className={classes.tooltip} title={`${hoveredCity?.name}: ${hoveredCity?.text}`} arrow interactive>
            <div>
              <Typography variant="subtitle2">{hoveredCity.name}</Typography>
              <Typography variant="body2">Forecast:{hoveredCity.data.forecast} </Typography>
              <Typography variant="body2">Actual: {hoveredCity.data.actual}</Typography>
            </div>
          </Tooltip>
        )}
      </div>
      {/* <div className={classes.controls}>
        <button onClick={handleZoomIn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
        <button onClick={handleZoomOut}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div> */}
    </div>
  );
};

export default Map;
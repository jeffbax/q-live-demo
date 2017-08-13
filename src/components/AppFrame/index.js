import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'react-bootstrap/lib/Grid';

import './app-frame.css';
import Navigation from '../Navigation';

const AppFrame = ({ children }) => (
  <div>
    <Navigation />
    <Grid>
      { children }
    </Grid>
  </div>
);

AppFrame.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppFrame;

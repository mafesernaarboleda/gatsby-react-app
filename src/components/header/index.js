import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './index.css';

export default ({ toggleDrawer }) => (
    <div className="header">
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton onClick={toggleDrawer(true)} className="menuButton" color="inherit" aria-label="Menu">
          <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Products
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
)
// src/components/AppBarComponent.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function AppBarComponent() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          Meu Projeto
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarComponent;

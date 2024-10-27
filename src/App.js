// src/App.js
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import DataTable from './components/DataTable';
import ChartComponent from './components/ChartComponent';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>

      {/* Painel da Toolbar*/}
      <Box sx={{ flexGrow: 1 }}>  
        <AppBar className="app-bar">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar></Toolbar>
      </Box>

      <Container maxWidth={false} className="dashboard-container">
        <Grid container spacing={2}>

          {/* Painel da Tabela*/}
          <Grid item xs={12} md={6}>
            <Paper className="dashboard-panel">
              <Typography variant="h6" className="panel-title">
                Tabela de Dados
              </Typography>
              <Box>
                <DataTable />
              </Box>
            </Paper>
          </Grid>

          {/* Painel do Gráfico */}
          <Grid item xs={12} md={6}>
            <Paper className="dashboard-panel">
              <Typography variant="h6" className="panel-title">
                Gráfico de Desempenho
              </Typography>
              <Box>
                <ChartComponent />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;

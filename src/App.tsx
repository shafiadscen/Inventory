import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Routes from './routes';
import Layout from './components/Common/Layout';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Router>
          <Layout>
            <Routes />
          </Layout>
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
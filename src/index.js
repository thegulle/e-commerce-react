import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import { AuthProvider } from 'context/auth';
import store from 'store';
import 'styles/index.scss';
import theme from './theme';
import { SnackbarProvider } from 'notistack';
import ScrollToTop from 'theme/ScrollTop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <SnackbarProvider>
      <AuthProvider>
        <BrowserRouter>
          <Provider store={store}>
            <CssBaseline />
            <ScrollToTop />
            <App />
          </Provider>
        </BrowserRouter>
      </AuthProvider>
    </SnackbarProvider>
  </ThemeProvider>
);

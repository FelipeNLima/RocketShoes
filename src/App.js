import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import './config/ReactotronConfig';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

import history from './services/history';
import store from './store';

import { useDarkMode } from './useDarkMode';
import { lightTheme, darkTheme } from './styles/theme';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <Provider store={store}>
          <Router history={history}>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <Routes theme={theme} />
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
          </Router>
        </Provider>
      </>
    </ThemeProvider>
  );
}

export default App;

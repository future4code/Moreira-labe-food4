import React from 'react';
import theme from './constants/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import LoginPage from './pages/LoginPage/LoginPage'

const  App = () => {
  return (
    <ThemeProvider theme={theme}>
      Hello World! 
      <LoginPage/>     
    </ThemeProvider>
  );
};
export default App;

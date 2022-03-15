import React from 'react';
import theme from './constants/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import SignUpPage from './pages/SignUpPage/SignUpPage';

import Router from './routes/Router';

const  App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SignUpPage/>    
      Hello World! 
      <Router/>     
    </ThemeProvider>
  );
};
export default App;

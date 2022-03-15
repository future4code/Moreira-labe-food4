import React from 'react';
import theme from './constants/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import SignUpAdressPage from './pages/SignUpAdressPage/SignUpAdressPage'



const  App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomePage/>
      <LoginPage/>
      <SignUpPage/>
      <SignUpAdressPage/>
    </ThemeProvider>
  );
};
export default App;

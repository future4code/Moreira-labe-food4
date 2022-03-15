import React from 'react';
import theme from './constants/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import SignUpPage from './pages/SignUpPage/SignUpPage';

const  App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SignUpPage/>    
    </ThemeProvider>
  );
};
export default App;

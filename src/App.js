import React from 'react';
import theme from './constants/theme';
import { ThemeProvider } from '@material-ui/core/styles';


const  App = () => {
  return (
    <ThemeProvider theme={theme}>
      Hello World!
      
    </ThemeProvider>
  );
};
export default App;

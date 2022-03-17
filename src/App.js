import React from 'react';
import theme from './constants/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import Router from './routes/Router'
import { PageContainer } from './styled';
import GlobalState from "./Global/GlobalState"
import { BrowserRouter } from 'react-router-dom';


const  App = () => {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>  
    <GlobalState>
      <PageContainer>
        <Router/>
      </PageContainer>     
    </GlobalState>
    </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;

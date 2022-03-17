import React from 'react';
import theme from './constants/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import Router from './routes/Router'
import { PageContainer } from './styled';
import GlobalState from "./Global/GlobalState"


const  App = () => {
  return (
    <GlobalState>
    <ThemeProvider theme={theme}>
      <PageContainer>
        <Router/>
      </PageContainer>     
    </ThemeProvider>
    </GlobalState>
  );
};
export default App;

import React from 'react';
import theme from './constants/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import Router from './routes/Router'
import { PageContainer } from './styled';



const  App = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <Router/>
      </PageContainer>     
    </ThemeProvider>
  );
};
export default App;

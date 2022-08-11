/** configuration relate to UI */
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import LoadingScreen from './components/LoadingScreen';
import { createTheme } from '@mui/material/styles';

import routes from './routes';

const App = () => {
  const content = useRoutes(routes);

  const theme = createTheme({});

  return (
    // using Suspense: wait for language json files loaded
    <React.Suspense fallback={<LoadingScreen />}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {content}
      </ThemeProvider>
    </React.Suspense>
  );
};

export default App;

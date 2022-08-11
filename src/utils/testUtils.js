import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { prettyDOM } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const AllTheProviders = ({ children }) => {

  const theme = createTheme({});
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

const customRender = (
  ui,
  options,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';


export { customRender as render, userEvent, prettyDOM };

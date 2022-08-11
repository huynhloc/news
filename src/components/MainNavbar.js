import React from 'react';
import { AppBar, Divider, Toolbar } from '@mui/material';

const MainNavbar = () => {
  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.primary',
      }}
    >
      <Toolbar sx={{ height: 80 }}>
      </Toolbar>
      <Divider />
    </AppBar>
  );
};
export default MainNavbar;

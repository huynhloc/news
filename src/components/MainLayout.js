import React from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
// import MainNavbar from './MainNavbar';

const MainLayoutRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100%',
  paddingTop: 80,  
}));

const MainLayout = ({ children }) => {
  return (
    <MainLayoutRoot>
      {/* <MainNavbar /> */}
      <Container maxWidth="xl" sx={{ marginY: 2 }}>
        {children || <Outlet />}
      </Container>
    </MainLayoutRoot>
  );
};

export default MainLayout;

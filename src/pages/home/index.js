import React, { useEffect } from 'react';
import { AppBar, Box, Divider, Toolbar } from '@mui/material';
import { getNews } from '../../apis/news';

const Home = () => {
  const loadNews = async () => {
    try {
      const news = await getNews();
      console.log(news);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <Box>
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
      <div>Home</div>
    </Box>
  )
}

export default Home;
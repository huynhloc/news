import React, { useEffect, useState } from 'react';
import { AppBar, Box, Divider, Grid, Toolbar } from '@mui/material';
import { getNews } from '../../apis/news';
import Article from './article';

const Home = () => {
  const [articles, setArticles] = useState([]);

  const loadNews = async () => {
    try {
      const news = await getNews();
      setArticles(news?.articles || []);
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
      <Grid container spacing={3}>
        {articles?.map(article => (
          <Grid item xs={12} sm={6} md={4} key={article.url}>
            <Article {...article}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Home;
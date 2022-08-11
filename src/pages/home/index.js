import React, { useEffect, useMemo, useState } from 'react';
import { AppBar, Box, Divider, Grid, Toolbar, Autocomplete, TextField, Container} from '@mui/material';
import { getNews } from '../../apis/news';
import Article from './article';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [filterBy, setFilterBy] = useState(null);

  const loadNews = async () => {
    try {
      const news = await getNews();
      setArticles(news?.articles || []);
      setFilteredArticles(news?.articles || [])
    } catch (error) {
      console.log(error);
    }
  };

  const sources = useMemo(() => {
    const result = [];
    articles?.forEach(article => {
      if (result.indexOf(article.source?.name) < 0) {
        result[article.source?.name] = [article];
        result.push(article.source?.name);
      }
    });
    return result;
  }, [articles]);


  const handleSourceChange = (e, value) => {
    setFilterBy(value);
    if (!value) {
      setFilteredArticles(articles);
    } else {
      const filteredArticles = articles.filter(article => article.source?.name === value);
      setFilteredArticles(filteredArticles);
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
          <Container maxWidth="xl" sx={{ marginY: 2 }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={sources}
              sx={{ width: '100%', maxWidth: 500 }}
              value={filterBy}
              onChange={handleSourceChange}
              renderInput={(params) => <TextField {...params} label="Filter by source" />}
            />
          </Container>
        </Toolbar>
        <Divider />
      </AppBar>
      <Grid container spacing={3}>
        {filteredArticles?.map(article => (
          <Grid item xs={12} sm={6} md={4} key={article.url}>
            <Article {...article}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Home;
import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Article = ({author, description, title, url, urlToImage}) => (
  <Card>
      <CardMedia
        component="img"
        height="160"
        image={urlToImage}
        alt={title}
      />
      <CardContent>
        <Link href={url} underline="hover" target="_blank" color="textPrimary" fontWeight="fontWeightBold">
          {title}
        </Link>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>        
      <CardActions sx={{justifyContent: 'flex-end'}}>
        <Typography gutterBottom variant="caption" component="div">
            {author}
        </Typography>
      </CardActions>
    </Card>
);

Article.propTypes = {
author: PropTypes.string,
content: PropTypes.string,
description: PropTypes.string,
title: PropTypes.string,
url: PropTypes.string,
urlToImage: PropTypes.string
};

export default Article;
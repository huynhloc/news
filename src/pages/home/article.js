import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import { grey } from '@mui/material/colors';


const Article = ({author, description, title, url, urlToImage}) => (
  <Card sx={{height: '100%'}} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
            {author ? author[0] : ''}
          </Avatar>
        }
        title={author}
      />
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
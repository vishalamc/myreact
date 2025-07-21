import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const ImageCard = ({ src, alt, caption }) => {
  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        margin: 'auto', 
        border: '2px solid #1976d2', 
        boxShadow: 3, 
        borderRadius: 2,
        mb: 4
      }}
    >
      <CardMedia
        component="img"
        image={src}
        alt={alt}
        sx={{ height: 200, objectFit: 'contain' }}
      />
      {caption && (
        <CardContent>
          <Typography variant="body2" color="text.secondary" align="center">
            {caption}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default ImageCard;

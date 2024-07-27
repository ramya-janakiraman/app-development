import React, { useState } from 'react';
import '../assets/css/Wish.css';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Rating, Typography } from "@mui/material";
import { Favorite } from '@mui/icons-material';

const Wish = () => {
  const [flag, setFlag] = React.useState(true);
  const handleClick = () => {
    setFlag(!flag);
  };

  return (
    <div className="page-container">
      <div className="wish-title">Your WishList</div>

      <div className='wishpage'>
        <Box
          sx={{
            backgroundSize: 'cover',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <br />
          <Grid container spacing={2} sx={{ padding: '50px' }}>
            {[1, 2, 3, 4, 5].map((_, index) => (
              <Grid item xs={2.4} key={index}> {/* Adjusted size for more cards in a row */}
                <Card sx={{ maxWidth: 300, position: 'relative' }}> {/* Adjusted width for smaller cards */}
                  <CardActionArea sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
                    {/* Favorite Icon */}
                    <IconButton
                      sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        color: '#F6BE00'
                      }}
                    >
                      <Favorite />
                    </IconButton>

                    <Button
                      sx={{
                        backgroundColor: '#F6BE00',
                        fontWeight: 'bold',
                        color: 'black',
                        padding: '10px',
                        fontFamily: 'sans-serif',
                        fontSize: 'medium',
                        '&:hover': {
                          backgroundColor: '#F6BE00',
                          color: 'black',
                        },
                      }}
                    >
                      {index === 0
                        ? '20% OFF'
                        : index === 1
                        ? '25% OFF'
                        : index === 2
                        ? '30% OFF'
                        : index === 3
                        ? '40% OFF'
                        : '50% OFF'}
                    </Button>
                    <CardMedia
                      sx={{ height: 200 }}
                      image={
                        index === 0
                          ? 'https://toyzone.in/cdn/shop/products/Barbie-Mini-Ride-On12_fb28b9c2-1ecb-4594-b578-14987d01ae29_1024x1024@2x.jpg?v=1668078945'
                          : index === 1
                          ? 'https://cdn.shopify.com/s/files/1/0654/2445/7966/products/primary-image1_600x.png?v=1659425394'
                          : index === 2
                          ? 'https://toyzone.in/cdn/shop/products/My-little-sheep-baby-walker3_1024x1024@2x.png?v=1667825061'
                          : index === 3
                          ? 'https://cdn.shopify.com/s/files/1/0654/2445/7966/products/43034_600x.jpg?v=1667194431'
                          : 'https://cdn.shopify.com/s/files/1/0654/2445/7966/products/80213_80206_801905_1024x1024@2x.jpg?v=1667203256'
                      }
                      title={`Product Image ${index + 1}`}
                    />
                    <CardContent className="wish-content-custom">
                      <Typography gutterBottom>
                        {index === 0
                          ? 'Barbie Mini Ride On'
                          : index === 1
                          ? 'Shopping Trolly'
                          : index === 2
                          ? 'My Little Sheep Baby Walker'
                          : index === 3
                          ? 'Building Blocks - 150 pcs'
                          : 'Golf Xylophone'}
                      </Typography>
                      <Typography variant="body2" className="wish-price" sx={{ fontWeight: 'bold' }}>
                        {index === 0
                          ? 'Rs.1499.00'
                          : index === 1
                          ? 'Rs.799.00'
                          : index === 2
                          ? 'Rs.149.00'
                          : index === 3
                          ? 'Rs.2999.00'
                          : 'Rs.4999.00'}
                      </Typography>
                      <Typography variant="body2" className="wish-old-price" sx={{ color: 'red', textDecoration: 'line-through', fontWeight: 'bold', paddingLeft: '30px' }}>
                        {index === 0
                          ? 'Rs.1999.00'
                          : index === 1
                          ? 'Rs.1599.00'
                          : index === 2
                          ? 'Rs.299.00'
                          : index === 3
                          ? 'Rs.3999.00'
                          : 'Rs.5999.00'}
                      </Typography>
                      <Button
                        variant="contained"
                        onClick={handleClick}
                        sx={{
                          backgroundColor: '#F6BE00', // Button background color
                          color: 'black', // Button text color
                          left: '70px',
                          '&:hover': {
                            backgroundColor: '#FFC107', // Color when hovered
                            color: 'white', // Text color when hovered
                          },
                        }}
                      >
                        Buy Now
                      </Button><br />
                      <Rating
                        name={`half-rating-read-${index}`}
                        defaultValue={
                          index === 0
                            ? 4.0
                            : index === 1
                            ? 3.5
                            : index === 2
                            ? 4.5
                            : index === 3
                            ? 2.5
                            : 5.0
                        }
                        precision={0.5}
                        readOnly
                      />
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Wish;

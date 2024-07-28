import React, { useState } from "react";
import '../assets/css/Category.css';
import { Alert, Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Rating, Snackbar, Typography } from "@mui/material";
import { Favorite } from '@mui/icons-material';
import { Link } from "react-router-dom";

const products = [
  {
    image: "https://cdn.shopify.com/s/files/1/0654/2445/7966/files/88_gym_fitness_social_media_post_template_600x.jpg?v=1690527910",
    title: "XShot Gun",
    price: "Rs.399.00",
    oldPrice: "Rs.599.00"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0654/2445/7966/products/611753_600x.jpg?v=1667191873",
    title: "ShotGun PVC Bag",
    price: "Rs.549.00",
    oldPrice: "Rs.799.00"
  },
  {
    image: "https://toyzone.in/cdn/shop/products/Superman-Softgun-57918-01_4fd7b26b-ad1d-46ce-b4d2-548ab014c3d4_1024x1024@2x.jpg?v=1664608142",
    title: "Doremon SoftGun",
    price: "Rs.199.00",
    oldPrice: "Rs.499.00"
  },
  {
    image: "https://toyzone.in/cdn/shop/products/TURTLES-57697-01_1024x1024@2x.jpg?v=1662621450",
    title: "Ninja Turtle SoftGun",
    price: "Rs.749.00",
    oldPrice: "Rs.1099.00"
  }
];

export default function Gun() {
  const [favorites, setFavorites] = useState(Array(products.length).fill(false));
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleFavoriteClick = (index) => {
    const updatedFavorites = favorites.map((fav, i) => (i === index ? !fav : fav));
    setFavorites(updatedFavorites);
    setSnackbarMessage(updatedFavorites[index] ? 'Added to Favorites' : 'Removed from Favorites');
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <div className="gun" style={{textAlign:'center',margin:'20px'}}>
        <h5 className='gun-toy'>Guns</h5>
        <h1 className='gun-product'>Products</h1>
      </div>
      <Box
        sx={{
          backgroundColor: '#fff7cc',
          backgroundSize: 'cover',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid container spacing={2} sx={{ padding: '50px' }}>
          {products.map((product, index) => (
            <Grid item xs={3} key={index}>
              <Card sx={{ maxWidth: 400 }}>
                <CardActionArea sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
                  <IconButton
                    sx={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      borderColor: '#F6BE00',
                      color: favorites[index] ? '#F6BE00' : 'grey',
                      '&:hover': {
                        color: '#F6BE00',
                      },
                    }}
                    onClick={() => handleFavoriteClick(index)}
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
                    sx={{ height: 300 }}
                    image={product.image}
                    title={product.title}
                  />
                  <CardContent className="gun-content-custom">
                    <Typography gutterBottom variant="h5">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" className="price" style={{fontWeight:'bold'}}>
                      {product.price}
                    </Typography>
                    <Typography variant="body2" className="old-price" style={{color:'red',fontWeight:'bold',textDecoration:'line-through',marginLeft:'40px'}}>
                      {product.oldPrice}
                    </Typography>
                    <Link to='/payment'>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#F6BE00',
                        color: 'black',
                        width:'300px',
                        '&:hover': {
                          backgroundColor: '#FFC107',
                          color: 'white',
                        },
                      }}
                    >
                      Buy Now
                    </Button>
                    </Link>
                    <br />
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

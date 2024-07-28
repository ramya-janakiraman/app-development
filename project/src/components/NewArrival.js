import React, { useState } from "react";
import '../assets/css/Category.css';
import { Alert, Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Rating, Snackbar, Typography } from "@mui/material";
import { Favorite } from '@mui/icons-material';
import { Link } from "react-router-dom";

const products = [
  {
    image: "https://toyzone.in/cdn/shop/products/46_d00bf425-8007-4b84-8327-558af8144740.jpg?v=1668585732",
    title: "Fast Cargo",
    price: "Rs.399.00",
    oldPrice: "Rs.599.00"
  },
  {
    image: "https://toyzone.in/cdn/shop/products/21988_1024x1024@2x.jpg?v=1668494109",
    title: "Dancing Strawberry",
    price: "Rs.549.00",
    oldPrice: "Rs.799.00"
  },
  {
    image: "https://toyzone.in/cdn/shop/products/D72515-6_1024x1024@2x.jpg?v=1668491662",
    title: "My Road Runners-Van",
    price: "Rs.199.00",
    oldPrice: "Rs.499.00"
  },
  {
    image: "https://toyzone.in/cdn/shop/products/13112-B3_d7196418-8949-4fa0-b852-58f43881cf29_1024x1024@2x.png?v=1664260102",
    title: "Baby Deluxe Bather - Pink",
    price: "Rs.749.00",
    oldPrice: "Rs.1099.00"
  }
];

export default function NewArrival() {
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
      <div className="new">
        <h5 className='new-arrival'>New Arrivals</h5>
        <h1 className='product'>Products</h1>
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
                  <CardContent className="card-content-custom">
                    <Typography gutterBottom variant="h5">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" className="price">
                      {product.price}
                    </Typography>
                    <Typography variant="body2" className="old-price">
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

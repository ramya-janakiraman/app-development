import React, { useState, useEffect } from "react";
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Rating, Typography, Snackbar, Alert } from "@mui/material";
import { Favorite } from '@mui/icons-material';
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { useAuth } from '../context/AuthContext'; // Import useAuth hook
import '../assets/css/Category.css';

const products = [
  {
    image: "https://cdn.shopify.com/s/files/1/0654/2445/7966/products/8168578_600x.jpg?v=1668593366",
    title: "3 in 1 Abacus",
    price: "Rs.399.00",
    oldPrice: "Rs.599.00"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0654/2445/7966/products/4-in-1-My-School-Desk80039-02_600x.jpg?v=1662381689",
    title: "4 in 1 School Desk",
    price: "Rs.549.00",
    oldPrice: "Rs.799.00"
  },
  {
    image: "https://toyzone.in/cdn/shop/files/IMG_1116_8e7aace1-9582-4f37-b4c9-05af8448b4e8_1024x1024@2x.jpg?v=1687848069",
    title: "Stretch to Throw Game",
    price: "Rs.199.00",
    oldPrice: "Rs.499.00"
  },
  {
    image: "https://toyzone.in/cdn/shop/products/81524-03_1024x1024@2x.jpg?v=1662545549",
    title: "IQ Activity Center 5 in 1",
    price: "Rs.749.00",
    oldPrice: "Rs.1099.00"
  }
];

export default function Educational() {
  const [favorites, setFavorites] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const { isLoggedIn, setRedirectPath } = useAuth(); // Use the useAuth hook
  const navigate = useNavigate(); // Use the useNavigate hook

  useEffect(() => {
    // Retrieve wishlist items from local storage
    const savedFavorites = JSON.parse(localStorage.getItem('wishlist')) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleFavoriteClick = (product) => {
    const isFavorite = favorites.some(fav => fav.title === product.title);
    let updatedFavorites;

    if (isFavorite) {
      // Remove from favorites
      updatedFavorites = favorites.filter(fav => fav.title !== product.title);
      setSnackbarMessage('Removed from Favorites');
    } else {
      // Add to favorites
      updatedFavorites = [...favorites, product];
      setSnackbarMessage('Added to Favorites');
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('wishlist', JSON.stringify(updatedFavorites));
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleAddToCartClick = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    setSnackbarMessage('Added to Cart');
    setOpenSnackbar(true);
  };

  const isFavorite = (product) => {
    return favorites.some(fav => fav.title === product.title);
  };

  const handleBuyNow = (product) => {
    if (isLoggedIn) {
      handleAddToCartClick(product); // Optionally add the product to cart
      navigate('/address');
    } else {
      alert('Please login to buy the product.');
      setRedirectPath('/address');
      navigate('/login');
    }
  };

  return (
    <div>
      <div className="edu" style={{ textAlign: 'center', margin: '20px' }}>
        <h5 className='edu-house'>Educational</h5>
        <h1 className='edu-product'>Products</h1>
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
                      color: isFavorite(product) ? '#F6BE00' : 'grey',
                      '&:hover': {
                        color: '#F6BE00',
                      },
                    }}
                    onClick={() => handleFavoriteClick(product)}
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
                  <CardContent className="edu-content-custom">
                    <Typography gutterBottom variant="h5">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" className="price" style={{ fontWeight: 'bold' }}>
                      {product.price}
                    </Typography>
                    <Typography variant="body2" className="old-price" style={{ color: 'red', fontWeight: 'bold', textDecoration: 'line-through', marginLeft: '40px' }}>
                      {product.oldPrice}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: 'white',
                          color: 'black',
                          padding: '10px',
                          letterSpacing: '3px',
                          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                          border: '2px solid',
                          borderColor: 'black',
                          fontWeight: 'bold',
                          '&:hover': {
                            backgroundColor: 'black',
                            color: 'white',
                          },
                          '&:active': {
                            backgroundColor: 'gray',
                            color: 'white',
                          },
                        }}
                        onClick={() => handleAddToCartClick(product)}
                      >
                        ADD TO CART
                      </Button>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: '#F6BE00',
                          color: 'black',
                          height: '50px',
                          width: '150px',
                          '&:hover': {
                            backgroundColor: '#FFC107',
                            color: 'white',
                          },
                        }}
                        onClick={() => handleBuyNow(product)}
                      >
                        Buy Now
                      </Button>
                    </Box>
                    <br />
                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
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
}

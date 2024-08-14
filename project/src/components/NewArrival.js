import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Rating, Typography, Snackbar, Alert } from "@mui/material";
import { Favorite } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import '../assets/css/Category.css';

const category = "NewArrival";

export default function NewArrival() {
  const [favorites, setFavorites] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [products, setProducts] = useState([]);
  const [tempProduct, setTempProduct] = useState(null); // Temporary product state
  const { isLoggedIn, setRedirectPath } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('wishlist')) || [];
    setFavorites(savedFavorites);

    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const userRole = localStorage.getItem("role");
        if (token) {
          setIsAdmin(userRole === "ADMIN");
        } else {
          setIsAdmin(false); // Ensure isAdmin is false when not logged in
        }

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const url = `http://127.0.0.1:8080/api/products`; // Fetch all products
        const response = await axios.get(url, config);

        // Filter products based on the category
        const filteredData = response.data.filter(product => product.category === category);
        setProducts(filteredData);

      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (tempProduct && isLoggedIn) {
      // Automatically add the product to wishlist or cart if logged in
      handleActionAfterLogin(tempProduct);
      setTempProduct(null);
    }
  }, [isLoggedIn]);

  const isFavorite = (product) => {
    return favorites.some(fav => fav.productId === product.productId);
  };

  const handleActionAfterLogin = (product) => {
    if (product.action === 'wishlist') {
      handleFavoriteClick(product);
    } else if (product.action === 'cart') {
      handleAddToCartClick(product);
    }
  };

  const handleFavoriteClick = (product) => {
    if (!isLoggedIn) {
      setTempProduct({ ...product, action: 'wishlist' });
      alert('Please login to add to wishlist.');
      navigate('/login');
      return;
    }

    if (isAdmin) {
      showSnackbar("You don't have permission to add to wishlist");
      return;
    }

    const isFav = isFavorite(product);
    let updatedFavorites;

    if (isFav) {
      updatedFavorites = favorites.filter(fav => fav.productId !== product.productId);
      setSnackbarMessage('Removed from Favorites');
    } else {
      updatedFavorites = [...favorites, product];
      setSnackbarMessage('Added to Favorites');
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('wishlist', JSON.stringify(updatedFavorites));
    setOpenSnackbar(true);
  };

  const handleAddToCartClick = (product) => {
    if (!isLoggedIn) {
      setTempProduct({ ...product, action: 'cart' });
      alert('Please login to add to cart.');
      navigate('/login');
      return;
    }

    if (isAdmin) {
      showSnackbar("You don't have permission to add to cart");
      return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    setSnackbarMessage('Added to Cart');
    setOpenSnackbar(true);
  };

  const handleBuyNow = (product) => {
    if (!isLoggedIn) {
      setTempProduct({ ...product, action: 'cart' });
      alert('Please login to buy the product.');
      setRedirectPath('/address');
      navigate('/login');
      return;
    }

    if (isAdmin) {
      showSnackbar("You don't have permission to buy");
      return;
    }

    handleAddToCartClick(product);
    navigate('/address');
  };

  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setOpenSnackbar(true);
    setTimeout(() => setOpenSnackbar(false), 3000);
  };

  return (
    <div>
      <div className="doll" style={{ textAlign: 'center', margin: '20px' }}>
        <h5 className='doll-house'>New Arrivals</h5>
        <h1 className='doll-product'>Products</h1>
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
          {products.length === 0 ? (
            <Typography variant="h6" style={{ margin: '0 auto' }}>
              No products available
            </Typography>
          ) : (
            products.map((product, index) => (
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
                      image={product.imageUrl}
                      title={product.productName}
                    />
                    <CardContent className="doll-content-custom">
                      <Typography gutterBottom variant="h5">
                        {product.productName}
                      </Typography>
                      <Typography variant="body2" className="price" style={{ fontWeight: 'bold' }}>
                        Rs.{product.productPrice}.00
                      </Typography>
                      <Typography variant="body2" className="old-price" style={{ color: 'red', fontWeight: 'bold', textDecoration: 'line-through', marginLeft: '40px' }}>
                        {product.oldPrice ? `Rs.${product.oldPrice}` : ''}.00
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
            ))
          )}
        </Grid>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

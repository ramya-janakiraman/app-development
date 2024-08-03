import React, { useState, useEffect } from "react";
import '../assets/css/Category.css';
import { Alert, Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Rating, Snackbar, Typography } from "@mui/material";
import { Favorite } from '@mui/icons-material';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const products = [
  {
    image: "https://toyzone.in/cdn/shop/products/976458.jpg?v=1668512269",
    title: "Super Premium Magic Car - Pink",
    price: "Rs.1499.00",
    oldPrice: "Rs.1499.00",
  },
  {
    image: "https://toyzone.in/cdn/shop/products/54269.jpg?v=1668514009",
    title: "Vegga RC Car - Red",
    price: "Rs.799.00",
    oldPrice: "Rs.1599.00",
  },
  {
    image: "https://toyzone.in/cdn/shop/products/723934.jpg?v=1668491719",
    title: "Varuna Missile Launcher Truck",
    price: "Rs.149.00",
    oldPrice: "Rs.299.00",
  },
  {
    image: "https://toyzone.in/cdn/shop/products/72591.jpg?v=1668585650",
    title: "Food Fest",
    price: "Rs.399.00",
    oldPrice: "Rs.599.00",
  },
  {
    image: "https://toyzone.in/cdn/shop/products/46_d00bf425-8007-4b84-8327-558af8144740.jpg?v=1668585732",
    title: "Fast Cargo",
    price: "Rs.399.00",
    oldPrice: "Rs.599.00",
  },
  {
    image: "https://toyzone.in/cdn/shop/products/21988_1024x1024@2x.jpg?v=1668494109",
    title: "Dancing Strawberry",
    price: "Rs.549.00",
    oldPrice: "Rs.799.00",
  },
  {
    image: "https://toyzone.in/cdn/shop/products/D72515-6_1024x1024@2x.jpg?v=1668491662",
    title: "My Road Runners-Van",
    price: "Rs.199.00",
    oldPrice: "Rs.499.00",
  },
  {
    image: "https://toyzone.in/cdn/shop/products/13112-B3_d7196418-8949-4fa0-b852-58f43881cf29_1024x1024@2x.png?v=1664260102",
    title: "Baby Deluxe Bather - Pink",
    price: "Rs.749.00",
    oldPrice: "Rs.1099.00",
  },
  {
    image: "https://toyzone.in/cdn/shop/products/Jumbo-Rider9_19ba5431-72dc-40a5-9edc-2e25a5d11291_1024x1024@2x.jpg?v=1667824430",
    title: "Jumbo Rider",
    price: "Rs.1149.00",
    oldPrice: "Rs.1999.00",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0654/2445/7966/products/primary-image_9fd34c9c-aefd-4cb9-b91c-b8c93af4e42b_600x.jpg?v=1668079552",
    title: "Chimi Doll House",
    price: "Rs.649.00",
    oldPrice: "Rs.899.00",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0654/2445/7966/products/primary-imaeg_93e2129c-a141-4661-a4ee-8d3f328c9e67_600x.jpg?v=1664608113",
    title: "Blaze Gun",
    price: "Rs.1499.00",
    oldPrice: "Rs.1499.00",
  },
  {
    image: "https://toyzone.in/cdn/shop/products/Walker-11736-01_1024x1024@2x.jpg?v=1662459371",
    title: "My Puppy Baby Walker",
    price: "Rs.2,299.00",
    oldPrice: "Rs.3499.00",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0654/2445/7966/products/iq-watch-81517-02_600x.jpg?v=1662545719",
    title: "IQ Watch",
    price: "Rs.399.00",
    oldPrice: "Rs.499.00",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0654/2445/7966/products/43034_600x.jpg?v=1667194431",
    title: "Golf Xylophoner",
    price: "Rs.449.00",
    oldPrice: "Rs.699.00",
  },
  {
    image: "https://toyzone.in/cdn/shop/products/45052-01_99dd69bb-7a11-4aa8-858a-b2b7e5969b27_1024x1024@2x.jpg?v=1665139310",
    title: "Barbie My Little Kitchen",
    price: "Rs.449.00",
    oldPrice: "Rs.699.00",
  },
  {
    image: "https://toyzone.in/cdn/shop/files/IMG_9701_1024x1024@2x.jpg?v=1690618214",
    title: "Horse Rider",
    price: "Rs.899.00",
    oldPrice: "Rs.1499.00",
  },
  {
    image: "https://toyzone.in/cdn/shop/products/Jumbo-Rider9_19ba5431-72dc-40a5-9edc-2e25a5d11291_1024x1024@2x.jpg?v=1667824430",
    title: "Jumbo Rider",
    price: "Rs.1149.00",
    oldPrice: "Rs.1999.00",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0654/2445/7966/products/primary-image_9fd34c9c-aefd-4cb9-b91c-b8c93af4e42b_600x.jpg?v=1668079552",
    title: "Chimi Doll House",
    price: "Rs.649.00",
    oldPrice: "Rs.899.00",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0654/2445/7966/products/primary-imaeg_93e2129c-a141-4661-a4ee-8d3f328c9e67_600x.jpg?v=1664608113",
    title: "Blaze Gun",
    price: "Rs.1499.00",
    oldPrice: "Rs.1499.00",
  },
  {
    image: "https://toyzone.in/cdn/shop/products/Walker-11736-01_1024x1024@2x.jpg?v=1662459371",
    title: "My Puppy Baby Walker",
    price: "Rs.2,299.00",
    oldPrice: "Rs.3499.00",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0654/2445/7966/products/iq-watch-81517-02_600x.jpg?v=1662545719",
    title: "IQ Watch",
    price: "Rs.399.00",
    oldPrice: "Rs.499.00",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0654/2445/7966/products/43034_600x.jpg?v=1667194431",
    title: "Golf Xylophoner",
    price: "Rs.449.00",
    oldPrice: "Rs.699.00",
  },
  {
    image: "https://toyzone.in/cdn/shop/products/45052-01_99dd69bb-7a11-4aa8-858a-b2b7e5969b27_1024x1024@2x.jpg?v=1665139310",
    title: "Barbie My Little Kitchen",
    price: "Rs.449.00",
    oldPrice: "Rs.699.00",
  },
  {
    image: "https://toyzone.in/cdn/shop/files/IMG_9701_1024x1024@2x.jpg?v=1690618214",
    title: "Horse Rider",
    price: "Rs.899.00",
    oldPrice: "Rs.1499.00",
  },
];
export default function Category() {
  const [favorites, setFavorites] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const { isLoggedIn, setRedirectPath } = useAuth();
  const navigate = useNavigate();

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

  const handleBuyNowClick = () => {
    if (isLoggedIn) {
      navigate('/address');
    } else {
      alert('Please login to buy the product.');
      setRedirectPath('/address');
      navigate('/login');
    }
  };

  const isFavorite = (product) => {
    return favorites.some(fav => fav.title === product.title);
  };

  return (
    <div style={{ backgroundColor: '#fff7cc', backgroundSize: 'cover' }}>
      <div className="new">
        <h5 className='new-arrival'>New Arrivals</h5>
        <h1 className='product'>Products</h1>
      </div>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid container spacing={2} sx={{ padding: '50px' }}>
          {products.map((product, index) => (
            <React.Fragment key={index}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ maxWidth: 400, position: 'relative' }}>
                  <CardActionArea sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
                    <IconButton
                      sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
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
                        : index === 4
                        ? '20% OFF'
                        : index === 6
                        ? '25% OFF'
                        : index === 7
                        ? '30% OFF'
                        : index === 8
                        ? '40% OFF'
                        : index === 9
                        ? '20% OFF'
                        : index === 10
                        ? '25% OFF'
                        : index === 11
                        ? '30% OFF'
                        : index === 12
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
                          onClick={handleBuyNowClick}
                        >
                          Buy Now
                        </Button>
                      </Box>
                      <br />
                      <Rating name="half-rating-read" defaultValue={5.0} precision={0.5} readOnly />
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              {index === 7 && (
                <Grid item xs={12}>
                  <div className="new">
                    <h5 className='new-arrival'>Shop By Category</h5>
                    <h1 className='product'>Products</h1>
                  </div>
                </Grid>
              )}
              {index === 15 && (
                <Grid item xs={12}>
                  <div className="new">
                    <h5 className='new-arrival'>Products</h5>
                    <h1 className='product'>Shop By Age</h1>
                  </div>
                </Grid>
              )}
            </React.Fragment>
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

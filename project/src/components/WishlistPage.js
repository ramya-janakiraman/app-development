import React, { useState, useEffect } from 'react';
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography, IconButton, Rating } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { Delete } from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';
import axios from 'axios'; // Import axios
import '../assets/css/WishlistPage.css';

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const navigate = useNavigate();
  const { isLoggedIn, setRedirectPath } = useAuth();

  useEffect(() => {
    // Retrieve wishlist items from local storage
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlistItems(savedWishlist);
  }, []);

  const handleDeleteClick = (index) => {
    const updatedWishlistItems = wishlistItems.filter((_, i) => i !== index);
    setWishlistItems(updatedWishlistItems);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlistItems));
  };

  const handleBuyNow = (item) => {
    if (isLoggedIn) {
      navigate('/address', { state: { item } });
    } else {
      alert('Please login to buy the product.');
      setRedirectPath('/address');
      localStorage.setItem('redirectPath', '/address');
      localStorage.setItem('buyNowItem', JSON.stringify(item));
      navigate('/login');
    }
  };

  return (
    <div>
      <div className="wishlist" style={{ textAlign: 'center', margin: '20px' }}>
        <h5 className='wishlist-header'>Your Wishlist</h5>
        <h1 className='wishlist-title'>Wishlist Items</h1>
      </div>
      <Box
        sx={{
          backgroundColor: '#fff7cc',
          backgroundSize: 'cover',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        {wishlistItems.length === 0 ? (
          <>
            <Typography variant="h4" style={{ textAlign: 'center', width: '100%' }}>
              Your wishlist is empty!
            </Typography>
            <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
              <Button
                variant="contained"
                color="primary"
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
                onClick={() => navigate('/')}
              >
                Continue Shopping
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Grid container spacing={2} sx={{ padding: '50px' }}>
              {wishlistItems.map((item, index) => (
                <Grid item xs={12} md={3} key={index}>
                  <Card sx={{ 
                    maxWidth: 300, 
                    position: 'relative',
                    margin: '10px',
                    boxShadow: 'none',
                  }}>
                    <Button
                      sx={{
                        backgroundColor: '#F6BE00',
                        fontWeight: 'bold',
                        color: 'black',
                        padding: '10px',
                        fontFamily: 'sans-serif',
                        fontSize: 'medium',
                        width: '100px',
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
                      image={item.imageUrl || 'https://via.placeholder.com/200'} // Use item.imageUrl
                      title={item.productName} // Use item.productName
                    />
                    <IconButton
                      sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        borderColor: '#F6BE00',
                        color: '#F6BE00',
                        '&:hover': {
                          color: '#FFC107',
                        },
                      }}
                      onClick={() => handleDeleteClick(index)}
                    >
                      <Delete />
                    </IconButton>
                    <CardContent className="wishlist-content-custom">
                      <Typography gutterBottom variant="h6" sx={{ fontSize: '17px' }}>
                        {item.productName} {/* Use item.productName */}
                      </Typography>
                      <Typography variant="body2" className="price" style={{ fontWeight: 'bold' }}>
                        Rs.{item.productPrice}.00 {/* Use item.productPrice */}
                      </Typography>
                      <Typography variant="body2" className="old-price" style={{ color: 'red', fontWeight: 'bold', textDecoration: 'line-through' }}>
                        {item.oldPrice ? `Rs.${item.oldPrice}` : ''}
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: '#F6BE00',
                          color: 'black',
                          marginTop: '10px',
                          fontWeight: 'bold',
                          width: '100%',
                          '&:hover': {
                            backgroundColor: '#FFC107',
                            color: 'white',
                          },
                        }}
                        onClick={() => handleBuyNow(item)}
                      >
                        Buy Now
                      </Button>
                      <Rating
                        name={`product-rating-${index}`}
                        value={item.rating || 4} // Default to 4 if item.rating is missing
                        precision={0.5}
                        readOnly
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Box>
    </div>
  );
};

export default WishlistPage;

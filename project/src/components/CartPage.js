import React, { useState, useEffect } from 'react';
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography, IconButton, Rating } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import { Delete } from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';
import '../assets/css/CartPage.css';  // Ensure this file exists and is properly imported

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const { isLoggedIn, setRedirectPath } = useAuth();

  useEffect(() => {
    // Retrieve cart items from local storage
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    // Initialize quantity for each item if not present
    const initializedCart = savedCart.map(item => ({ ...item, quantity: item.quantity || 1 }));
    setCartItems(initializedCart);
  }, []);

  const handleCheckout = () => {
    // Navigate to checkout page
    navigate('/checkout');
  };

  const handleDeleteClick = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const handleQuantityChange = (index, change) => {
    const updatedCartItems = [...cartItems];
    const item = updatedCartItems[index];
    const newQuantity = Math.max(1, item.quantity + change); // Ensure quantity is at least 1
    item.quantity = newQuantity;
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const handleBuyNow = (index) => {
    if (isLoggedIn) {
      navigate('/address');
    } else {
      alert('Please login to buy the product.');
      setRedirectPath('/address');
      navigate('/login');
    }
  };

  return (
    <div>
      <div className="cart" style={{ textAlign: 'center', margin: '20px' }}>
        <h5 className='cart-header'>Your Cart</h5>
        <h1 className='cart-title'>Cart Items</h1>
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
        {cartItems.length === 0 ? (
          <>
            <Typography variant="h4" style={{ textAlign: 'center', width: '100%' }}>
              Your cart is empty!
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
              {cartItems.map((item, index) => (
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
                      sx={{ height: 200, marginTop: '10px' }}
                      image={item.image || 'https://via.placeholder.com/200'} // Fallback image if item.image is missing
                      title={item.title}
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
                    <CardContent className="cart-content-custom">
                      <Typography gutterBottom variant="h6" sx={{ fontSize: '17px' }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" className="price" style={{ fontWeight: 'bold' }}>
                        {item.price}
                      </Typography>
                      <Typography variant="body2" className="old-price" style={{ color: 'red', fontWeight: 'bold', textDecoration: 'line-through' }}>
                        {item.oldPrice}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                        <Button
                          variant="outlined"
                          sx={{ marginRight: '10px', marginLeft: '28px' }}
                          onClick={() => handleQuantityChange(index, -1)}
                        >
                          -
                        </Button>
                        <Typography variant="body2" sx={{ marginRight: '10px' }}>
                          Quantity: {item.quantity}
                        </Typography>
                        <Button
                          variant="outlined"
                          onClick={() => handleQuantityChange(index, 1)}
                        >
                          +
                        </Button>
                      </Box>
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
                        onClick={() => handleBuyNow(index)}
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
            <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
              <Link to='/'>
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
                  onClick={handleCheckout}
                >
                  Continue Shopping
                </Button>
              </Link>
            </Box>
          </>
        )}
      </Box>
    </div>
  );
};

export default CartPage;

import React, { useState, useEffect } from 'react';
import {
  Box, Button, CardMedia, Typography, Rating, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import '../assets/css/CartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const { isLoggedIn, setRedirectPath } = useAuth();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const initializedCart = savedCart.map(item => ({ ...item, quantity: item.quantity || 1 }));
    setCartItems(initializedCart);

    axios.get('http://127.0.0.1:8080/api/products')
      .then(response => {
        // Include product details to calculate total price
        const products = response.data;
        const cartWithProductDetails = initializedCart.map(cartItem => {
          const product = products.find(p => p.id === cartItem.productId);
          return { ...cartItem, productPrice: product.price };
        });
        setCartItems(cartWithProductDetails);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  const handleCheckout = () => {
    if (isLoggedIn) {
      navigate('/checkout');
    } else {
      alert('Please login to proceed to checkout.');
      setRedirectPath('/checkout');
      navigate('/login');
    }
  };

  const handleDeleteClick = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const handleQuantityChange = (index, change) => {
    const updatedCartItems = [...cartItems];
    const item = updatedCartItems[index];
    const newQuantity = Math.max(1, item.quantity + change);
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
            <TableContainer component={Paper} sx={{ marginTop: '20px', marginBottom: '20px', maxWidth: '90%' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Product</TableCell>
                    <TableCell align="center">Price</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="center">Total</TableCell>
                    <TableCell align="center">Rating</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <CardMedia
                            sx={{ width: 150, height: 150, marginRight: '20px' }}
                            image={item.imageUrl}
                            title={item.productName}
                          />
                          <Typography variant="body1">{item.productName}</Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="center">
                        <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                          Rs.{item.productPrice}.00
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Button variant="outlined" onClick={() => handleQuantityChange(index, -1)}>-</Button>
                          <Typography variant="body2" sx={{ margin: '0 10px' }}>{item.quantity}</Typography>
                          <Button variant="outlined" onClick={() => handleQuantityChange(index, 1)}>+</Button>
                        </Box>
                      </TableCell>
                      <TableCell align="center">
                        <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                          Rs.{item.quantity * item.productPrice}.00
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Rating
                          name={`product-rating-${index}`}
                          value={item.rating || 4}
                          precision={0.5}
                          readOnly
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                            <Button
                              variant="contained"
                              sx={{
                                backgroundColor:'#F6BE00',
                                color: 'white',
                                fontWeight: 'bold',
                                '&:hover': {
                                  backgroundColor: '#FFC107',
                                  color: 'black',
                                },
                              }}
                              onClick={() => handleBuyNow(index)}
                            >
                              Buy Now
                            </Button>
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: '#d32f2f', // Red color for delete button
                              color: 'white',
                              fontWeight: 'bold',
                              '&:hover': {
                                backgroundColor: '#b71c1c',
                                color: 'white',
                              },
                            }}
                            onClick={() => handleDeleteClick(index)}
                          >
                            Delete
                          </Button>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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
                  margin:'30px',
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
                Proceed to Checkout
              </Button>
            </Box>
          </>
        )}
      </Box>
    </div>
  );
};

export default CartPage;

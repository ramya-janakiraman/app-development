import React, { useState } from 'react';
import { Box, Button, Typography, Container, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

// Mock data for the items in the cart
const initialItems = [
  {
    id: 1,
    name: 'Winnie The Pooh Tricycle',
    originalPrice: 1999.00,
    discountedPrice: 3990,
    imageUrl: 'https://toyzone.in/cdn/shop/products/Winnie-the-pooh-tricycle8_78193a0d-f5b7-4fa0-883b-ea26507a6fa1_1024x1024@2x.jpg?v=1667827306',
  },
  {
    id: 2,
    name: 'Sponge Bob Mushroom Rider',
    originalPrice: 799,
    discountedPrice: 990,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0654/2445/7966/files/Spongebob_600x.jpg?v=1690616973',
  },
  {
    id: 3,
    name: 'Sando Rider',
    originalPrice: 499,
    discountedPrice: 699,
    imageUrl: 'https://toyzone.in/cdn/shop/products/724477.jpg?v=1667825790',
  },
  {
    id: 4,
    name: 'Cute Animals',
    originalPrice: 199,
    discountedPrice: 299,
    imageUrl: 'https://toyzone.in/cdn/shop/files/IMG_6340_1024x1024@2x.jpg?v=1690629375',
  },
];

const AddToCartPage = () => {
  const [items, setItems] = useState(initialItems);
  const [quantity, setQuantity] = useState(1);

  // Function to handle increment
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to handle decrement
  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  // Function to handle delete
  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="page-container">
      <div className="cart-title" style={{ margin: '20px',textAlign:'center' }}>Your Cart</div>
      <Container>
        {items.length > 0 ? (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: '20px',
              justifyContent: 'center',
            }}
          >
            {items.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  maxWidth: '500px', // Increase the width here
                  height: '500px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  position: 'relative',
                  marginBottom: '20px',
                  padding:'29px'
                }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    marginBottom: '10px',
                    height: '200px',
                    objectFit: 'cover',
                  }}
                />
                <Typography variant="body1" gutterBottom>
                  {item.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <Typography variant="body2" sx={{ fontWeight:'bold',color:'black' }}>
                    Rs.{item.originalPrice}
                  </Typography>
                  <Typography variant="body1" sx={{ textDecoration: 'line-through',fontWeight:'bold',color:'red' }}>
                    Rs.{item.discountedPrice}
                  </Typography>
                </Box>
                <Typography variant="body2" gutterBottom>
                  Quantity: {quantity}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Button
                    variant="contained"
                    onClick={handleDecrement}
                    sx={{
                      backgroundColor: '#F6BE00',
                      color: 'black',
                      '&:hover': { backgroundColor: '#F6BE00' },
                    }}
                  >
                    -
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleIncrement}
                    sx={{
                      backgroundColor: '#F6BE00',
                      color: 'black',
                      '&:hover': { backgroundColor: '#F6BE00' },
                    }}
                  >
                    +
                  </Button>
                </Box>
                <Link to='/payment'>
                <Button
                  variant="contained"
                  sx={{
                    marginTop: '10px',
                    backgroundColor: '#F6BE00',
                    color: 'black',
                    width:'200px',
                    '&:hover': { backgroundColor: '#F6BE00' },
                  }}
                >
                  Buy Now
                </Button>
                </Link>
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    color: '#F6BE00',
                  }}
                  onClick={() => handleDelete(item.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}
          </Box>
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              maxWidth: '300px',
              margin: 'auto',
              border: '1px solid #ddd',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              marginBottom: '150px',
            }}
          >
            <ShoppingCartIcon sx={{ fontSize: '50px', color: '#F6BE00', marginBottom: '20px' }} />
            <Typography variant="h6" gutterBottom>
              Your cart is empty
            </Typography>
          </Box>
        )}
      </Container>
    </div>
  );
};

export default AddToCartPage;

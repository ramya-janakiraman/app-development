import React from 'react';
import DeliveryTracking from './DeliveryTracking';
import { Typography, Container, Paper, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ShippedDeliveryPage = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        
        padding: 2, // Add some padding around the container
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 5,
          backgroundColor: '#F9F6E1',
          width: '800px',
          maxWidth: 800, // Maximum width to prevent it from stretching too wide
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: '#F6BE00' }}>
          Shipped Status
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#333' }}>
          Your order has been shipped and is on its way to you. Below is the delivery tracking information:
        </Typography>
        
        <DeliveryTracking />
        
        {/* Additional information or components related to shipped status */}
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#F6BE00' }}>
            Expected Delivery Date
          </Typography>
          <Typography variant="body1" sx={{ color: '#333' }}>
            Your order is expected to arrive within the next 3-5 business days. Please check back here for updates.
          </Typography>
        </Box>
        
        <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Link to='/contact' style={{ textDecoration: 'none' }}>
            <Button variant="outlined" sx={{ color: '#F6BE00', borderColor: '#F6BE00' }}>
              Contact Support
            </Button>
          </Link>
          <Link to='/order-history' style={{ textDecoration: 'none' }}>
            <Button sx={{ backgroundColor: '#F6BE00', color: '#000' }}>
              Back to Order History
            </Button>
          </Link>
        </Box>
      </Paper>
    </Container>
  );
};

export default ShippedDeliveryPage;

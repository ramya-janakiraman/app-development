import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DeliveryTracking from './DeliveryTracking';
import '../assets/css/OrderTrackingPage.css';

const OrderTrackingPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate();

  const handleBackToOrderHistory = () => {
    navigate('/order-history'); // Navigate to the order history page
  };

  return (
    <div className="order-tracking-page">
      <h1>Order Tracking for Product ID: {id}</h1>
      <DeliveryTracking />
      <p>Your item has been delivered</p>
      <button className="back-button" onClick={handleBackToOrderHistory}>Back to Order History</button>
    </div>
  );
};

export default OrderTrackingPage;

import React from 'react';
import '../assets/css/OrderCard.css'; // Optional: Import CSS for styling

const OrderCard = ({ order }) => {
  return (
    <div className="order-card">
      <div className="order-header">
        <h3>Order ID: {order.id}</h3>
        <p>Date: {new Date(order.date).toLocaleDateString()}</p>
      </div>
      <div className="order-details">
        <div className="product-info">
          <img src={order.productImage} alt={order.productName} className="product-image" />
          <div className="product-details">
            <h4>{order.productName}</h4>
          </div>
        </div>
        <p>Status: {order.status}</p>
        <p>Total: Rs.{order.total.toFixed(2)}</p>
        <div className="tracking-info">
          <h5>Tracking Details</h5>
          <p><strong>Tracking Number:</strong> {order.trackingNumber}</p>
          <p><strong>Carrier:</strong> {order.carrier}</p>
          <p><strong>Tracking Status:</strong> {order.trackingStatus}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;

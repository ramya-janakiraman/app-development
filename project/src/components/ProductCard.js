import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../assets/css/ProductCard.css';
 // Ensure this file contains your styles

const ProductCard = ({ data, goToOrderDetailPage }) => {
  const navigate = useNavigate();

  const handleStatusClick = () => {
    if (data.status === 'Shipped') {
      navigate(`/shipped-delivery/${data.id}`);
    } else if (data.status === 'Cancelled') {
      navigate(`/cancelled-delivery/${data.id}`);
    } else if (data.status === 'Processing') {
      navigate(`/processing-delivery/${data.id}`);
    } else {
      goToOrderDetailPage();
    }
  };

  return (
    <div className="product-card" onClick={handleStatusClick}>
      <div className="product-left">
        <img
          className="product-image"
          src={data.product_img_url}
          alt={data.product_name}
        />
        <div className="product-info">
          <Typography className="product-title">{data.product_name}</Typography>
        </div>
      </div>
      <div className="product-right">
        <Typography className="product-color">Color: {data.color}</Typography>
        <Typography className="product-price">Price: ${data.price}</Typography>
        <Typography className="product-seller">Seller: {data.seller}</Typography>
        <Typography className="product-rating">Rating: {data.rating}</Typography>
        <div className="delivery-status">
          <span className={`status-dot ${data.status.toLowerCase()}`}></span>
          {data.status}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

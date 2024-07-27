import React from 'react';
import OrderCard from './OrderCard'; // Adjust the import path as needed
import '../assets/css/Order.css'; // Optional: Import CSS for styling

const orders = [
  {
    id: '12345',
    date: '2024-07-27T12:34:56Z',
    status: 'Shipped',
    total: 999.99,
    productImage: 'https://toyzone.in/cdn/shop/products/976458.jpg?v=1668512269',
    productName: 'Toy Car',
    trackingNumber: 'ABC123456789',
    carrier: 'FedEx',
    trackingStatus: 'In Transit'
  },
  {
    id: '67890',
    date: '2024-07-26T08:22:34Z',
    status: 'Delivered',
    total: 599.00,
    productImage: 'https://toyzone.in/cdn/shop/products/46_d00bf425-8007-4b84-8327-558af8144740.jpg?v=1668585732',
    productName: 'Action Figure',
    trackingNumber: 'XYZ987654321',
    carrier: 'UPS',
    trackingStatus: 'Delivered'
  },
  {
    id: '11223',
    date: '2024-07-25T14:20:00Z',
    status: 'Processing',
    total: 199.00,
    productImage: 'https://toyzone.in/cdn/shop/products/80213_80206_801905_1024x1024@2x.jpg?v=1667203256',
    productName: 'Building Blocks',
    productDescription: 'Set of 50 building blocks for kids',
    trackingNumber: 'LMN456789012',
    carrier: 'DHL',
    trackingStatus: 'Processing'
  },
  // Add more sample orders here
];

const Order = () => {
  return (
    <div className="order-history-container">
      <h1>Order History</h1>
      <div className="order-card-container">
        {orders.map(order => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Order;

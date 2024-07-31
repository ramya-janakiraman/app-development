// OrderDetails.js
import React, { useState, useEffect } from 'react';
import '../assets/css/OrderDetails.css';

const OrderDetails = () => {
  const [orders, setOrders] = useState([]);

  // Simulate fetching order data from an API
  useEffect(() => {
    // Sample data to simulate API response
    const sampleOrders = [
      
      {
        id: '1',
        customer: {
          name: 'Priyadharshini',
          email: 'priya@example.com',
          address: '456 Elm St, Springfield, IL',
        },
        date: '2023-07-02',
        status: 'Processing',
        total: '$49.99',
      },
      {
        id: '2',
        customer: {
          name: 'Premalatha',
          email: 'prema@example.com',
          address: '789 Oak St, Springfield, IL',
        },
        date: '2023-07-03',
        status: 'Delivered',
        total: '$150.00',
      },
      {
        id: '3',
        customer: {
          name: 'Legavarshini',
          email: 'lega@example.com',
          address: '789 Oak St, Springfield, IL',
        },
        date: '2023-07-03',
        status: 'Delivered',
        total: '$150.00',
      },
    ];

    // Simulate API call delay
    setTimeout(() => {
      setOrders(sampleOrders);
    }, 1000);
  }, []);

  return (
    <div className="order-details-container">
      <h2>Order Details</h2>
      <table className="order-details-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Customer Email</th>
            <th>Customer Address</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer.name}</td>
              <td>{order.customer.email}</td>
              <td>{order.customer.address}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetails;

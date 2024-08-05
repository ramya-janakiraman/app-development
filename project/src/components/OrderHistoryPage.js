import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import '../assets/css/OrderHistoryPage.css';

const orderProduct = [
    {
      id: 1,
      product_name: 'Super Premium Magic Car - Pink',
      color: 'Pink',
      price: 340,
      delivery_date: '30/04/2024',
      product_img_url: 'https://toyzone.in/cdn/shop/products/976458.jpg?v=1668512269',
      seller: 'Toy Store',
      rating: 4,
      status: 'Delivered'
    },
    {
      id: 2,
      product_name: 'Vegga RC Car - Red',
      color: 'Red',
      price: 899,
      delivery_date: '20/05/2024',
      product_img_url: 'https://toyzone.in/cdn/shop/products/54269.jpg?v=1668514009',
      seller: 'Robot World',
      rating: 5,
      status: 'Shipped'
    },
    {
      id: 3,
      product_name: 'Varuna Missile Launcher Truck',
      color: 'Green',
      price: 16999,
      delivery_date: '30/02/2021',
      product_img_url: 'https://toyzone.in/cdn/shop/products/723934.jpg?v=1668491719',
      seller: 'Doll Emporium',
      rating: 3,
      status: 'Processing'
    },
    {
      id: 4,
      product_name: 'Food Fest',
      color: 'Orange',
      price: 549,
      delivery_date: '15/01/2024',
      product_img_url: 'https://toyzone.in/cdn/shop/products/72591.jpg?v=1668585650',
      seller: 'Puzzle Haven',
      rating: 4,
      status: 'Delivered'
    },
    {
      id: 5,
      product_name: 'Fast Cargo',
      color: 'Yellow',
      price: 54999,
      delivery_date: '12/12/2023',
      product_img_url: 'https://toyzone.in/cdn/shop/products/46_d00bf425-8007-4b84-8327-558af8144740.jpg?v=1668585732',
      seller: 'Lego World',
      rating: 5,
      status: 'Cancelled'
    },
    {
      id: 6,
      product_name: 'Dancing Strawberry',
      color: 'Red',
      price: 2999,
      delivery_date: '25/12/2024',
      product_img_url: 'https://toyzone.in/cdn/shop/products/21988_1024x1024@2x.jpg?v=1668494109',
      seller: 'Helicopter Hub',
      rating: 4,
      status: 'Shipped'
    },
    {
      id: 7,
      product_name: 'My Road Runners-Van',
      color: 'SKy Blue',
      price: 799,
      delivery_date: '05/11/2023',
      product_img_url: 'https://toyzone.in/cdn/shop/products/D72515-6_1024x1024@2x.jpg?v=1668491662',
      seller: 'Teddy Bear Land',
      rating: 5,
      status: 'Delivered'
    },
    {
      id: 8,
      product_name: 'Baby Deluxe Bather - Pink',
      color: 'Pink',
      price: 1499,
      delivery_date: '01/08/2023',
      product_img_url: 'https://toyzone.in/cdn/shop/products/13112-B3_d7196418-8949-4fa0-b852-58f43881cf29_1024x1024@2x.png?v=1664260102',
      seller: 'Board Game Shop',
      rating: 4,
      status: 'Processing'
    },
    {
      id: 9,
      product_name: 'Jumbo Rider',
      color: 'Pink',
      price: 2999,
      delivery_date: '20/09/2023',
      product_img_url: 'https://toyzone.in/cdn/shop/products/Jumbo-Rider9_19ba5431-72dc-40a5-9edc-2e25a5d11291_1024x1024@2x.jpg?v=1667824430',
      seller: 'Train World',
      rating: 4,
      status: 'Cancelled'
    },
    {
      id: 10,
      product_name: 'Horse Rider',
      color: 'Red',
      price: 1999,
      delivery_date: '15/10/2023',
      product_img_url: 'https://toyzone.in/cdn/shop/files/IMG_9701_1024x1024@2x.jpg?v=1690618214',
      seller: 'Action Heroes',
      rating: 5,
      status: 'Shipped'
    }
  ];
  
const OrderHistoryPage = () => {
  const navigate = useNavigate();

  const goToOrderDetailPage = (id) => {
    navigate(`/order-tracking/${id}`);
  };

  return (
    <div className="order-history-page">
      <h1 style={{textAlign:'center',margin:'20px',color:'#F6BE00'}}>Order History</h1>
      {orderProduct.map((product) => (
        <ProductCard
          key={product.id}
          data={product}
          goToOrderDetailPage={() => goToOrderDetailPage(product.id)}
        />
      ))}
    </div>
  );
};

export default OrderHistoryPage;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Users from './Users';
import BIChart from './BIChart';
import OrderDetails from './OrderDetails';
import AdminProfile from './AdminProfile';
import ProductForm from './ProductForm'; // Import ProductForm component
import adminIm from '../assets/images/admin-im.webp';
import '../assets/css/AdminDashboard.css';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

function AdminDashboard() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [activeComponent, setActiveComponent] = useState('profile');
  const [adminData, setAdminData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const email = localStorage.getItem('email'); // Fetch email from local storage

        if (!token || !email) {
          console.error('No token or email found. Please log in.');
          navigate('/login');
          return;
        }

        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get(
          `http://127.0.0.1:8080/api/users/readUser/${encodeURIComponent(email)}`,
          config
        );

        const adminData = response.data;

        if (adminData && adminData.roles === 'ADMIN') {
          setAdminData({
            name: adminData.name,
            email: adminData.email,
          });
        } else {
          console.log('Admin data not found.');
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'users':
        return <Users />;
      case 'bichart':
        return <BIChart />;
      case 'orderdetails':
        return <OrderDetails />;
      case 'profile':
        return <AdminProfile />;
      case 'addProduct': // Add new case for the product form
        return <ProductForm />;
      default:
        return <AdminProfile />;
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <div className="admin-profile">
          <Link to="#" onClick={() => setActiveComponent('profile')} className="edit-profile-link">
            <img src={adminIm} alt="Admin" className="admin-image" />
          </Link>
          <h2 style={{ color: '#F6BE00' }}>{adminData.name}</h2>
        </div>
        <ul>
          <li><Link to="#" onClick={() => setActiveComponent('users')}>Total Users</Link></li>
          <li><Link to="#" onClick={() => setActiveComponent('bichart')}>BI Chart</Link></li>
          <li><Link to="#" onClick={() => setActiveComponent('orderdetails')}>Order Details</Link></li>
          <li><Link to="#" onClick={() => setActiveComponent('addProduct')}>Add Product</Link></li> {/* Add link for product form */}
        </ul>
        <button onClick={handleLogout} className="logout-button" style={{backgroundColor:'#F6BE00'}}>Logout</button>
      </div>
      <div className="main-content">
        {renderComponent()}
      </div>
    </div>
  );
}

export default AdminDashboard;

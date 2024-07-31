import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Users from './Users';
import BIChart from './BIChart';
import OrderDetails from './OrderDetails';
import AdminProfile from './AdminProfile'; // Import AdminProfile component
import adminIm from '../assets/images/admin-im.webp';
import '../assets/css/AdminDashboard.css';
import { useAuth } from '../context/AuthContext';

function AdminDashboard() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [activeComponent, setActiveComponent] = useState('users');

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
        return <AdminProfile />; // Render AdminProfile component
      case 'admineditprofile':
        return <AdminProfile />; // Render AdminProfile component for editing
      default:
        return <Users />;
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <div className="admin-profile">
          <Link to="#" onClick={() => setActiveComponent('profile')} className="edit-profile-link">
            <img src={adminIm} alt="Admin" className="admin-image" />
          </Link>
          <h2 style={{ color: '#F6BE00' }}>Ramya Janakiraman</h2>
        </div>
        <ul>
          <li><Link to="#" onClick={() => setActiveComponent('users')}>Total Users</Link></li>
          <li><Link to="#" onClick={() => setActiveComponent('bichart')}>BI Chart</Link></li>
          <li><Link to="#" onClick={() => setActiveComponent('orderdetails')}>Order Details</Link></li>
          
        </ul>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
      <div className="main-content">
        {renderComponent()}
      </div>
    </div>
  );
}

export default AdminDashboard;

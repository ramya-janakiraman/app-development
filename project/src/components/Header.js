import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Header.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const Header = ({ cartItemCount }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    navigate('/profile');
    handleClose();
  };

  const handleLogout = () => {
    // Clear user authentication data
    // Example: localStorage.removeItem('authToken');
    // Redirect to login or home page
    navigate('/login');  // Assuming you redirect to login page after logout
    handleClose();
  };

  return (
    <div>
      <div className='home-container'>
        <div className="left-content">
          <i className="fa fa-envelope"></i>
          <h3>support@toyzone.in</h3>
        </div>
        <h4>100% Replacement Available T&C Applied</h4>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
      <header className="header">
        <div className="logo">
          <img src="https://toyzone.in/cdn/shop/files/logo.png?v=1658730951" alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/contact">Support</Link></li>
          </ul>
        </nav>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
          <div className="icons">
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>{cartItemCount}</span>
            </Link>
            <i className="fas fa-heart"></i>
          </div>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <Toolbar>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                className="profile-icon"
                sx={{color:'black'}}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Log Out</MenuItem>
              </Menu>
            </Toolbar>
          </AppBar>
        </Box>
      </header>
    </div>
  );
};

export default Header;

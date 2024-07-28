import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Header.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';

const Header = ({ isLoggedIn, setIsLoggedIn, cartItemCount, search, setSearch }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openCategoriesDialog, setOpenCategoriesDialog] = useState(false);
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

  const handleWishListClick = () => {
    navigate('/wish');
    handleClose();
  };

  const handleOrderClick = () => {
    navigate('/order');
    handleClose();
  };

  const handleLogoutDialogOpen = () => {
    setOpenDialog(true);
    handleClose();
  };

  const handleLogoutConfirm = () => {
    // Clear user authentication data
    // Example: localStorage.removeItem('authToken');
    // Update login status
    setIsLoggedIn(false);
    // Redirect to login page
    navigate('/');
    setOpenDialog(false);
  };

  const handleLogoutCancel = () => {
    setOpenDialog(false);
  };

  const handleCategoriesClick = (event) => {
    event.preventDefault();
    setOpenCategoriesDialog(true);
  };

  const handleCategoriesDialogClose = () => {
    setOpenCategoriesDialog(false);
  };

  return (
    <div>
      <div className="home-container">
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
            {isLoggedIn ? (
              <li><a href="#" onClick={handleCategoriesClick}>Categories</a></li>
            ) : (
              <li><Link to="/login">Login</Link></li>
            )}
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Support</Link></li>
          </ul>
        </nav>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
          <div className="icons">
            <Link to="/cart">
              <i className="fas fa-shopping-cart add-to-cart-icon"></i>
              <span>4</span>
            </Link>
            <Link to="/wish">
              <i className="fas fa-heart wishlist-icon"></i>
              <span>5</span>
            </Link>
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
                sx={{ color: 'black' }}
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
                {isLoggedIn ? (
                  <>
                    <MenuItem onClick={handleProfileClick}>My Profile</MenuItem>
                    <MenuItem onClick={handleWishListClick}>WishList</MenuItem>
                    <MenuItem onClick={handleOrderClick}>Your Orders</MenuItem>
                    <MenuItem onClick={handleLogoutDialogOpen}>Log Out</MenuItem>
                  </>
                ) : (
                  <MenuItem onClick={() => navigate('/login')}>Login</MenuItem>
                )}
              </Menu>
            </Toolbar>
          </AppBar>
        </Box>
      </header>

      {/* Logout Confirmation Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleLogoutCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to log out?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleLogoutCancel} color="primary">
            No
          </Button>
          <Button onClick={handleLogoutConfirm} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      {/* Categories Dialog */}
      <Dialog
        open={openCategoriesDialog}
        onClose={handleCategoriesDialogClose}
        aria-labelledby="product-category-dialog-title"
        aria-describedby="product-category-dialog-description"
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent background with white overlay
            boxShadow: 'none',
            borderRadius: '10px',
          },
        }}
      >
        <DialogTitle id="product-category-dialog-title">
          {"Product Categories"}
        </DialogTitle>
        <DialogContent>
          <ul>
            <li><Link to="/category" className="dialog-link">All Categories</Link></li>
            <li><Link to="/ride" className="dialog-link">Ride-on Toys</Link></li>
            <li><Link to="/doll" className="dialog-link">Doll Houses</Link></li>
            <li><Link to="/gun" className="dialog-link">Guns</Link></li>
            <li><Link to="/baby" className="dialog-link">Baby Walker</Link></li>
            <li><Link to="/edu" className="dialog-link">Educational</Link></li>
            <li><Link to="/music" className="dialog-link">Musical Instrument</Link></li>
            <li><Link to="/newarrival" className="dialog-link">New Arrivals</Link></li>
          </ul>
        </DialogContent>
        <DialogTitle id="product-category-dialog-title">
          {"Shop By Age"}
        </DialogTitle>
        <DialogContent>
          <ul>
          <li><Link to="/threeage" className="dialog-link">0 - 3 Years</Link></li>
          <li><Link to="/eightage" className="dialog-link">3 - 8 Years</Link></li>
          <li><Link to="/lastage" className="dialog-link">8+ Years</Link></li>
          </ul>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCategoriesDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      
    </div>
  );
};

export default Header;

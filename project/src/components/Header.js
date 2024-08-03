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
import { useAuth } from '../context/AuthContext';

const Header = ({ cartItemCount, wishItemCount, search, setSearch }) => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openCategoriesDialog, setOpenCategoriesDialog] = useState(false);
  const [searchQuery, setSearchQuery] = useState(search);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [showNotFound, setShowNotFound] = useState(false); // New state for not found alert
  const navigate = useNavigate();

  const categoryMap = {
    'new arrival': '/newarrival',
    'ride-on toys': '/ride',
    'doll houses': '/doll',
    'guns': '/gun',
    'baby walker': '/baby',
    'educational': '/edu',
    'musical instrument': '/music',
    'all categories': '/category',
    '0-3 years': '/threeage',
    '3-8 years': '/eightage',
    '8+ years': '/lastage',
  };

  const categories = Object.keys(categoryMap);

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
    setIsLoggedIn(false);
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

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      const filtered = categories.filter((category) =>
        category.toLowerCase().includes(query.trim().toLowerCase())
      );
      setFilteredCategories(filtered);
      setShowNotFound(filtered.length === 0); // Show "not found" if no categories match
    } else {
      setFilteredCategories([]);
      setShowNotFound(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const lowerCaseQuery = searchQuery.trim().toLowerCase();

    if (searchQuery.trim() === '') {
      alert('Please enter a category to search.');
      return;
    }

    if (categoryMap[lowerCaseQuery]) {
      navigate(categoryMap[lowerCaseQuery]);
      setSearchQuery('');
      setFilteredCategories([]);
      setShowNotFound(false); // Ensure "not found" is hidden when navigating to a valid category
    } else {
      alert('No categories found for your search.');
      setShowNotFound(true); // Show "not found" alert if the category is not available
    }
  };

  const handleCategorySelect = (category) => {
    setSearchQuery(category);
    setFilteredCategories([]);
    setShowNotFound(false); // Hide "not found" alert when a category is selected
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
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="submit">Search</button>
          </form>
          {filteredCategories.length > 0 && (
            <ul className="filtered-categories">
              {filteredCategories.map((category) => (
                <li key={category} onClick={() => handleCategorySelect(category)}>
                  {category}
                </li>
              ))}
            </ul>
          )}
          {showNotFound && (
            <div className="not-found">No categories found.</div>
          )}
          <div className="icons">
            <Link to="/cart" className="cart-icon">
              <i className="fas fa-shopping-cart add-to-cart-icon"></i>
              {cartItemCount > 0 && (
                <span className="cart-count">{cartItemCount}</span>
              )}
            </Link>
            <Link to="/wish" className="wishlist-icon">
              <i className="fas fa-heart wishlist-icon"></i>
              {wishItemCount > 0 && (
                <span className="wishlist-count">{wishItemCount}</span>
              )}
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
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
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

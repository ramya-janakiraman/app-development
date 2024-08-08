import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'; // Import axios
import '../assets/css/Login.css';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { useAuth } from '../context/AuthContext';

function Login() {
  const { setIsLoggedIn, setIsAdmin, redirectPath, setRedirectPath } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState({ email: '', password: '' });
  const [openDialog, setOpenDialog] = useState(false);
  const [openCategoriesDialog, setOpenCategoriesDialog] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: '' });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = {};

    if (formData.email.trim() === '') {
      formErrors.email = 'Enter Email';
    } else if (!validateEmail(formData.email)) {
      formErrors.email = 'Enter a valid Email';
    }

    if (formData.password.trim() === '') {
      formErrors.password = 'Enter Password';
    } else if (formData.password.length < 5) {
      formErrors.password = 'Password must be at least 5 characters long';
    }

    if (Object.keys(formErrors).length > 0) {
      setError(formErrors);
    } else {
      try {
        const response = await axios.post("http://127.0.0.1:8080/api/auth/authenticate", formData);
        console.log(response);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        const role = localStorage.getItem("role");
        setIsLoggedIn(true);
        
        if (role === "ADMIN") {
          setIsAdmin(true);
          navigate("/admin");
        } else {
          setOpenDialog(true);
          setOpenCategoriesDialog(true);
        }
      } catch (error) {
        console.error(error);
        setError({ email: 'Invalid email or password', password: '' });
      }
    }
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    navigate('/category');
  };

  const handleCategoriesDialogClose = () => {
    setOpenCategoriesDialog(false);
  };

  const handleSuccessfulLogin = () => {
    setOpenDialog(false);
    navigate(redirectPath || '/category');
    setRedirectPath(null); // Clear the redirect path after using it
  };

  return (
    <div className="bg-img">
      <img src="https://toyzone.in/cdn/shop/t/6/assets/login-image.png?v=169142696570253652631663858988" className="log-img" alt="Login" />
      <div className="content">
        <header>Login Now</header>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <span className="fa fa-user"></span>
            <input 
              type="email" 
              placeholder="Enter Email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
            />
            {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
          </div>
          <div className="field space">
            <span className="fa fa-lock"></span>
            <input 
              type="password" 
              placeholder="Enter Password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange}
            />
            {error.password && <p style={{ color: 'red' }}>{error.password}</p>}
          </div>
          <div className="pass">
            <a href="#">Forgot Password?</a>
          </div>
          <div className="field">
            <input type="submit" value="LOGIN" />
          </div>
        </form>
        <br />
        <div className="signup">
          Don't have an account?
          <Link to="/signup">Signup Now</Link>
        </div>
      </div>

      {/* Product Category Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
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
        <DialogActions>
          <Button onClick={handleSuccessfulLogin} color="primary">
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Login;

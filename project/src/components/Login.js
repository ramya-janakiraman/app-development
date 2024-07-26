import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../assets/css/Login.css';
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = {};
    if (formData.email.trim() === "") {
      formErrors.email = "Enter Email";
    }
    if (formData.password.trim() === "") {
      formErrors.password = "Enter Password";
    }
    if (Object.keys(formErrors).length > 0) {
      setError(formErrors);
    } else {
      // Proceed with login logic
      console.log(formData);
      // Redirect to the category page after successful login
      navigate('/category'); // Change '/category' to the desired path
    }
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
            {error.email && <p style={{ color: "red" }}>{error.email}</p>}
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
            {error.password && <p style={{ color: "red" }}>{error.password}</p>}
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
    </div>
  );
}

export default Login;

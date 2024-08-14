import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function SignUp() {
  const apiurl = "http://127.0.0.1:8080/api/users/createUser";
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = {};

    if (formData.name.trim() === "") {
      formErrors.name = "Enter Name";
    }
    if (formData.email.trim() === "") {
      formErrors.email = "Enter Email";
    }
    if (formData.password.trim() === "") {
      formErrors.password = "Enter Password";
    }
    if (formData.confirmPassword.trim() === "") {
      formErrors.confirmPassword = "Confirm Password";
    } else if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
    }

    setError(formErrors);

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await axios.post(apiurl, {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          roles: "USER", // Changed to USER role
        });

        if (response.status === 201) { // Assuming 201 Created status for successful signup
          const { uid } = response.data; // Get uid from response

          // Save uid, email, and password to localStorage
          localStorage.setItem("uid", uid);
          localStorage.setItem("email", formData.email);
          localStorage.setItem("password", formData.password);

          alert("User registered successfully");
          navigate('/login');
        }
      } catch (error) {
        if (error.response && error.response.status === 409) { // Handle duplicate user error
          alert("User already exists. Please log in.");
        } else {
          console.error(error);
          alert("An error occurred during registration. Please try again later.");
        }
      }
    }
  };

  return (
    <div className="bg-img">
      <img src="https://toyzone.in/cdn/shop/t/6/assets/login-image.png?v=169142696570253652631663858988" className="log-img" alt="Sign Up" />
      <div className="content">
        <header>Signup Now</header>
        <form className="signup" onSubmit={handleSubmit}>
          <div className="field">
            <span className="fa fa-user"></span>
            <input
              type="text"
              placeholder="User Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {error.name && <p style={{ color: "red" }}>{error.name}</p>}
          </div>
          <div className="field space">
            <span className="fa fa-envelope"></span>
            <input
              type="email"
              placeholder="Email"
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
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {error.password && <p style={{ color: "red" }}>{error.password}</p>}
          </div>
          <div className="field space">
            <span className="fa fa-lock"></span>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {error.confirmPassword && <p style={{ color: "red" }}>{error.confirmPassword}</p>}
          </div>
          <br />
          <div className="field">
            <input type="submit" value="SIGNUP" />
          </div>
        </form>
        <br />
        <div className="signup">
          Already have an account?
          <Link to="/login">Login Now</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

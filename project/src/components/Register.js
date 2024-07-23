import { useState } from "react";
import '../assets/css/Register.css'; // Ensure you have the CSS file in the correct path

function Register() {
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: "" });
  };

  const handleSubmit = (event) => {
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
    console.log(formData);

    if (Object.keys(formErrors).length === 0) {
      window.location.href = "login.html"; // Redirect on successful validation
    }
  };

  return (
    <div className="bg-img">
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
        </form><br></br>
        <div className="signup">
          Already have an account?
          <a href="login.html">Login Now</a>
        </div>
      </div>
    </div>
  );
}

export default Register;

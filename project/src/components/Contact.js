import React, { useState } from 'react';
import '../assets/css/Contact.css';  // Assuming you have a separate CSS file for styling
import { useNavigate } from 'react-router-dom';

function ContactUs() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    // Add form submission logic here
  };

  const handleOk = () => {
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(false);
    navigate('/');  // Navigate to the home page
  };
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
      </header>
      {submitted ? (
        <div className="thank-you-message">
          <h2>Thank you for contacting us!</h2>
          <p>We will get back to you soon.</p>
          <button onClick={handleOk}>OK</button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
}

export default ContactUs;

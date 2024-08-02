import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Feedback.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    rating: '',
    description: '',
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    // Here you can add the logic to send the feedback to the backend or API
    let alertMessage = '';
    switch (formData.rating) {
      case '1':
        alertMessage = 'We are sorry to hear that you had a poor experience.';
        break;
      case '2':
        alertMessage = 'Thank you for your feedback. We will strive to improve.';
        break;
      case '3':
        alertMessage = 'Thank you! We appreciate your feedback.';
        break;
      case '4':
        alertMessage = 'Thank you for your feedback! We are glad you had a good experience.';
        break;
      case '5':
        alertMessage = 'Thank you for your excellent rating! We are thrilled to hear you had a great experience.';
        break;
      default:
        alertMessage = 'Thank you for your feedback!';
    }
    window.alert(alertMessage);
    setFormData({
      rating: '',
      description: '',
    });
    navigate('/');
  };

  return (
    <div className="feedback-form-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          >
            <option value="">Select a rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;

// src/components/Feedback.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Feedback.css';

const Feedback = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event) => {
    setRating(event.target.id);
  };

  const handleSubmit = () => {
    let message = '';
    switch (rating) {
      case 'rating1':
        message = 'Thank you for your feedback! We are sorry that you had a poor experience.';
        break;
      case 'rating2':
        message = 'Thank you for your feedback! We appreciate your suggestions for improvement.';
        break;
      case 'rating3':
        message = 'Thank you for your feedback! We hope to make your next experience even better.';
        break;
      case 'rating4':
        message = 'Thank you for your feedback! We are glad you had a good experience.';
        break;
      case 'rating5':
        message = 'Thank you for your feedback! We are thrilled that you had a great experience!';
        break;
      default:
        message = 'Please select a rating before submitting your feedback.';
    }
    alert(message);
  };

  return (
    <div className='feedback-container'>
      <div className="rating-css">
        <div>Feedback Form</div>
        <div className="star-icon">
          <input type="radio" name="rating" id="rating1" onChange={handleRatingChange} />
          <label htmlFor="rating1" className="fa fa-star"></label>
          <input type="radio" name="rating" id="rating2" onChange={handleRatingChange} />
          <label htmlFor="rating2" className="fa fa-star"></label>
          <input type="radio" name="rating" id="rating3" onChange={handleRatingChange} />
          <label htmlFor="rating3" className="fa fa-star"></label>
          <input type="radio" name="rating" id="rating4" onChange={handleRatingChange} />
          <label htmlFor="rating4" className="fa fa-star"></label>
          <input type="radio" name="rating" id="rating5" onChange={handleRatingChange} />
          <label htmlFor="rating5" className="fa fa-star"></label>
          <button type="submit" className="btn" onClick={handleSubmit}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Submit</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

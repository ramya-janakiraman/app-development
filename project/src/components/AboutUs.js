import React from 'react';
import '../assets/css/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
      </div>
      <div className="about-content">
        <div className="about-section">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Welcome to ToyZone, your number one source for all things toys. We're dedicated to giving you the very best of toys, with a focus on quality, customer service, and uniqueness.
            </p>
          </div>
        </div>
        <div className="about-section">
          <div className="about-text">
            <h2>Our Vision</h2>
            <p>
              Our vision is to bring joy and happiness to children through our carefully selected range of toys. We believe in the power of play to foster creativity, imagination, and growth in children.
            </p>
          </div>
        </div>
        <div className="about-section">
          <div className="about-text">
            <h2>Our Team</h2>
            <p>
              Our dedicated team works tirelessly to ensure that we provide the best toys and customer service possible. We are a team of passionate individuals who love what we do and strive to bring the best to our customers.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AboutUs;

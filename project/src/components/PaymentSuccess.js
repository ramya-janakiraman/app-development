import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const handleDoneClick = () => {
    navigate('/feedback');
  };

  return (
    <div style={{ textAlign: 'center',margin:'20px'}}>
      <div className="success-container">
        <div className="success-message">
          <img src={"https://i.pinimg.com/originals/0d/cd/6f/0dcd6f4e410a34465a2d611913199e50.gif"} alt="Success" style={{ height: '300px', width: '300px' }} />
          <h1 style={{ color: '#F6BE00', marginBottom: '20px' }}>Payment Successful!</h1>
          <p style={{ color: '#333', marginBottom: '15px' }}>
            Thank you for your purchase. Your transaction has been completed.
          </p>
          <Link to='/feedback'>
          <button
            onClick={handleDoneClick}
            style={{
              height: '40px',
              width: '80px',
              borderRadius: '10px',
              border: 'none',
              backgroundColor: '#F6BE00',
              color: 'white',
            }}
          >
            DONE
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;

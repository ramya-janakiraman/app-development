import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../assets/css/Payment.css';

const Payment = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    onlinePaymentDetails: '',
    bankAccount: '',
    paymentMethod: 'creditCard' // Default payment method
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const formErrors = {};
    if (paymentDetails.paymentMethod === 'creditCard') {
      if (!paymentDetails.cardNumber) formErrors.cardNumber = "Card number is required";
      if (!paymentDetails.cardName) formErrors.cardName = "Cardholder name is required";
      if (!paymentDetails.expiryDate) formErrors.expiryDate = "Expiry date is required";
      if (!paymentDetails.cvv) formErrors.cvv = "CVV is required";
    } else if (paymentDetails.paymentMethod === 'onlinePayment') {
      if (!paymentDetails.onlinePaymentDetails) formErrors.onlinePaymentDetails = "UPI ID is required";
    } else if (paymentDetails.paymentMethod === 'bankTransfer') {
      if (!paymentDetails.bankAccount) formErrors.bankAccount = "Bank account number is required";
    }

    return formErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      if (
        paymentDetails.cardName === 'ramya' &&
        paymentDetails.cardNumber === '1234567890' &&
        paymentDetails.cvv === '123' &&
        paymentDetails.expiryDate === '04/2024'
      ) {
        navigate("/success");
      } else if (paymentDetails.paymentMethod === 'creditCard') {
        if (paymentDetails.cardName !== 'ramya') {
          alert('Payment failed. Please check your card name and try again.');
        } else if (paymentDetails.cardNumber !== '1234567890') {
          alert('Payment failed. Please check your card number and try again.');
        } else if (paymentDetails.cvv !== '123') {
          alert('Payment failed. Please check your CVV and try again.');
        } else if (paymentDetails.expiryDate !== '04/2024') {
          alert('Payment failed. Please check your expiry date and try again.');
        }
      } else if (paymentDetails.paymentMethod === 'onlinePayment') {
        if (paymentDetails.onlinePaymentDetails !== 'ramya@0314') { // Replace 'valid_upi_id' with actual validation logic
          alert('Payment failed. Please check your UPI ID and try again.');
        } else {
          
          navigate("/success");
        }
      } else if (paymentDetails.paymentMethod === 'bankTransfer') {
        if (paymentDetails.bankAccount !== '1234567890') { // Replace 'valid_account_number' with actual validation logic
          alert('Payment failed. Please check your bank account number and try again.');
        } else {
          navigate("/success");
        }
      }
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
          <label>Payment Method</label>
          <div className="payment-methods">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                checked={paymentDetails.paymentMethod === 'creditCard'}
                onChange={handleChange}
              />
              Credit Card
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="onlinePayment"
                checked={paymentDetails.paymentMethod === 'onlinePayment'}
                onChange={handleChange}
              />
              Online Payment
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="bankTransfer"
                checked={paymentDetails.paymentMethod === 'bankTransfer'}
                onChange={handleChange}
              />
              Bank Transfer
            </label>
          </div>
        </div>

        {paymentDetails.paymentMethod === 'creditCard' && (
          <>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={handleChange}
                className={errors.cardNumber ? 'error' : ''}
              />
              {errors.cardNumber && <p className="error-message">{errors.cardNumber}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="cardName">Cardholder Name</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={paymentDetails.cardName}
                onChange={handleChange}
                className={errors.cardName ? 'error' : ''}
              />
              {errors.cardName && <p className="error-message">{errors.cardName}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={paymentDetails.expiryDate}
                onChange={handleChange}
                className={errors.expiryDate ? 'error' : ''}
              />
              {errors.expiryDate && <p className="error-message">{errors.expiryDate}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handleChange}
                className={errors.cvv ? 'error' : ''}
              />
              {errors.cvv && <p className="error-message">{errors.cvv}</p>}
            </div>
          </>
        )}

        {paymentDetails.paymentMethod === 'onlinePayment' && (
          <div className="form-group">
            <label htmlFor="onlinePaymentDetails">UPI ID</label>
            <input
              type="text"
              id="onlinePaymentDetails"
              name="onlinePaymentDetails"
              value={paymentDetails.onlinePaymentDetails}
              onChange={handleChange}
              className={errors.onlinePaymentDetails ? 'error' : ''}
            />
            {errors.onlinePaymentDetails && <p className="error-message">{errors.onlinePaymentDetails}</p>}
          </div>
        )}

        {paymentDetails.paymentMethod === 'bankTransfer' && (
          <div className="form-group">
            <label htmlFor="bankAccount">Bank Account Number</label>
            <input
              type="text"
              id="bankAccount"
              name="bankAccount"
              value={paymentDetails.bankAccount}
              onChange={handleChange}
              className={errors.bankAccount ? 'error' : ''}
            />
            {errors.bankAccount && <p className="error-message">{errors.bankAccount}</p>}
          </div>
        )}
        <button type="submit" className="payment-button">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;

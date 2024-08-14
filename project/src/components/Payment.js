import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Payment.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const Payment = () => {
  const apiurl = 'http://127.0.0.1:8080/api/payment';
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    cvv: '',
    expiryDate: '',
  });

  const [error, setError] = useState({
    name: '',
    cardNumber: '',
    cvv: '',
    expiryDate: '',
    general: ''
  });

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: '', general: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = {};

    if (formData.name.trim() === '') {
      formErrors.name = 'Enter Name on Card';
    }
    if (formData.cardNumber.trim() === '' || !/^\d{16}$/.test(formData.cardNumber)) {
      formErrors.cardNumber = 'Enter a valid 16-digit Card Number';
    }
    if (formData.cvv.trim() === '' || !/^\d{3,4}$/.test(formData.cvv)) {
      formErrors.cvv = 'Enter a valid CVV (3 or 4 digits)';
    }
    if (formData.expiryDate.trim() === '' || !/^(0[1-9]|1[0-2])\/\d{4}$/.test(formData.expiryDate)) {
      formErrors.expiryDate = 'Enter a valid Expiry Date (MM/YYYY)';
    }

    if (Object.keys(formErrors).length > 0) {
      setError(formErrors);
      return;
    }

    try {
      const response = await axios.post(
        apiurl,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          }
        }
      );

      if (response.status === 201 || response.status === 200) {
        alert('Your payment was successfully submitted');
        navigate('/success');
      }
    } catch (error) {
      console.error('Payment Submission Error:', error);
      const errorMessage =
        error.response?.status === 401
          ? 'Unauthorized. Please check your details and try again.'
          : 'Payment submission failed. Please try again later.';
      setError((prevError) => ({ ...prevError, general: errorMessage }));
    }
  };

  return (
    <Container className="payment-container my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="payment-form-container p-4 border rounded shadow-sm">
            <h2 className="text-center mb-4">Payment</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name" className="mb-3">
                <Form.Label>Name on Card</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!error.name}
                />
                <Form.Control.Feedback type="invalid">
                  {error.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="cardNumber" className="mb-3">
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="0000-0000-0000-0000"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  isInvalid={!!error.cardNumber}
                />
                <Form.Control.Feedback type="invalid">
                  {error.cardNumber}
                </Form.Control.Feedback>
              </Form.Group>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="cvv">
                    <Form.Label>CVV</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="CVV"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      isInvalid={!!error.cvv}
                    />
                    <Form.Control.Feedback type="invalid">
                      {error.cvv}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="expiryDate">
                    <Form.Label>Expiry Date</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="MM/YYYY"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      isInvalid={!!error.expiryDate}
                    />
                    <Form.Control.Feedback type="invalid">
                      {error.expiryDate}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              {error.general && (
                <Alert variant="danger">
                  {error.general}
                </Alert>
              )}

              <Button type="submit" variant="warning" className="w-100">
                Pay Now
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Payment;

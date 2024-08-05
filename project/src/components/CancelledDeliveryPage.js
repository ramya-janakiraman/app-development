import React from 'react';

const CancelledDeliveryPage = () => {
  return (
    <div style={{textAlign:'center',margin:'70px'}}>
      <h1>Cancelled Status</h1>
      <p>We're sorry, but your order has been cancelled.</p>
      {/* Add specific details or components related to cancelled status */}
      <p>If you have any questions or need assistance, please contact our support team.</p>
      <button onClick={() => window.location.href = '/order-history'}>Back to Order History</button>
    </div>
  );
};

export default CancelledDeliveryPage;

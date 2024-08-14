import React from 'react';

const ProcessingDeliveryPage = () => {
  return (
    <div style={{textAlign:'center',margin:'90px'}}>
      <h1>Processing Status</h1>
      <p>Your order is currently being processed. We will update you as soon as it is shipped.</p>
      {/* Add specific details or components related to processing status */}
      <button onClick={() => window.location.href = '/order-history'}>Back to Order History</button>
    </div>
  );
};

export default ProcessingDeliveryPage;

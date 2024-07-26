import React, { useState } from 'react';
import styled from 'styled-components';
import PayPalButton from './PayPalButton';

const Container = styled.div`
    border: 2px solid red;
    min-height: 150px;
    margin-top: 120px;
`;

function PayPalTest() {
  const [amount, setAmount] = useState('1.00');

  const handlePaymentSuccess = (details) => {
    console.log('Payment successful:', details);
    // Send payment details to the backend
    /*
    fetch('/api/paypal/transaction-complete', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(details)
    });
    */
  };


  return (
    <Container>
    
        PayPalTest

        <div style={{width: "300px", margin: "20px auto"}}>
          <h1>Pay with PayPal</h1>
          <PayPalButton amount={amount} onSuccess={handlePaymentSuccess} />
        </div>
    
    </Container>
  )
}

export default PayPalTest;


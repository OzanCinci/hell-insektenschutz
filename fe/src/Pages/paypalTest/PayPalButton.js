import React from 'react';
import styled from 'styled-components';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

//const paypalClientID = process.env.REACT_APP_PAYPAL_CLIENT_ID_SANDBOX;
const paypalClientID = process.env.REACT_APP_PAYPAL_CLIENT_ID_LIVE;
const initialOptions = {
    clientId: paypalClientID,
    currency: "EUR",
    intent: "capture",
    locale: "de_DE",
};

const Container = styled.div`
    position: relative;
    z-index: 10;
`;

function PayPalButton({ amount, onSuccess }) {
    return (
        <Container>
            <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
                style={{
                    layout: 'vertical',   // or 'horizontal'
                    color: 'blue',        // or 'gold', 'silver', 'white', 'black'
                    shape: 'rect',        // or 'pill'
                    label: 'buynow',      // or 'checkout', 'pay', 'buynow', 'installment'
                    height: 40            // number between 25 and 55
                  }}
                createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                    amount: {
                        value: amount,
                        currency_code: "EUR",
                    }
                    }]
                });
                }}
                onApprove={(data, actions) => {
                return actions.order.capture().then(details => {
                    onSuccess(details);
                });
                }}
            />
            </PayPalScriptProvider>
        </Container>
      );
}

export default PayPalButton;

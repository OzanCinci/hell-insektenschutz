import React, { useEffect } from "react";

const beautifyTraceCode = (traceCode) =>
    `${traceCode.slice(0, 3)}-${traceCode.slice(3, 6)}-${traceCode.slice(6, 9)}`;

const beautifyPrice = (shippingPrice, price) =>
    (shippingPrice + price).toFixed(2);

const beautifyEstimatedDeliveryDate8DaysLater = () =>
    new Date(Date.now() + 8 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

const beautifyEstimatedDeliveryDate = () =>
    new Date().toISOString().split("T")[0];

function TrustedShopsReviewBuilder({ data }) {
    useEffect(() => {
        if (!data) return;

        const waitForTrustbadge = () => {
            if (window.trustbadge?.load) {
                window.trustbadge.load();
                window.trustbadge.reInitialize();
            } else {
                setTimeout(waitForTrustbadge, 100);
            }
        };

        const domReadyTimeout = setTimeout(waitForTrustbadge, 300);

        return () => clearTimeout(domReadyTimeout);
    }, [data]);

    if (!data) return null;

    return (
        <div id="trustedShopsCheckout" style={{ display: "none" }}>
            <span id="tsCheckoutOrderNr">{beautifyTraceCode(data.traceCode)}</span>
            <span id="tsCheckoutBuyerEmail">{data.userEmail}</span>
            <span id="tsCheckoutOrderAmount">
                {beautifyPrice(data.shippingPrice, data.price)}
            </span>
            <span id="tsCheckoutOrderCurrency">EUR</span>
            <span id="tsCheckoutOrderPaymentType">VORKASSE</span>
            <span id="tsCheckoutOrderEstDeliveryDate">{beautifyEstimatedDeliveryDate8DaysLater()}</span>
        </div>
    );
}

export default TrustedShopsReviewBuilder;

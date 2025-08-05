import { CheckoutHeader } from './CheckoutHeader'
import './CheckoutPage.css'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { OrderSummary } from './OrderSummary.jsx';
import { PaymentSummary } from './PaymentSummary.jsx';

export function CheckoutPage({ cartItems }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const[paymentSummary, setPaymentSummary] = useState(null);

    useEffect(() => {
        axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            .then((response) => {
                setDeliveryOptions(response.data);
            });

        axios.get('/api/payment-summary')
            .then((response) => {
                setPaymentSummary(response.data);
            });
    }, []);


    return (
        <>
            <title>Checkout</title>
            <link rel="icon" type="image/svg+xml" href="/cart-favicon.png" />
            <CheckoutHeader />
            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary cartItems={cartItems} deliveryOptions={deliveryOptions} />

                    <PaymentSummary paymentSummary={paymentSummary} />
                </div>
            </div>
        </>
    )
}
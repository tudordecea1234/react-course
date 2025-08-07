import { CheckoutHeader } from './CheckoutHeader'
import './CheckoutPage.css'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { OrderSummary } from './OrderSummary.jsx';
import { PaymentSummary } from './PaymentSummary.jsx';

export function CheckoutPage({ cartItems, loadCart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);

    useEffect(() => {
        const fetchDeliveryOptions = async () => {
            const response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
            setDeliveryOptions(response.data);
        };
        fetchDeliveryOptions();
    }, []);
    useEffect(() => {
        const fetchPaymentSummary = async () => {
            const response = await axios.get('/api/payment-summary');
            setPaymentSummary(response.data);
        }
        fetchPaymentSummary();
    }, [cartItems]);

    return (
        <>
            <title>Checkout</title>
            <link rel="icon" type="image/svg+xml" href="/cart-favicon.png" />
            <CheckoutHeader cartItems={cartItems} />
            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary cartItems={cartItems} deliveryOptions={deliveryOptions} loadCart={loadCart} />

                    <PaymentSummary paymentSummary={paymentSummary}  loadCart={loadCart}/>
                </div>
            </div>
        </>
    )
}
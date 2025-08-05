import { Header } from '../../components/Header.jsx';
import axios from 'axios';
import { useEffect, useState, Fragment } from 'react';
import './OrdersPage.css'
import dayjs from 'dayjs';
import { OrderHeader } from './OrderHeader.jsx';
import { OrderDetails } from './OrderDetails.jsx';

export function OrdersPage({ cartItems }) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('/api/orders?expand=products')
            .then((response) => {
                setOrders(response.data);
            })
    }, [])

    return (
        <>
            <title>Orders</title>
            <Header cart={cartItems} />
            <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />
            <div className="orders-page">
                <div className="page-title">Your Orders</div>
                <div className="orders-grid">
                    {orders.map((order) => {
                        return (
                            <div key={order.id} className="order-container">

                                <OrderHeader order={order} />

                                <OrderDetails order={order} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
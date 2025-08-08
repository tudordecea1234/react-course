import { Header } from '../../components/Header.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './OrdersPage.css'
import { OrdersGrid } from './OrdersGrid.jsx';

export function OrdersPage({ cartItems, loadCart }) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const response= await  axios.get('/api/orders?expand=products');
            setOrders(response.data);
        }
        fetchOrders();
    }, [])

    return (
        <>
            <title>Orders</title>
            <Header cart={cartItems} />
            <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />
            <div className="orders-page">
                <div className="page-title">Your Orders</div>
                <OrdersGrid orders={orders} loadCart={loadCart}/>
            </div>
        </>
    )
}
import { Link } from "react-router";
import { Header } from "../components/Header";
import "./TrackingPage.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

export function TrackingPage({ cartItems }) {
    const { orderId, productId } = useParams();
    const [order, setOrder] = useState(null);

    console.log(`Tracking order ${orderId} for product ${productId}`);
    useEffect(() => {
        const trackingData = async () => {
            const response = await axios.get(`api/orders/${orderId}?expand=products`);
            setOrder(response.data);
        }
        trackingData();
    }, [orderId])

    if (!order) {
        return null;
    }

    const orderProduct = order.products.find((orderProduct) => {
        return orderProduct.product.id === productId;
    })

    const totalTime = (orderProduct.estimatedDeliveryTime - order.orderTimeMs)
    const timePassedMs = dayjs().valueOf() - order.orderTimeMs;
    const progressPercentage = (timePassedMs / totalTime) * 100;

    const isPreparing = progressPercentage < 33;
    const isShipped = progressPercentage >= 33 && progressPercentage < 100;
    const isDelivered = progressPercentage === 100;


    console.log(order);
    return (
        <>
            <Header cart={cartItems} />
            <link rel="icon" type="image/svg+xml" href="tracking-favicon.png" />
            <div className="tracking-page">
                <div className="order-tracking">
                    <Link className="back-to-orders-link link-primary" href="/orders">
                        View all orders
                    </Link>

                    <div className="delivery-date">
                        {progressPercentage >= 100 ? "Delievered on" : "Arriving on"} {dayjs(orderProduct.estimatedDeliveryTime).format('MMMM D, YYYY')}
                    </div>

                    <div className="product-info">
                        {orderProduct.name}
                    </div>

                    <div className="product-info">
                        Quantity: {orderProduct.quantity}
                    </div>

                    <img className="product-image" src={orderProduct.product.image} />

                    <div className="progress-labels-container">
                        <div className={`progress-label ${isPreparing?? 'current-status'}`}>
                            Preparing
                        </div>
                        <div className={`progress-label ${isShipped?? 'current-status'}`}>
                            Shipped
                        </div>
                        <div className={`progress-label ${isDelivered?? 'current-status'}`}>
                            Delivered
                        </div>
                    </div>

                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
                    </div>
                </div>
            </div>
        </>
    )
}
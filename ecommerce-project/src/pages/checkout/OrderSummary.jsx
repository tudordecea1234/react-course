import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";
import { DeliveryOptions } from "./DeliveryOptions";

export function OrderSummary({ cartItems, deliveryOptions }) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cartItems.map((item) => {
                const selectedDeliveryOption = deliveryOptions.find((option) => option.id === item.deliveryOptionId);
                return (
                    <div key={item.productId} className="cart-item-container">
                        <div className="delivery-date">
                            Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                        </div>

                        <div className="cart-item-details-grid">
                            <img className="product-image"
                                src={item.product.image} />

                            <div className="cart-item-details">
                                <div className="product-name">
                                    {item.product.name}
                                </div>
                                <div className="product-price">
                                    {formatMoney(item.product.priceCents)}
                                </div>
                                <div className="product-quantity">
                                    <span>
                                        Quantity: <span className="quantity-label">{item.quantity}</span>
                                    </span>
                                    <span className="update-quantity-link link-primary">
                                        Update
                                    </span>
                                    <span className="delete-quantity-link link-primary">
                                        Delete
                                    </span>
                                </div>
                            </div>

                            <DeliveryOptions item={item} deliveryOptions={deliveryOptions} />
                        </div>
                    </div>
                );
            })}

        </div>
    )
}
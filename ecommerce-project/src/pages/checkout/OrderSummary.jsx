import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";
import { DeliveryOptions } from "./DeliveryOptions";
import { CardItemDetails } from "./CardItemDetails";
import { DeliveryDate } from "./DeliveryDate";

export function OrderSummary({ cartItems, deliveryOptions }) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cartItems.map((item) => {
                const selectedDeliveryOption = deliveryOptions.find((option) => option.id === item.deliveryOptionId);
                return (
                    <div key={item.productId} className="cart-item-container">
                        <DeliveryDate selectedDeliveryOption={selectedDeliveryOption} />

                        <div className="cart-item-details-grid">
                            <CardItemDetails item={item} />

                            <DeliveryOptions item={item} deliveryOptions={deliveryOptions} />
                        </div>
                    </div>
                );
            })}

        </div>
    )
}
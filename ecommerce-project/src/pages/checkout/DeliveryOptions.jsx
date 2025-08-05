import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";

export function DeliveryOptions({ item, deliveryOptions }) {
    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>
            {deliveryOptions.map((option) => {
                let priceString = 'FREE Shipping';
                if (option.priceCents > 0) {
                    priceString = `${formatMoney(option.priceCents)} - Shipping`;
                }
                return (<div key={option.id} className="delivery-option">
                    <input type="radio"
                        checked={option.id === item.deliveryOptionId}
                        className="delivery-option-input"
                        name={`delivery-option-${item.productId}`} />
                    <div>
                        <div className="delivery-option-date">
                            {dayjs(option.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                        </div>
                        <div className="delivery-option-price">
                            {priceString}
                        </div>
                    </div>
                </div>)
            })}
        </div>
    )
}
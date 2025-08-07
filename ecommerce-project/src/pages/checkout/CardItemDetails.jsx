import { formatMoney } from "../../utils/money";
export function CardItemDetails({ item }) {
    return (
        <>
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
        </>
    );
}
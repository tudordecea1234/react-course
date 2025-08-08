import { formatMoney } from "../../utils/money";
import axios from "axios";
import './CardItemDetails.css';
import { useState } from "react";


export function CardItemDetails({ item, loadCart }) {
    const [quantityUpdated, setQuantityUpdated] = useState(false);
    const [quantity, setQuantity] = useState(item.quantity);
    const deleteCartItem = async () => {
        await axios.delete(`api/cart-items/${item.productId}`);
        await loadCart();
    }
    const updatedQuantity=async ()=>{
        axios.put(`/api/cart-items/${item.productId}`, {
            quantity: Number(quantity)
        });
        await loadCart();
        setQuantityUpdated(quantityUpdated? false : true);

    }

    function updateTheQuantity(event) {
        setQuantity(event.target.value);
    }

    async function onKeyDown(event) {
        if (event.key === 'Enter') {
            axios.put(`/api/cart-items/${item.productId}`, {
            quantity: Number(quantity)
        });
        await loadCart();
        setQuantityUpdated(false);
        }else if (event.key === 'Escape') {
            setQuantity(item.quantity);
            setQuantityUpdated(false);
        }
    }

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
                        Quantity: {quantityUpdated ? <input className="textboxQuantity" type="text" value={quantity} 
                            onChange={updateTheQuantity} onKeyDown={onKeyDown}/>: 
                        <span className="quantity-label">{item.quantity}</span>}
                    </span>
                    <span className="update-quantity-link link-primary" onClick={updatedQuantity}>
                        Update
                    </span>
                    <span className="delete-quantity-link link-primary" onClick={deleteCartItem}>
                        Delete
                    </span>
                </div>
            </div>
        </>
    );
}
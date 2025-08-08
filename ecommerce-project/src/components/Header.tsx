import { NavLink, useNavigate, useSearchParams } from 'react-router';
import './Header.css';
import mobileLogo from '../assets/images/mobile-logo.png';
import mobileLogoWhite from '../assets/images/mobile-logo-white.png';
import searchIcon from '../assets/images/icons/search-icon.png';
import cartIcon from '../assets/images/icons/cart-icon.png';
import { useState } from 'react';


type HeaderProps = {
        productId: string,
        quantity: number,
        deliveryOptions: string
    }[];


export function Header({ cart }: {
    cart: HeaderProps;
}) {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const searchText = searchParams.get('search');
    let cartQuantity = 0;
    const [searchQuery, setSearchQuery] = useState(searchText || '');


    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });
    function handleSearchChange() {
        navigate(`/search=${searchQuery}`);
    }

    return (
        <div className="header">
            <div className="left-section">
                <NavLink to="/" className="header-link">
                    <img className="logo"
                        src={mobileLogo} />
                    <img className="mobile-logo"
                        src={mobileLogoWhite} />
                </NavLink>
            </div>

            <div className="middle-section">
                <input className="search-bar" type="text" placeholder="Search" value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value) }} />

                <button className="search-button" onClick={handleSearchChange}>
                    <img className="search-icon" src={searchIcon} />
                </button>
            </div>

            <div className="right-section">
                <NavLink className="orders-link header-link" to="/orders">

                    <span className="orders-text">Orders</span>
                </NavLink>

                <NavLink className="cart-link header-link" to="/checkout">
                    <img className="cart-icon" src={cartIcon} />
                    <div className="cart-quantity">{cartQuantity}</div>
                    <div className="cart-text">Cart</div>
                </NavLink>
            </div>
        </div>

    )
}
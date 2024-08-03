import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Styles/NavBar.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faShoppingCart, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0); // Compute total items in cart

    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>
                    <NavLink to="/" className="nav-item" activeClassName="active1">
                        Home <FontAwesomeIcon icon={faHome}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/plp" className="nav-item" activeClassName="active1">
                        PLP <FontAwesomeIcon icon={faList}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" className="nav-item" activeClassName="active1">
                        Login <FontAwesomeIcon icon={faSignInAlt}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sign-up" className="nav-item" activeClassName="active1">
                        Sign Up <FontAwesomeIcon icon={faUserPlus}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cart" className="nav-item" activeClassName="active1">
                        Cart <span>{cartQuantity}</span> {/* Display total items in cart */}
                        <FontAwesomeIcon icon={faShoppingCart}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/checkout" className="nav-item" activeClassName="active1">
                        Checkout
                        <FontAwesomeIcon icon={faShoppingCart}/>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;

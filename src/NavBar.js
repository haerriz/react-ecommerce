import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Styles/NavBar.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faShoppingCart, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const [userEmail, setUserEmail] = useState(null);
    const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0); // Compute total items in cart

    useEffect(() => {
        // Fetch user email from local storage
        const storedUserEmail = localStorage.getItem('userEmail');
        if (storedUserEmail) {
            setUserEmail(storedUserEmail);
        }
    }, []);

    // Extract username from email
    const username = userEmail ? userEmail.split('@')[0] : '';

    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li className="nav-item">
                    <NavLink to="/" className="nav-item" activeClassName="active1">
                        Home <FontAwesomeIcon icon={faHome}/>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/plp" className="nav-item" activeClassName="active1">
                        PLP <FontAwesomeIcon icon={faList}/>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/login" className="nav-item" activeClassName="active1">
                        Login <FontAwesomeIcon icon={faSignInAlt}/>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/sign-up" className="nav-item" activeClassName="active1">
                        Sign Up <FontAwesomeIcon icon={faUserPlus}/>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/cart" className="nav-item" activeClassName="active1">
                        Cart <span>{cartQuantity}</span> {/* Display total items in cart */}
                        <FontAwesomeIcon icon={faShoppingCart}/>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/checkout" className="nav-item" activeClassName="active1">
                        Checkout
                        <FontAwesomeIcon icon={faShoppingCart}/>
                    </NavLink>
                </li>
                {userEmail && (
                    <li className="nav-item">
                        Welcome, {username}
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default NavBar;

import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';
import '../Styles/cart.css'; // Create a CSS file for styling if needed

const OrderConfirmation = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const [orderDetails, setOrderDetails] = useState(location.state || {});

    useEffect(() => {
        // Clear local storage and Redux state when the component mounts
        localStorage.removeItem('cartItems');
        localStorage.removeItem('cartQuantity');
        dispatch(clearCart());

        // Check if there are no order details
        if (!orderDetails.cartItems || orderDetails.cartItems.length === 0) {
            setOrderDetails(null);
        }
    }, [dispatch]);

    useEffect(() => {
        // Clear Redux store on page refresh
        const handleBeforeUnload = () => {
            localStorage.removeItem('orderDetails');
            dispatch(clearCart());
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [dispatch]);

    if (!orderDetails) {
        return (
            <div className="order-confirmation-wrapper">
                <h1>Order Confirmation</h1>
                <p>No order details available.</p>
                <Link to="/">Go to Home</Link>
            </div>
        );
    }

    const { shippingAddress, billingAddress, cartItems, total } = orderDetails;

    return (
        <div className="order-confirmation-wrapper">
            <h1>Order Confirmation</h1>
            {cartItems && cartItems.length > 0 ? (
                <>
                    <h2>Order Details</h2>
                    <div className="order-items">
                        {cartItems.map((item) => (
                            <div className="order-item" key={item.id}>
                                <img src={item.imageUrl} alt={item.name} width="50" height="50" />
                                <span>{item.name}</span> - <span>{item.quantity}</span> x <span>INR {item.price}</span>
                                <span>Amount: INR {item.quantity * item.price}</span>
                            </div>
                        ))}
                    </div>
                    <div className="total-price">
                        <h3>Total Price: INR {total}</h3>
                    </div>

                    <h2>Shipping Address</h2>
                    <p>{shippingAddress.name}</p>
                    <p>{shippingAddress.address}</p>
                    <p>{shippingAddress.city}, {shippingAddress.state}, {shippingAddress.zip}</p>
                    <p>{shippingAddress.country}</p>

                    <h2>Billing Address</h2>
                    <p>{billingAddress.name}</p>
                    <p>{billingAddress.address}</p>
                    <p>{billingAddress.city}, {billingAddress.state}, {billingAddress.zip}</p>
                    <p>{billingAddress.country}</p>
                </>
            ) : (
                <div>
                    <p>No order details available.</p>
                    <Link to="/">Go to Home</Link>
                </div>
            )}
        </div>
    );
};

export default OrderConfirmation;

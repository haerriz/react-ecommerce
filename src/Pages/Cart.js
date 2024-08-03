import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../redux/cartSlice';
import PlpStyles from "./CssVariables/styles";
import '../Styles/cart.css'

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const handleRemove = (id) => {
        dispatch(removeFromCart({ id }));
    };

    const handleQuantityChange = (id, quantity) => {
        if (quantity >= 1) {
            dispatch(updateQuantity({ id, quantity: Number(quantity) }));  // Ensure quantity is a number
        }
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div>
            <h1>Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <div className="cart-wrapper">
                        {cartItems.map((item) => (
                            <div style={PlpStyles.CartWrapper} key={item.id}>
                                <img src={item.imageUrl} alt={item.name} />
                                <span>{item.name}</span>
                                <span>
                                    <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                                </span>
                                <button onClick={() => handleRemove(item.id)}>Remove</button>
                            </div>
                        ))}
                    </div>
                    <button onClick={handleClearCart}>Clear Cart</button>
                    <a href="/Checkout">Proceed to Checkout</a>
                </>
            )}
        </div>
    );
};

export default Cart;

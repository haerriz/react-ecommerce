import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import '../Styles/cart.css'; // Import the CSS file

const Checkout = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const navigate = useNavigate();

    const [shippingAddress, setShippingAddress] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: ''
    });

    const [billingAddress, setBillingAddress] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: ''
    });

    const [sameAsShipping, setSameAsShipping] = useState(false);

    useEffect(() => {
        if (cartItems.length === 0) {
            navigate('/');
        }
    }, [cartItems, navigate]);

    const handleShippingChange = (e) => {
        const {name, value} = e.target;
        setShippingAddress({...shippingAddress, [name]: value});
    };

    const handleBillingChange = (e) => {
        const {name, value} = e.target;
        setBillingAddress({...billingAddress, [name]: value});
    };

    const handleSameAsShippingChange = () => {
        setSameAsShipping(!sameAsShipping);
        if (!sameAsShipping) {
            setBillingAddress(shippingAddress);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const total = calculateTotal();
        // Navigate to order confirmation page with order details
        navigate('/order-confirmation', {
            state: {
                shippingAddress,
                billingAddress: sameAsShipping ? shippingAddress : billingAddress,
                cartItems,
                total,
            },
        });
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    };

    return (
        <>
            <h1>Checkout</h1>
            <div className="checkout-wrapper">
                <div className="cart-items">
                    <h2>Cart Items</h2>
                    <div>
                        {cartItems.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.imageUrl} alt={item.name} width="50" height="50"/>
                                <span>{item.name}</span>
                                <div>
                                    <span>{item.quantity}</span> x <span>INR {item.price}</span>
                                </div>
                                <span>Amount: INR {item.quantity * item.price}</span>
                            </div>
                        ))}
                    </div>
                    <div className="total-price">
                        <h3>Total Price: INR {calculateTotal()}</h3>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <h2>Shipping Address</h2>
                    <input type="text" name="name" placeholder="Name" value={shippingAddress.name}
                           onChange={handleShippingChange} required/>
                    <input type="text" name="address" placeholder="Address" value={shippingAddress.address}
                           onChange={handleShippingChange} required/>
                    <input type="text" name="city" placeholder="City" value={shippingAddress.city}
                           onChange={handleShippingChange} required/>
                    <input type="text" name="state" placeholder="State" value={shippingAddress.state}
                           onChange={handleShippingChange} required/>
                    <input type="text" name="zip" placeholder="Zip Code" value={shippingAddress.zip}
                           onChange={handleShippingChange} required/>
                    <input type="text" name="country" placeholder="Country" value={shippingAddress.country}
                           onChange={handleShippingChange} required/>

                    <h2>Billing Address</h2>
                    <label>
                        <input type="checkbox" checked={sameAsShipping} onChange={handleSameAsShippingChange}/>
                        Same as shipping address
                    </label>
                    {!sameAsShipping && (
                        <>
                            <input type="text" name="name" placeholder="Name" value={billingAddress.name}
                                   onChange={handleBillingChange} required/>
                            <input type="text" name="address" placeholder="Address" value={billingAddress.address}
                                   onChange={handleBillingChange} required/>
                            <input type="text" name="city" placeholder="City" value={billingAddress.city}
                                   onChange={handleBillingChange} required/>
                            <input type="text" name="state" placeholder="State" value={billingAddress.state}
                                   onChange={handleBillingChange} required/>
                            <input type="text" name="zip" placeholder="Zip Code" value={billingAddress.zip}
                                   onChange={handleBillingChange} required/>
                            <input type="text" name="country" placeholder="Country" value={billingAddress.country}
                                   onChange={handleBillingChange} required/>
                        </>
                    )}

                    <button type="submit">Place Order</button>
                </form>
            </div>
        </>
    );
};

export default Checkout;

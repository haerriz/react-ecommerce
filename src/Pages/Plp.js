import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import "react-tooltip/dist/react-tooltip.css";
import PlpStyles from './CssVariables/styles';  // Correct relative import path
import { addToCart } from '../redux/cartSlice';  // Import the addToCart action

const products = [
    { id: '1', name: 'Product 1', price: 100, imageUrl: 'https://dummyimage.com/300x300/000/fff&text=Product_Name_1' },
    { id: '2', name: 'Product 2', price: 200, imageUrl: 'https://dummyimage.com/300x300/000/fff&text=Product_Name_2' },
    { id: '3', name: 'Product 3', price: 300, imageUrl: 'https://dummyimage.com/300x300/000/fff&text=Product_Name_3' },
];

const Plp = () => {
    const [quantities, setQuantities] = useState(products.reduce((acc, product) => {
        acc[product.id] = 1;
        return acc;
    }, {}));
    const [message, setMessage] = useState('');

    const dispatch = useDispatch();  // Get the dispatch function
    const cartQuantity = useSelector((state) => state.cart.items.reduce((total, item) => total + item.quantity, 0));  // Compute total items in cart

    const increment = (id) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: prevQuantities[id] + 1
        }));
    };

    const decrement = (id) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1
        }));
    };

    const handleAddToCart = (product) => {
        dispatch(addToCart({ ...product, quantity: quantities[product.id], imageUrl: product.imageUrl }));  // Ensure imageUrl is included
        setMessage(`Added ${quantities[product.id]} of ${product.name} to cart`);
        setTimeout(() => {
            setMessage('');
        }, 5000);
    };

    return (
        <>
            <p className="plp-page">This is a PLP page</p>
            <div>Items in cart: {cartQuantity}</div>  {/* Display cart quantity from Redux state */}
            {products.map(product => (
                <div key={product.id} style={PlpStyles.ProductWrapper}>
                    <img
                        style={PlpStyles.ProductImage}
                        src={product.imageUrl}
                        alt={product.name}
                        data-tooltip-id={`product-tooltip-${product.id}`}
                        data-tooltip-content={`This is a premium ${product.name}`}
                    />
                    <a href={`/product/${product.id}`}>{product.name}</a>
                    <div>
                        <span>Quantity:
                            <button onClick={() => decrement(product.id)}>-</button>
                            <span>{quantities[product.id]}</span>
                            <button onClick={() => increment(product.id)}>+</button>
                        </span>
                        <button onClick={() => handleAddToCart(product)}>Add to cart</button>  {/* Use handleAddToCart for the button click */}
                    </div>
                </div>
            ))}
            {message && <div style={PlpStyles.AddToCartMessage}>{message}</div>}
            {products.map(product => (
                <ReactTooltip key={product.id} id={`product-tooltip-${product.id}`} place="right" effect="solid" />
            ))}
        </>
    );
};

export default Plp;

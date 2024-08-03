// src/Pages/CssVariables/styles.js

const PlpStyles = {
    ProductWrapper: {
        border: "1px solid #ddd",
        borderRadius: 5,
        padding: "10px",
        display: "inline-block",
        position: "relative", // Ensure positioning for the message
    },
    ProductImage: {
        display: "block",
        width: "100%",
    },
    AddToCartMessage: {
        display: "block",
        position: "absolute",
        background: "#adadade0",
        top: "0",
        width: "100%",
        left: '0',
        padding: '10px',
    },
    CartWrapper: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    }
};

export default PlpStyles;

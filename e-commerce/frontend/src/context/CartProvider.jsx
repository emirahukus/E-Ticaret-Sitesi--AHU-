import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

// Sepet verilerini saklayacak bir context oluşturduk
export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(
        localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : []
    );

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (cartItem) => {
        setCartItems((prevCart) => [
            ...prevCart,
            {
                ...cartItem,
                quantity: cartItem.quantity ? cartItem.quantity : 1,
            },
        ]);
    };

    const removeFromCart = (itemId) => {
        // Sepet öğelerini filtrele ve belirtilen ID'ye sahip ürünü çıkar
        const filteredCartItems = cartItems.filter((cartItem) => {
            return cartItem._id !== itemId;
        });
        // Güncellenmiş sepet öğelerini state'e ata
        setCartItems(filteredCartItems);
    };

    // Sepet verilerini ve sepete ekleme fonksiyonunu sağlayıcıya geçiriyoruz
    return (
        <CartContext.Provider
            value={{
                cartItems,
                setCartItems,
                addToCart,
                removeFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

CartProvider.propTypes = {
    children: PropTypes.node, // CartProvider içinde yer alan bileşenler
};
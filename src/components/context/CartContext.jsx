import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const addToCart = (item) => {
        setCartItems(prev => [...prev, item]);
    };
    // حفظ السلة عند كل تغيير
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);



    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

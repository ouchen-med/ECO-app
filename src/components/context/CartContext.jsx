import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export default function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // ✅ Add to cart (with quantity)
    const addToCart = (item) => {
        setCartItems(prev => {
            const existingItem = prev.find(p => p.id === item.id);

            if (existingItem) {
                return prev.map(p =>
                    p.id === item.id
                        ? { ...p, quantity: p.quantity + 1 }
                        : p
                );
            }

            return [...prev, { ...item, quantity: 1 }];
        });
    };

    //  Remove one item completely
    const removeItem = (id) => {
        const confirmDelete = window.confirm("Do you really want to remove this product?");
        if (!confirmDelete) return; // إذا ضغط المستخدم على Cancel، ما ندير والو

        setCartItems(prev => prev.filter(item => item.id !== id));
    };


    //  Increase quantity
    const increaseQty = (id) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    //  Decrease quantity
    const decreaseQty = (id) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id
                    ? {
                        ...item,
                        quantity: Number(item.quantity || 1) - 1
                    }
                    : item
            )
                .filter(item => Number(item.quantity) > 0)
        );
    };


    // Clear cart
    const clearCart = () => {
        const confirmClear = window.confirm("Do you really want to clear the cart?");
        if (!confirmClear) return;

        setCartItems([]);
    };


    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeItem,
                increaseQty,
                decreaseQty,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

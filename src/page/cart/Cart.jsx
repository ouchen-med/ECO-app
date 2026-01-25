import React, { useContext } from 'react'
import './Cart.css'
import { FaRegTrashCan } from "react-icons/fa6";
import { CartContext } from '../../components/context/CartContext';

export default function Cart() {
    const { cartItems, addToCart, removeFromCart, clearCart, removeItem, decreaseQty, increaseQty } = useContext(CartContext);

    // Calculer le total
    const calculateTotal = () => {
        return cartItems.reduce(
            (total, item) =>
                total + Number(item.price) * Number(item.quantity || 1),
            0
        );
    };


    // Augmenter la quantité


    // Diminuer la quantité


    // Terminer la commande
    const handleCheckout = () => {
        if (cartItems.length === 0) {
            alert("Votre panier est vide !");
            return;
        }
        alert(`Commande confirmée ! Total: $${calculateTotal().toFixed(2)}`);
        clearCart();
    };

    return (
        <div className='cart_container'>
            <div className="cart_header">
                <h1>Your Shopping Cart</h1>
                {cartItems.length > 0 && (
                    <p className="cart_count">{cartItems.length} items</p>
                )}
            </div>

            <div className="cart_content">
                <div className="ordersummary">
                    <h2>Order Summary</h2>
                    <div className="items">
                        {cartItems.length === 0 ? (
                            <div className="empty_cart">
                                <p>Your cart is empty</p>
                                <p className="empty_message">Add some items to get started!</p>
                            </div>
                        ) : (
                            <>
                                {cartItems.map((item) => (
                                    <div key={item.id} className="item_cart">
                                        <div className="image_name">
                                            <img src={item.images?.[0] || 'https://via.placeholder.com/100'} alt={item.name} />
                                            <div className="content">
                                                <h3 className="item_title">{item.name}</h3>
                                                <p className="item_category">{item.category}</p>
                                                <h5 className='price_item'>${item.price.toFixed(2)}</h5>

                                                <div className='quantity_control'>
                                                    <button
                                                        onClick={() => decreaseQty(item.id)}
                                                        className="qty_btn"
                                                        aria-label="Decrease quantity"
                                                    >
                                                        -
                                                    </button>
                                                    <span className='quantity'>{item.quantity}</span>
                                                    <button
                                                        onClick={() => increaseQty(item.id)}
                                                        className="qty_btn"
                                                        aria-label="Increase quantity"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>

                                            <button
                                                className='delete_item'
                                                onClick={() => removeItem(item.id)}
                                                aria-label="Remove item"
                                            >
                                                <FaRegTrashCan />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>

                {cartItems.length > 0 && (
                    <div className="cart_summary">
                        <div className="summary_content">
                            <h2>Cart Total</h2>

                            <div className="summary_row">
                                <span>Subtotal</span>
                                <span>${calculateTotal().toFixed(2)}</span>
                            </div>

                            <div className="summary_row">
                                <span>Shipping</span>
                                <span className="free_shipping">FREE</span>
                            </div>

                            <div className="summary_row total_row">
                                <span>Total</span>
                                <span className="total_amount">${calculateTotal().toFixed(2)}</span>
                            </div>

                            <div className="tax_note">
                                <p>Taxes calculated at checkout</p>
                            </div>

                            <button
                                className="checkout_btn"
                                onClick={handleCheckout}
                            >
                                Proceed to Checkout
                            </button>

                            <button
                                className="continue_shopping"
                                onClick={() => window.history.back()}
                            >
                                Continue Shopping
                            </button>

                            <button
                                className="clear_cart"
                                onClick={clearCart}
                            >
                                Clear Cart
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
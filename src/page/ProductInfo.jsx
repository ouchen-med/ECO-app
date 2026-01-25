import React, { useContext, useState } from 'react'
import { FaStar } from "react-icons/fa6";
import { TiShoppingCart } from 'react-icons/ti'
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { CartContext } from '../components/context/CartContext';
import toast from 'react-hot-toast';

export default function ProductInfo({ product }) {
    const [liked, setLiked] = useState(false)
    const { addToCart, cartItems } = useContext(CartContext);
    const isInCart = cartItems.some(i => i.id === product.id);

    const handleAddToCart = () => {
        if (!isInCart) {
            addToCart(product);
            toast.success(
                <div className='toast-wrapper'>
                    <img src={product.images[0]} alt='Imag_product' />
                    <div className='toast-content'>
                        <strong>{product.title}</strong>
                        Added To Cart
                        <div>
                            <button className='toast-btn'>View Cart</button>
                        </div>
                    </div>
                </div>
                , { duration: 3500 }
            )

        }

    }


    return (
        <div className="details_item">
            <h1 className='name'>{product.title}</h1>

            <div className='stars'>
                <FaStar /><FaStar /><FaStar /><FaStar />
            </div>

            <p className='price'>${product.price}</p>
            <h5>Availability: <span>{product.availabilityStatus}</span></h5>
            <p className='desc'>{product.description}</p>
            <h4>Stock: <span>Only {product.stock} Left</span></h4>
            <h5>Brand: <span>{product.brand}</span></h5>

            <div className="action_buttons">
                <button
                    onClick={handleAddToCart}
                    className={`btnn ${isInCart ? 'in-cart' : ''}`}
                >
                    {isInCart ? 'In Cart' : 'Add to Cart'} <TiShoppingCart />
                </button>


                <div
                    className={`favorit ${liked ? "active" : ""}`}
                    onClick={() => setLiked(!liked)}
                >
                    {liked ? <MdFavorite /> : <MdFavoriteBorder />}
                </div>
            </div>
        </div>
    )
}

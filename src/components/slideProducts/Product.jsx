import React, { useContext } from 'react'
import { FaStar } from "react-icons/fa6";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
<FaRegHeart />
import { LuSend } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';




export default function Product({ product }) {

    const { cartItems, addToCart } = useContext(CartContext);

    const isInCart = cartItems.some(i => i.id === product.id)
    return (
        <div className={`product ${isInCart ? 'in-cart': ''}`}>
            <Link to={`/products/${product.id}`}>
                <div className='img_product'>
                    <img src={product.images[0]} alt="product image" width="100px" />
                </div>

                <p className='name_product'>{product.title}</p>

                <div className='stars'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <p className='price'>${product.price}</p>
            </Link >
            <div className='icons'>
                <span className="btn_addtocart" onClick={() => addToCart(product)}><MdShoppingCartCheckout />
                </span>
                <span><FaRegHeart />
                </span>
                <span><LuSend />
                </span>
            </div>
        </div>
    )
}

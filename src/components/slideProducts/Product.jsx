import React from 'react'
import { FaStar } from "react-icons/fa6";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
<FaRegHeart />
import { LuSend } from "react-icons/lu";
import { Link } from 'react-router-dom';




export default function Product({ product }) {
    return (
        <Link to="/" className='product'>
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
            <div className='icons'>
                <span><MdShoppingCartCheckout />
                </span>
                <span><FaRegHeart />
                </span>
                <span><LuSend />
                </span>
            </div>
        </Link>
    )
}

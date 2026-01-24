import React from 'react'
import { FaStar } from "react-icons/fa6";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
<FaRegHeart />
import { LuSend } from "react-icons/lu";




export default function Product() {
    return (
        <div className='product'>
            <div className='img_product'>
                <img src="src/assets/logo.png" alt="img" width="100px" />
            </div>

            <p className='name_product'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil corporis itaque architecto animi cupiditate .</p>

            <div className='stars'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <p className='price'>1000dh</p>
            <div className='icons'>
                <span><MdShoppingCartCheckout />
                </span>
                <span><FaRegHeart />
                </span>
                <span><LuSend />
                </span>
            </div>
        </div>
    )
}

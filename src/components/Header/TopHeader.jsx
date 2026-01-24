import React, { useContext } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { FaSearch } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCartCheck } from "react-icons/bs";
import { CartContext } from '../context/CartContext';



export default function TopHeader() {
    const { cartItems } = useContext(CartContext);

    return (
        <div className='top_header'>
            <div className='container'>
                <Link className='logo' to="/"><img src={logo} alt='Logo' /></Link>
                <form action="" className='search_box'>
                    <input type="text" name='search' id='search' placeholder='search For Products' />
                    <button type='submit'><FaSearch /></button>
                </form>
                <div className="header_icons">
                    <div className="icon">
                        <IoMdHeartEmpty />
                        <span className='count'>0</span>
                    </div>
                    <div className="icon">
                        <Link to="/cart">
                            <BsCartCheck />
                            <span className='count'>{cartItems.length}</span>
                        </Link>

                    </div>
                </div>
            </div>

        </div>
    )
}

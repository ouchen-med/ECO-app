import React, { useEffect, useState } from 'react'
import { RiMenuSearchFill } from "react-icons/ri";
import { IoMdArrowForward } from "react-icons/io";
import { LuUserRoundPlus } from "react-icons/lu";
import { PiSignInLight } from "react-icons/pi";
import './Header.css'

import { Link, useLocation } from 'react-router-dom';

const NavLinks = [
    { title: "Home", Link: "/" },
    { title: "About", Link: "/about" },
    { title: "Accessories", Link: "/accessories" },
    { title: "Blog", Link: "/blog" },
    { title: "Contact", Link: "/contact" },



]
export default function BtmHeader() {
    const location = useLocation();
    const [categories, setCategories] = useState([]);
    // the gategory list:
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    useEffect(() => {
        setIsCategoryOpen(false);
    }, [location]);


    useEffect(() => {
        fetch("https://dummyjson.com/products/categories")
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);

            })

    }, []);

    return (
        <div className='btm_header'>
            <div className="container">
                <nav className='nav'>
                    <div onClick={() => setIsCategoryOpen(!isCategoryOpen)} className="category_nav">
                        <div onClick={() => setIsCategoryOpen(!isCategoryOpen)} className="category-btn">
                        </div>
                        <RiMenuSearchFill />
                        <p onClick={() => setIsCategoryOpen(!isCategoryOpen)}>brows category</p>
                        < IoMdArrowForward />
                    </div>
                    <div className={`category_nav_list ${isCategoryOpen ? "active" : ""}`}>
                        {categories.map((cat) =>
                            <Link key={cat.slug} to={`category/${cat.slug}`}>{cat.name}</Link>
                        )}
                    </div>
                    <div className="nav_link">
                        {NavLinks.map((item) => (
                            <li key={item.Link} className={location.pathname === item.Link ? "activ" : ""}><Link to={item.Link} >{item.title}</Link></li>
                        ))}

                    </div>

                </nav>
                <div className='sign_regs_icon'>
                    <Link to="/"> <PiSignInLight /></Link>
                    <Link to="/"> <LuUserRoundPlus /></Link>
                </div>
            </div>
        </div>
    )
}
















// import React, { useEffect, useState } from 'react'
// import { RiMenuSearchFill } from "react-icons/ri";
// import { IoMdArrowForward } from "react-icons/io";
// import { LuUserRoundPlus } from "react-icons/lu";
// import { PiSignInLight } from "react-icons/pi";

// import { Link } from 'react-router-dom';

// const NavLinks = [
//     { title: "Home", Link: "/" },
//     { title: "About", Link: "/about" },
//     { title: "Accessories", Link: "/accessories" },
//     { title: "Blog", Link: "/blog" },
//     { title: "Contact", Link: "/contact" },



// ]
// export default function BtmHeader() {

//     const [categories, setCategories] = useState([]);

//     useEffect(() => {
//         fetch("https://dummyjson.com/products/categories")
//             .then((res) => res.json())
//             .then((data) => {
//                 setCategories(data);
//                 console.log("Component rendered");

//             })

//     }, []);

//     return (
//         <div className='btm_header'>
//             <div className="container">
//                 <nav className='nav'>
//                     <div className="category_nav">
//                         <div className="category-btn"></div>
//                         <RiMenuSearchFill />
//                         <p>brows category</p>
//                         <IoMdArrowForward />
//                     </div>
//                     <div className="category_nav_list">
//                         {categories.map((cat) =>
//                             <Link to={cat.slug}>{cat.name}</Link>
//                         )}
//                     </div>
//                     <div className="nav_link">
//                         {NavLinks.map((item) => (
//                             <Link to={item.Link} >{item.title}</Link>
//                         ))}

//                     </div>

//                 </nav>
//                 <div className='sign_regs_icon'>
//                     <Link to="/"> <PiSignInLight /></Link>
//                     <Link to="/"> <LuUserRoundPlus /></Link>
//                 </div>
//             </div>
//         </div>
//     )
// }


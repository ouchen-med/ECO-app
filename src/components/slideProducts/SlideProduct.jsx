import React from 'react'


import Product from './Product'
import './SlideProduct.css'
export default function SlideProduct() {
    return (
        <div className='slide_products slide'>
            <div className="container">
                <div className="top_slide">
                    <h2>Lorem ipsum dolor sit amet  amet?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, eos? Porro?</p>
                </div>

                <div className="products_grid">
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                </div>




            </div>

        </div>
    )
}

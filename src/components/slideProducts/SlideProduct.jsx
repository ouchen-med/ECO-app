import React from 'react'


import Product from './Product'
import './SlideProduct.css'
export default function SlideProduct({ products, title }) {
    if (!products || products.length === 0) {
        return null;
    }
    const globalDescription = `Discover our amazing range of ${title} carefully selected to suit all your needs. Quality, style, and performance guaranteed!`;

    return (
        <div className='slide_products slide'>
            <div className="container">
                <div className="top_slide">
                    <h2>{title}</h2>
                    <p>{globalDescription}</p>
                </div>


                <div className="products_grid">
                    {products.map((item) => (
                        <Product key={item.id} product={item} />
                    ))}
                </div>




            </div>

        </div>
    )
}

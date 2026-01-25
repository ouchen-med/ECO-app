import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './CategoryPage.css'
import Product from '../../components/slideProducts/Product'

export default function CategoryPage() {
    const { category } = useParams()
    const [categoryProducts, setCategoryProducts] = useState([])

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${category}`)
            .then((res) => res.json())
            .then((data) => {
                setCategoryProducts(data.products)
            })
            .catch(err => console.error(err))
    }, [category])

    return (
        <div className='category_container'>
            <h2 className='category_title'>Category: {category}</h2>
            <div className="products_grid">
                {categoryProducts.length === 0 ? (
                    <p>Loading products...</p>
                ) : (
                    categoryProducts.map(product => (
                        <Product key={product.id} product={product} />
                    ))
                )}
            </div>
        </div>
    )
}

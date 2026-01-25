import React, { useEffect, useState } from 'react'
import './ProductDetails.css'
import { useParams } from 'react-router-dom'

import SlideProduct from '../components/slideProducts/SlideProduct';
import ProductDetailsLoading from './ProductDetailsLoading';
import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';
import PageTransition from '../components/PageTransition';

export default function ProductDetails() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [relatedProducts, setRelatedProducts] = useState([])
    const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(false)

    // fetch product by id
    useEffect(() => {
        const fetchProductById = async () => {
            setLoading(true)
            try {
                const res = await fetch(`https://dummyjson.com/products/${id}`)
                const data = await res.json()
                setProduct(data)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }
        fetchProductById()
    }, [id])

    // fetch related products by category
    useEffect(() => {
        if (!product?.category) {
            setRelatedProducts([])
            return
        }

        const fetchRelated = async () => {
            setLoadingRelatedProducts(true)
            try {
                const res = await fetch(
                    `https://dummyjson.com/products/category/${encodeURIComponent(product.category)}`
                )
                const data = await res.json()
                const filtered = data.products.filter(item => item.id !== product.id)
                setRelatedProducts(filtered)
            } catch (error) {
                console.error(error)
            } finally {
                setLoadingRelatedProducts(false)
            }
        }

        fetchRelated()
    }, [product])

    if (loading || !product) {
        return (
            <ProductDetailsLoading></ProductDetailsLoading>
        )
    }
    return (
        <PageTransition>
            <div className="product_details_page">
                {/* Product main section */}
                <div className="item_details">
                    <div className="container">
                        {/* Images */}
                        <ProductImages product={product} />
                        {/* Details */}
                        <ProductInfo product={product} />
                    </div>
                </div>
                {/* Related products */}
                <div className="related_section">
                    {loadingRelatedProducts ? (
                        <div className="loading">
                            <div className="spinner"></div>
                            <span>Loading related products...</span>
                        </div>
                    ) : relatedProducts.length === 0 ? (
                        <div className="no_products">No related products found</div>
                    ) : (
                        <SlideProduct products={relatedProducts} title={product.category} />
                    )}
                </div>
            </div>
        </PageTransition>

    )
}

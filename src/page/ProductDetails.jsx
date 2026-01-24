import React, { useEffect, useState } from 'react'
import './ProductDetails.css'
import { useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa6";
import { TiShoppingCart } from 'react-icons/ti'
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import SlideProduct from '../components/slideProducts/SlideProduct';

export default function ProductDetails() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [liked, setLiked] = useState(false)
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
            <div className="loading_fullscreen">
                <div className="spinner"></div>
                <span>Loading product...</span>
            </div>
        )
    }

    return (
        <div className="product_details_page">

            {/* Product main section */}
            <div className="item_details">
                <div className="container">

                    {/* Images */}
                    <div className="imgs_item">
                        <div className="big_img">
                            <img id="big_img" src={product.images[0]} alt="main_img" />
                        </div>
                        <div className="sm_img">
                            {product.images.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt=""
                                    onClick={() => document.getElementById("big_img").src = img}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Details */}
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
                            <button className='btnn'>
                                Add to cart <TiShoppingCart />
                            </button>

                            <div
                                className={`favorit ${liked ? "active" : ""}`}
                                onClick={() => setLiked(!liked)}
                            >
                                {liked ? <MdFavorite /> : <MdFavoriteBorder />}
                            </div>
                        </div>
                    </div>

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
    )
}

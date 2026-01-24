import React, { useEffect, useState } from 'react'
import HeroSlider from '../../components/HeroSlider'
import './Home.css'
import SlideProduct from '../../components/slideProducts/SlideProduct'

const categories = [
    "mobile-accessories",
    "laptops",
    "tablets",
    "smartphones",
    "womens-bags",
    "motorcycle",
    "sunglasses",
    "sports-accessories"
];


export default function Home() {
    const [productsByCategory, setProductsByCategory] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        setLoading(true);
        setError(null);

        try {
            const results = await Promise.all(
                categories.map(async (category) => {
                    const res = await fetch(
                        `https://dummyjson.com/products/category/${category}`
                    );
                    const data = await res.json();
                    return { [category]: data.products };
                })
            );

            const mergedResults = Object.assign({}, ...results);
            setProductsByCategory(mergedResults);

        } catch (error) {
            console.error("Error fetching data", error);
            setError("Failed to load products");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="text-center mt-5">
                <div className="spinner-grow text-success" role="status"></div>
                <p className="mt-3 fw-semibold">Loading products...</p>
            </div>
        );
    }
    if (error) {
        return (
            <div className="container mt-5">
                <div className="alert alert-danger text-center" role="alert">
                    !!{error}
                </div>
            </div>
        );
    }
    return (
        <>
            <HeroSlider />
            {categories.map((category) => (
                <SlideProduct
                    key={category}
                    title={category}
                    products={productsByCategory[category]}
                />
            ))}
        </>
    );
}

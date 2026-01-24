import React, { useEffect, useState } from 'react'
import './ProductDetails.css'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductById = async () => {
            setLoading(true);
            try {
                const res = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await res.json();
                setProduct(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductById();
    }, [id]);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <span className="ms-2 fw-bold">Loading product...</span>
            </div>
        );
    }
    if (!product) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <span className="ms-2 fw-bold">Loading product...</span>
            </div>
        );
    }
    console.log(product)

    return (
        <div className='main_content
        '>
            <h2 >ProductDetails </h2>





        </div>
    )
}

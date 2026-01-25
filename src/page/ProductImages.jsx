import React from 'react'

export default function ProductImages({ product }) {
    return (
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
    )
}

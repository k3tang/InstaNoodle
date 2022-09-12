import React from "react";
import "./index.css"
import { Link } from "react-router-dom";

const ProductListing = ({product}) => {
    const { id, name, photoUrl, price} = product;

    return (
        <>
            <div className="listing-component">
                <Link to={`/products/${id}`} className="product-image">
                    <img src={photoUrl} alt="product" />
                </Link>
                <div className="product-text">
                    <div className="product-item">{name}</div>
                    <div className="product-price">${(Math.round(price * 100) / 100).toFixed(2)}</div>
                </div>
                
            </div>
        </>
    )
}

export default ProductListing;
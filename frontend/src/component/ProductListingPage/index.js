import React from "react";
import "./ProductListingPage.css"
import { Link } from "react-router-dom";

const ProductListing = ({product}) => {
    const { id, name, photoUrl, price, desc } = product;

    return (
        <>
            <div id="listing-component">
                <Link to={`/products/${id}`} className="product-image">
                    <img src={photoUrl} alt="product" />
                </Link>
                <div className="product-item">{name}</div>
                <div className="product-price">${price}</div>
            </div>
        </>
    )
}

export default ProductListing;
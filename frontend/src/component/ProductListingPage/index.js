import React from "react";
import "./ProductListingPage.css"

const ProductListing = ({product}) => {
    return (
        <li>{product.name}</li>
    )
}

export default ProductListing;
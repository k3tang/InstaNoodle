import React from "react";
import "./ProductsPage.css";
import ProductListing from "../ProductListingPage";

const ProductsIndex = ({products}) => {
    return (
        <div id="product-listings">
            <h1>All Products</h1>
            {products.map((product) => (
                <ProductListing
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
       
    )
}

export default ProductsIndex;

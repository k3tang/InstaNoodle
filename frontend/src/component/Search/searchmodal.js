import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../../store/products";
import ProductListing from "../ProductListingPage";

const SearchModal = () => {
    const products = useSelector(getProducts);

    let searchResults;
    if (products.length === 0) {
        searchResults = (
            <div className="search-error">No products found!</div>
        )
    } else {
        searchResults = (
            <>
                <ul className="search-result-list">
                    {products.map(product => 
                        <li><ProductListing key={product.id} product={product}/></li>
                    )}
                </ul>
            </>
        )
    }

    return (
        <>
            {/* <div className="fa-solid fa-magnifying-glass" onClick={() => setShowModal(false)}></div> */}
            {searchResults}
    
        </>
    )
}

export default SearchModal;
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../../store/products";
import ProductListing from "../ProductListingPage";

const SearchIndex = () => {
    const products = useSelector(getProducts);

    let searchResults;
    if (products.length === 0) {
        searchResults = (
            <div className="search-error">Oh no, no matching products found...</div>
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
        <>  <h1 id="search-header">Matching Results</h1>
            {searchResults}
        </>
    )
}

export default SearchIndex;
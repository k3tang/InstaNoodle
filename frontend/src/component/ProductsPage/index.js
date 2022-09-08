import React, { useEffect } from "react";
import "./ProductsPage.css";
import ProductListing from "../ProductListingPage/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts,getProducts } from "../../store/products";

const ProductsIndex = () => {
    const products = useSelector(getProducts);

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchProducts())
    },[])

    const mapProducts = () => {
        return products.map(product => (
            <ProductListing key={product.id} product={product}/>
        ))
    }
    
    return (
        <>
            <h1 id="products-header">Instant Gratification</h1>
            <div id="product-listings">
                {mapProducts()}
            </div>
        </>
        
       
    )
}

export default ProductsIndex;

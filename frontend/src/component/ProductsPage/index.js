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
        <div id="product-listings">
            <h1>All Products</h1>
            {mapProducts()}
        </div>
       
    )
}

export default ProductsIndex;

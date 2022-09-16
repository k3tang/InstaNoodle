import React, { useEffect } from "react";
import "./index.css";
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
            <div className="products-header-anim">
                <div id="products-anim">Instant Gratification ~ Instant Gratification ~ Instant Gratification ~ Instant Gratification ~ Instant Gratification ~ Instant Gratification ~</div>
            </div>
                <h1 id='products-header'>All Products</h1>
            <div id="product-listings">
                {mapProducts()}
            </div>
        </>
        
       
    )
}

export default ProductsIndex;

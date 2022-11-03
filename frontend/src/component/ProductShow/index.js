import { useSelector } from "react-redux";
import "./index.css";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProduct, getProduct } from "../../store/products";
import { useEffect, useState } from "react";
import { getCartItem, updateCartItem, createCartItem, fetchCartItems } from "../../store/cart";
import { openSidebar } from "../Navigation"; import ReviewIndexPage from '../ReviewIndexPage';
import { fetchReviews } from '../../store/reviews';
import NoodleInfo from "./noodleinfo";

const ProductShow = () => {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const product = useSelector(getProduct(productId));
    const item = useSelector(getCartItem(productId))
    const [count, setCount] = useState(1);
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchProduct(productId))
        // dispatch(fetchCartItems())
        dispatch(fetchReviews(productId))
    }, [productId])

    useEffect(() => {
        if (user) dispatch(getCartItem(productId));
    },[item])

    if (!product) return null;

    const handleInput = () => {
        let input = parseInt(document.getElementById("show-input").value);
        if (input > 0) {
            setCount(input)
        } else {
            setCount("")
        }
    }
   
    const {name, photoUrl, price, desc} = product;

    //add to cart 
 
    const handleAddCart = (e) => {
        e.preventDefault();
        openSidebar();
        const userId = user.id;

       
        if (!item ) {
            const newItem = {
                cartItem: {
                    quantity: count,
                    productId: Number(productId),
                    userId: userId
                }
            }
            return dispatch(createCartItem(newItem))
        } else if (item) {
            const updateItem = {
                cartItem: {
                    id: item.id,
                    quantity: item.quantity + count,
                    productId: Number(productId),
                    userId: userId
                }
            }
            return dispatch(updateCartItem(updateItem))
        }
    }
    
    return (
        <>
        <div id="show-component">
            <div id="show-picture">
                <img src={photoUrl} alt="product-picture"/>
            </div>
            <div id="show-text-container">
                    <div id="show-name">{name}</div>
                    <div id="show-description">{desc}</div>
                    <div id="show-price">${(Math.round(price * 100)/100).toFixed(2)}</div>
                    <div id="show-quantity-container">
                        <label htmlFor="show-quantity-container" id="show-label">Select Quantity</label>
                            <div className="show-quantity">
                              
                            <button onClick={() => ((parseInt(count) - 1) > 0 ? setCount(parseInt(count) - 1) : setCount(1))}>-</button>
                                <input type="text" id="show-input" value={count} onChange={handleInput}></input>
                            <button onClick={() => setCount(parseInt(count) + 1)}>+</button>
                              
                            </div>
                    </div>
                    <button id="show-add-button" onClick={handleAddCart}>Add to cart</button>
            </div>    
        </div>
        <div className='reviews-container'>
            <ReviewIndexPage props={productId} />
        </div>
        {productId > 6 ? "" : <NoodleInfo /> }
        </>
    )
}

export default ProductShow;
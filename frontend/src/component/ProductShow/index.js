import { useSelector } from "react-redux";
import "./ProductShow.css";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProduct, getProduct } from "../../store/products";
import { useEffect, useState } from "react";

const ProductShow = () => {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const product = useSelector(getProduct(productId));
    const [count, setCount] = useState(1);

    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [dispatch])

    const handleInput = () => {
        let input = parseInt(document.getElementById("show-input").value);
        console.log(input + 1)
        if (input > 0) {
            setCount(input)
        } else {
            setCount("")
        }
    }
   

    const {name, photoUrl, price, desc} = product;
    
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
                                <button onClick={() => setCount(parseInt(count) + 1)}>+</button>
                                <input type="text" id="show-input" value={count} onChange={handleInput}></input>
                                <button onClick={() => ((parseInt(count) - 1) > 0 ? setCount(parseInt(count) - 1) : setCount(1))}>-</button>
                            </div>
                    </div>
                    <button id="show-add-button">Add to cart</button>
            </div>    
        </div>
        </>
    )
}

export default ProductShow;
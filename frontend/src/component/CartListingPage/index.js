import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './cartlisting.css'
import { fetchProduct, getProduct } from '../../store/products'
import { deleteCartItem, fetchCartItems, getCartItems, updateCartItem } from '../../store/cart'
import { useHistory } from 'react-router-dom'


const CartListing = ({cartItem}) => {
    const {quantity, productId, id} = cartItem;
    const dispatch = useDispatch();
    const product = useSelector(getProduct(cartItem.productId));
    const user = sessionStorage.getItem('currentUser');
    const [count, setCount] = useState(quantity);
    const [deleted, setDeleted] = useState(false);
    const history = useHistory();
   

    useEffect(() => {
        dispatch(fetchProduct(productId))
        dispatch(fetchCartItems())
    },[deleted])
    
    if (!user) return history.push("/signup");
    if (!product) return null;
    const {name, photoUrl, price} = product;

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteCartItem(id));
        setDeleted(true);
    }


    const handleInput = () => {
        let input = parseInt(document.getElementById("cart-input").value);
        if (input > 0) {
            setCount(input)
        } else {
            setCount("")
        }
    }

    const handleUpdate = () => {
        const userId = JSON.parse(user).id;
        const upCartItem = {
            cartItem: {
                id: id,
                quantity: count,
                productId: productId,
                userId: userId
            }
        }
        return dispatch(updateCartItem(upCartItem))
    }

    return (
        <>
        <div id="cart-listing-wrapper">
            <img id="cart-listing-img" src={photoUrl} alt="product"/>
            <div>
                <div className='listing-details'>{name}</div>
                    <div className='listing-details'>${(Math.round(price * 100) / 100).toFixed(2)}</div>
                <div className='listing-details'>Quantity: {quantity}</div>
                    <div className='listing-details'>
                        <button onClick={() => ((parseInt(count) - 1) > 0 ? setCount(parseInt(count) - 1) : setCount(1))}>-</button>
                        <input type="text" id="cart-input" value={count} onChange={handleInput}></input>
                        <button onClick={() => setCount(parseInt(count) + 1)}>+</button>
                        <div onClick={handleUpdate}>Update Item</div>
                </div>
                   
                <button className='listing-details' value={quantity} onClick={handleDelete}>Remove Item</button>
            </div>

        </div>
        </>
  
    )
}

export default CartListing;
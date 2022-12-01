import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './index.css'
import { fetchProduct, getProduct } from '../../store/products'
import { deleteCartItem, fetchCartItems, updateCartItem } from '../../store/cart'
import { useHistory } from 'react-router-dom'



const CartListing = ({cartItem, setSubamount}) => {
    const {quantity, productId, id} = cartItem;
    const dispatch = useDispatch();
    const product = useSelector(getProduct(cartItem.productId));
    const user = useSelector(state => state.session.user)
    const [count, setCount] = useState(quantity);
    const [deleted, setDeleted] = useState(false);
    const history = useHistory();
   


    useEffect(() => {
        if (user) dispatch(fetchCartItems());
        dispatch(fetchProduct(productId))
    },[deleted])

    if (!user) return history.push("/signup");
    if (!product) return null;
    const {name, photoUrl, price} = product;

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteCartItem(id, productId));
        setDeleted(true);
    }


    const handleInput = (e) => {
        let input = parseInt(e.target.value);
        if (input > 0) {
            setCount(input)
        } else {
            setCount("")
        }
    }

    const handleUpdate = () => {
        const userId = user.id;
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

    setSubamount((count * price))
    

    return (
        <>
        <div id="cart-listing-wrapper">
            <img id="cart-listing-img" src={photoUrl} alt="product"/>
            <div id="listing-text">
                <div className="listing-text-first">
                    <div id="listing-name" className='listing-details'>{name}</div>
                     <button id="cart-remove" className="fa-solid fa-x" value={quantity} onClick={handleDelete}></button>
                </div>
                <div id="listing-price" className='listing-details'>${(Math.round((price) * 100) / 100).toFixed(2)}</div> 
                <div className="listing-amount">
                    <div className='listing-details'>Amount: {quantity}</div>
                    <div className='listing-details' id="listing-subtotal"> ${(Math.round((quantity * price) * 100) / 100).toFixed(2)}</div>
                </div>
                <div id="cart-quantity" className='listing-details'>
                    <div className='cart-update'>
                        <input type="text" id="cart-input" 
                        placeholder={quantity} 
                        onChange={handleInput}></input>
                        <button className='cart-update' id="cart-button" onClick={handleUpdate}>Update Amount</button>
                    </div>
                </div>
            </div>
        </div>
        </>
  
    )
}

export default CartListing;
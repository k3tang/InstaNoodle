import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './CartListingPage.css'
import { fetchProduct, getProduct } from '../../store/products'
import { deleteCartItem, fetchCartItems } from '../../store/cart'


const CartListing = ({cartItem}) => {
    const dispatch = useDispatch();
    const product = useSelector(getProduct(cartItem.productId))

    useEffect(() => {
        dispatch(fetchCartItems())
    },[])
 
    if (!product) return null;
    const {name, photoUrl, price} = product;

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteCartItem(cartItem.id))
    }

    return (
        <>
            <img src={photoUrl} alt="product"/>
            <div>{name}</div>
            <div>${price}</div>
            <div>quantity: {cartItem.quantity}</div>
            <button value={cartItem.id} onClick={handleDelete}>Delete Cart Item</button>
        </>
  
    )
}

export default CartListing;
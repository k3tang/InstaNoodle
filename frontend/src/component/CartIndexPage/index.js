import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartListing from '../CartListingPage';
import './CartIndexPage.css'
import { fetchCartItems, getCartItems } from '../../store/cart';


const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCartItems())
    }, [])

    const mapCartItems = () => { 
        return cartItems.map(cartItem => (
            <CartListing key={cartItem.id} cartItem={cartItem}/>
        ))
    }
    
    return (
        <>
            <h1>Cart Items</h1>
            <div id="cart-listings">
                {mapCartItems()}
            </div>
        </>
    )
}

export default Cart;
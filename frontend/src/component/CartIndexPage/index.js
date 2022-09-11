import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartListing from '../CartListingPage';
import './cartindex.css'
import { fetchCartItems, getCartItems } from '../../store/cart';
import { fetchProducts } from '../../store/products';
import { closeSidebar } from '../Navigation';



const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchCartItems())
        dispatch(fetchProducts()) 
    }, [cartItems.length])

    const mapCartItems = () => { 
        return cartItems.map(cartItem => (
            <CartListing key={cartItem.id} cartItem={cartItem}/>
        ))
    }

    return (
        <>
                <div id="close-cart" onClick={closeSidebar}>X</div>
                <h1>Cart Items</h1>
                <div id="cart-listings">
                    {mapCartItems()}
                </div>
        </>
    )
}

export default Cart;
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartListing from '../CartListingPage';
import './cartindex.css'
import { fetchCartItems, getCartItems } from '../../store/cart';
import { fetchProducts } from '../../store/products';
import { closeSidebar } from '../Navigation';
import { useHistory } from 'react-router-dom';



const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const dispatch = useDispatch();
    const user = sessionStorage.getItem("currentUser");
    const history = useHistory();



    useEffect(() => {
        dispatch(fetchCartItems())
        dispatch(fetchProducts()) 
    }, [cartItems.length])

    const mapCartItems = () => { 
        console.log(cartItems)
        if (cartItems.length === 0) {
            return "Your cart is empty"
        } else {
            return cartItems.map(cartItem => (
                <CartListing key={cartItem.id} cartItem={cartItem} />
            ))}
    }

    return (
        <>
        <div id='modal-background'></div>
        <div id="cart-index">
                <div id="close-cart" className="fa-solid fa-x" onClick={closeSidebar}></div>
                <h1 id="cart-header">Cart Items</h1>
            {user ? <div id="cart-listings">{mapCartItems()}</div> : <button onClick={history.push("/login")}>Login for cart</button>}

        </div>
        </>
    )
}

export default Cart;
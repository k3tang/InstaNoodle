import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartListing from '../CartListingPage';
import './index.css'
import { fetchCartItems, getCartItems, deleteCartItem } from '../../store/cart';
import { fetchProducts } from '../../store/products';
import { closeSidebar } from '../Navigation';
import { useHistory } from 'react-router-dom';
import cartoon from "../../assets/login-image.jpg";



const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchCartItems())
        dispatch(fetchProducts()) 
    }, [cartItems.length])

    useEffect(() => {
        dispatch(fetchCartItems())
        dispatch(fetchProducts()) 
    },[user])

    const mapCartItems = () => { 
        if (cartItems.length === 0) {
            return "Your cart is empty"
        } else {
            return cartItems.map(cartItem => (
                <CartListing key={cartItem.id} cartItem={cartItem} />
            ))}
    }

    const subtotal = () => {
       return cartItems.reduce((acc, ele) => acc + (ele.quantity * ele.price), 0)
    }
    console.log("subtotal", subtotal())

    const deleteCart = () => {
        return cartItems.map(cartItem => (
            dispatch(deleteCartItem( cartItem))
        ))
    }

    const handleLogin = (e) => {
        e.preventDefault();
        closeSidebar();
        history.push("/login");
    }

    const handleCheckout = (e) => {
        e.preventDefault();
        deleteCart();
        closeSidebar();
        history.push("/account");
    }

    return (
        <>
        <div id='cart-modal-background' className='background-modal'></div>
        <div id="cart-index">
                <div id="close-cart" className="fa-solid fa-x" onClick={closeSidebar}></div>
                <h1 id="cart-header">Cart Items</h1>
                {user ? 
                <div id="cart-listings">{mapCartItems()}</div> : 
                <>
                    <img id="cart-cartoon" src={cartoon} alt="ramen-cartoon"/>
                    <button id="cart-login" onClick={handleLogin}>Login to cart</button>
                </>}

                {(user && cartItems.length > 0) ? 
                <>
                    <div id="shipping-text">Free shipping worldwide on orders over $75</div>
                    <label id="cart-subtotal-label">Subtotal:
                        <div id="cart-subtotal">${subtotal()}</div>
                    </label>
                    <button id="checkout-button" onClick={handleCheckout}>Checkout</button>
                </> : null}
        </div>
        </>
    )
}

export default Cart;
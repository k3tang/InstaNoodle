import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartListing from '../CartListingPage';
import './index.css'
import { fetchCartItems, getCartItems, deleteCartItem } from '../../store/cart';
import { fetchProducts } from '../../store/products';
import { closeSidebar } from '../Navigation';
import { useHistory } from 'react-router-dom';
import cartoon from "../../assets/login-image.jpg";
import { useState } from 'react';
import Checkout from './checkout';


const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const history = useHistory();
    const [subamount, setSubamount] = useState(0)

    useEffect(() => {
        if (user) dispatch(fetchCartItems());
        dispatch(fetchProducts()) 
    }, [cartItems.length])

    // useEffect(() => {
    //     dispatch(fetchCartItems())
    //     dispatch(fetchProducts()) 
    // },[user])

    const mapCartItems = () => { 
        if (cartItems.length === 0) {
            return "Your cart is empty"
        } else {
            return cartItems.map(cartItem => (
                <CartListing key={cartItem.id} cartItem={cartItem} setSubamount={setSubamount} />
            ))}
    }


    const subtotal = () => {
       return cartItems.reduce((acc, ele) => acc + (ele.quantity * ele.price), 0);
    }


    const deleteCart = () => {
        return cartItems.map(cartItem => (
            dispatch(deleteCartItem(cartItem.id, cartItem.productId))
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
        handleCheckoutModal();
        history.push("/account");
    }

  const handleCheckoutModal = () => {
        let ele = document.getElementById("checkout-modal");
        ele.style.display = "block";
        let bg = document.getElementById("cart-modal-background");
        bg.style.display = "block";
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
                    <div id="shipping-text">Free US shipping on orders over $75</div>
                    <label id="cart-subtotal-label">Subtotal:
                            <div id="cart-subtotal">${(Math.round((subtotal()) * 100) / 100).toFixed(2)}</div>
                    </label>
                    <button id="checkout-button" onClick={handleCheckout}>Checkout</button>
                </> : null}
        </div>
            <div id="checkout-modal"><Checkout/></div>
        </>
    )
}

export default Cart;
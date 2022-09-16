import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';
import noodleIcon from "../../assets/ramen.png";
import { useEffect } from 'react';
import { getCartItems, fetchCartItems } from '../../store/cart';
import { fetchProducts } from '../../store/products';
import SearchBar from '../Search';



export const closeSidebar = () => {
    let modal = document.getElementById("cart-index");
    let modalBackground = document.getElementById("cart-modal-background");
    modal.style.display = "none";
    modalBackground.style.display = "none";
}

export const openSidebar = () => {
    let modal = document.getElementById("cart-index");
    let modalBackground = document.getElementById("cart-modal-background");
    modal.style.display = "block";
    modalBackground.style.display = "block";
}

window.onclick = function (event) {
    let modal = document.getElementById("cart-index");
    let modalBackground = document.getElementById("cart-modal-background");
    let ele = document.getElementById("checkout-modal");
    if (event.target == modalBackground) {
        modal.style.display = "none";
        modalBackground.style.display = "none";
        ele.style.display = "none";
    }
}

function Navigation() {
    const sessionUser = useSelector(state => state.session.user)
    const cartItems = useSelector(getCartItems);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(fetchCartItems());
        dispatch(fetchProducts());
    }, [cartItems.length])

    const color = () =>{
        if (location.pathname === "/"){
            return "yellow"
        } else if (location.pathname === "/about") {
            return "pink"
        }
    }

    const itemsNum = () => {
        let totalNum = 0;
        if (!sessionUser) return totalNum;
        
        cartItems.forEach(cartItem => (
            totalNum = totalNum + Number(cartItem.quantity)
        ))
        return totalNum;
    }


  return (
    <>

        <div id="links-icons" className={color()}>
        <div id="main-logo">
                  <div><NavLink exact to="/">InstaNoodles</NavLink></div>
                  <img src={noodleIcon} alt="noodle-icon" />
        </div>
            <div id="nav-list">
                <div id="products-link">
                    <NavLink exact to="/products">Shop Now</NavLink>
                </div>
                <div id="about-link">
                    <NavLink exact to="/about">Our Story</NavLink>
                </div>
            </div>
            <div id="nav-icons">
                <div className='cart-components'>
                    <SearchBar/>
                </div>
                <div id="account-link">
                    {sessionUser ?
                        <NavLink exact to="/account" className="fa-solid fa-user" user={sessionUser}></NavLink> : <NavLink exact to="/login" className="fa-solid fa-user"></NavLink>
                    }
                  <div className='cart-icons'>
                    <div id="cart-link" onClick={openSidebar}
                        className="fa-solid fa-cart-shopping">
                    </div>
                    <div id="cart-number">{itemsNum()}</div>
                  </div>
                </div>
            </div>
        </div>
          
    </>
  );
}

export default Navigation;
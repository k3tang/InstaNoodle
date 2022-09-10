import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navigation.css';
import noodleIcon from "../../assets/ramen.png";
import { useState } from 'react';


function Navigation() {
    const sessionUser = useSelector(state => state.session.user);
    const location = useLocation();
    const [show, setShow] = useState(false);


    const color =() =>{
        if (location.pathname === "/"){
            return "yellow"
        } else if (location.pathname === "/about") {
            return "pink"
        }
    }

  return (
    <>
    {/* {console.log(location.pathname)} */}
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
                <div id="recipes-link">
                    <NavLink exact to="/recipes">#Sprucedupnoodz</NavLink>
                </div>
            </div>
            <div id="nav-icons">
                <div id="account-link">
                    {sessionUser ?
                        <NavLink exact to="/account" className="fa-solid fa-user" user={sessionUser}></NavLink> : <NavLink exact to="/login" className="fa-solid fa-user"></NavLink>
                    }
                </div>
                <div id="cart-link">
                    <button 
                        className="fa-solid fa-cart-shopping"></button>
                </div>
            </div>
        </div>
          
    </>
  );
}

export default Navigation;
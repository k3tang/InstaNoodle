import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navigation.css';
import UserProfile from '../UserProfilePage';
import LoginFormPage from '../LoginFormPage';


function Navigation() {
    const sessionUser = useSelector(state => state.session.user);




  return (
    <>
          <div id="links-icons">
        <div id="main-logo">
            <NavLink exact to="/">InstaNoodles</NavLink>
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
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
        </div>
          
    </>
  );
}

export default Navigation;
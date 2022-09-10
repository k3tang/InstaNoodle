import React from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './navigation.css';
import noodleIcon from "../../assets/ramen.png";





function Navigation() {
    const sessionUser = useSelector(state => state.session.user);
    const location = useLocation();

    const color = () =>{
        if (location.pathname === "/"){
            return "yellow"
        } else if (location.pathname === "/about") {
            return "pink"
        }
    }

    const openSidebar = () => {
        let sidebar = document.getElementById("cart1")
        console.log(sidebar)
        sidebar.classList.add("openSidebar")
    }

    const closeSidebar = () => {
        let sidebar = document.getElementById("cart1")
        sidebar.classList.remove("openSidebar")
    }

    const history = useHistory();

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
                    <div onClick={openSidebar}
                        className="fa-solid fa-cart-shopping">
                    </div>
                </div>
            </div>
        </div>
          
    </>
  );
}

export default Navigation;
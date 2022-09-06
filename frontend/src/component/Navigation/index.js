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
          <NavLink exact to="/">InstaNoodles</NavLink>
        <ul>
            <li>
                <NavLink exact to="/products">Shop Now</NavLink>
            </li>
            <li>
                { sessionUser ? 
                      <NavLink exact to="/account" className="fa-solid fa-user" user={sessionUser}></NavLink> : <NavLink exact to="/login" className="fa-solid fa-user"></NavLink> 
                }
            </li>
        </ul>
    </>
  );
}

export default Navigation;
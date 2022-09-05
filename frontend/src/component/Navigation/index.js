import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navigation.css';
import UserProfile from '../UserProfilePage';


function Navigation() {
   
  const sessionUser = useSelector(state => state.session.user);
    // const profileButton = 
    // <button>
    //     <i className="fa-solid fa-user" size="2x" ></i>
    // </button>

   

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
        <UserProfile user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <Link to="/login"></Link>
      </>
    );
  }

  return (
    <>
          <NavLink exact to="/">InstaNoodles</NavLink>
        <ul>
            <li>
                <NavLink exact to="/products">Shop Now</NavLink>
            </li>
            <li>
                  <NavLink exact to={sessionLinks} className="fa-solid fa-user"></NavLink>  
            </li>
        </ul>
    </>
  );
}

export default Navigation;
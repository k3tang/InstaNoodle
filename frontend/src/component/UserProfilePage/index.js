import React from "react";
import "./UserProfile.css";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";



function UserProfile() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    

  

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };


    return !user ? (
        <Redirect to="/" /> ) : (
            <>
                <h1>My Account</h1>
                <p>Hello, {user.name}</p>
                <button onClick={logout}>Logout</button>
                <h2>Order History</h2>
            </>
        )
}

export default UserProfile;
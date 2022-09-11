import React from "react";
import "./userprofile.css";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {openSidebar} from "../Navigation"


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
            <div id="profile-component">
                <h1>Hello, {user.name}</h1>
                <div id="profile-buttons">
                    <button onClick={openSidebar}>Cart</button>
                    <button onClick={logout}>Logout</button>
                </div>
                <h2>Order History</h2>
            </div>
            </>
        )
}

export default UserProfile;
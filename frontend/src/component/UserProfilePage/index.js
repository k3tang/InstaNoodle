import React from "react";
import "./UserProfile.css";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";



function UserProfile({user}) {
    const dispatch = useDispatch();
    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <>
            <h1>My Account</h1>
            <p>Hello, {user.name}</p>
            <button onClick={logout}>Logout</button>
            <h2>Order History</h2>
        </>
    )
}

export default UserProfile;
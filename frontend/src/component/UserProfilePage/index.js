import React from "react";
import "./index.css";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {openSidebar} from "../Navigation";
import curryNoodles from "../../assets/scroll-three/soup-curry.png";
import kimchiNoodles from "../../assets/scroll-three/soup-kimchi.png"
import misoNoodles from "../../assets/scroll-three/soup-miso.png"

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
            <div className="profile-noodles">
                <img src={curryNoodles} alt="noodle-picture"/>
                <img src={misoNoodles} alt="noodle-picture" />
                <img src={kimchiNoodles} alt="noodle-picture" />
                <img src={curryNoodles} alt="noodle-picture" />
                <img src={misoNoodles} alt="noodle-picture" />
                <img src={kimchiNoodles} alt="noodle-picture" />
                <img src={curryNoodles} alt="noodle-picture" />
                <img src={misoNoodles} alt="noodle-picture" />
            
            </div>
            </div>
            </>
        )
}

export default UserProfile;
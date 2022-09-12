import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './index.css';
import {NavLink} from 'react-router-dom';
import cartoon from "../../assets/login-image.jpg";
import { fetchCartItems } from '../../store/cart';

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) {
        dispatch(fetchCartItems())
        return <Redirect to='/account'/>;
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({email, password}))
            .catch(async(res) => { 
                let data;
                try {
                    data = await res.clone().json();
                } catch {
                    data = await res.text();
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            });
    }

    const handleDemoSubmit = e => {
        e.preventDefault();
        return dispatch(sessionActions.login({email: "demo@user.io", password: "password"}))
    }

    return (
        <>
        <div id="login-component">
                <form id="login-form" onSubmit={handleSubmit}>
    
                    <h1 id="login-header">Login</h1>
                    <ul id="login-errors">
                        {errors.map(error => <li key={error}>{error}</li>)}
                    </ul>
                    <div id="email-input">
                        <input
                            type="text"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        </div>
                    <div id="password-input">
                        <input
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div id="login-button">
                        <button type="submit">Log In</button>
                    </div>
                    <div id="login-demo-button" onClick={handleDemoSubmit}>
                        <button>Login as demo user</button>
                    </div>
                    <div id="signup-link">
                        <NavLink to="/signup">Need to create an account?</NavLink>
                    </div>
                </form>
        </div>
            <img id="login-cartoon" src={cartoon} alt="cartoon-noodle-person" />
        </>
    );
}

export default LoginFormPage;
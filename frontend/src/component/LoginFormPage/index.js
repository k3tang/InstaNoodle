import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';
import {NavLink} from 'react-router-dom';

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to='/'/>;

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

    return (
        <>
        <div id="login-component">
                <form id="login-form" onSubmit={handleSubmit}>
                    <ul>
                        {errors.map(error => <li key={error}>{error}</li>)}
                    </ul>
                    <h1 id="login-header">Login</h1>
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
                    <div id="login-demo-button">
                        <button>Login as demo user</button>
                    </div>
                    <div id="signup-link">
                        <NavLink to="/signup">Need to create an account?</NavLink>
                    </div>
                </form>
        </div>
        </>
    );
}

export default LoginFormPage;
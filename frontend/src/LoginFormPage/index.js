import { useState } from "react";
import { useDispatch } from "react-redux";
import { restoreCSRF } from "../store/csrf";

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = userSelector(state => state.session.user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to='/'/>;

    const handleSubmit = e => {
        e.preventDefault();
        setErrors([]),
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
}
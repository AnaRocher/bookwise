import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setEmailError('');
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setPasswordError('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let valid = true;

        if (!email) {
            setEmailError('*Email is required.');
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('*Invalid email format.');
            valid = false;
        }

        if (!password) {
            setPasswordError('*Password is required.');
            valid = false;
        }

        if (valid) {
            const storedData = localStorage.getItem(email);
            const userData = storedData ? JSON.parse(storedData) : null;

            if (!userData) {
                setEmailError('Invalid email.');
                setPasswordError('Invalid password.');
            } else if (password !== userData.password) {
                setPasswordError('Invalid password.');
            } else {
                localStorage.setItem('loggedInUser', email);
                navigate('/profile');
            }
        }
    };

    return (
        <div className='form-container'>
            <h1>It's nice to see you again! <br /> Sign In:</h1>
            <form onSubmit={handleSubmit}>
                <p>Email: <br />
                    <input type="email" value={email} onChange={handleEmailChange} /><br />
                    <span style={{ color: 'red' }}>{emailError}</span>
                </p>
                <p>Password: <br />
                    <input type="password" value={password} onChange={handlePasswordChange} /><br />
                    <span style={{ color: 'red' }}>{passwordError}</span>
                </p>
                <button className='form-button' type="submit">Log in</button>
            </form>
        </div>
    );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css'

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value);
        setNameError('');
    };

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
        const user = {
            name: name,
            email: email,
            password: password
        };

        if (!name) {
            setNameError('*Name is required.');
            valid = false;
        }

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
            localStorage.setItem(user.email, JSON.stringify(user));
            navigate('/profile');
        }
    };

    return (
        <div className='form-container'>
            <h1>Welcome book lover!<br /> Make your registration here</h1>
            <form onSubmit={handleSubmit}>
                <p>Name: <br />
                    <input type="text" value={name} onChange={handleNameChange} /><br />
                    <span style={{ color: 'red' }}>{nameError}</span>
                </p>

                <p>Email: <br />
                    <input type="email" value={email} onChange={handleEmailChange} /><br />
                    <span style={{ color: 'red' }}>{emailError}</span>
                </p>

                <p>Password: <br />
                    <input type="password" value={password} onChange={handlePasswordChange} /><br />
                    <span style={{ color: 'red' }}>{passwordError}</span>
                </p>

                <button className='form-button' type="submit" onClick={handleSubmit}>Register</button>
            </form>
        </div>
    );
}
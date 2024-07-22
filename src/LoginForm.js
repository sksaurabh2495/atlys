import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './App.css';

function LoginForm({blur}) {
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        navigate('/dashboard');
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Log into your account</h2>
                <label>Email or Username</label>
                <input 
                    type="text" 
                    value={emailOrUsername} 
                    onChange={(e) => setEmailOrUsername(e.target.value)} 
                    placeholder="Enter your email or username" 
                    required 
                />
                <label>Password</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Enter your password" 
                    required 
                />
                <button type="submit">Login now</button>
                <p>Forgot password?</p>
                <p>Not registered yet? {blur ? <a href="/logout">Register</a> : <a href="/logout2">Register</a>}</p>
            </form>
        </div>
    );
}

export default LoginForm;

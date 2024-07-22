import React, { useState } from 'react';
import './App.css';
import { Navigate, useNavigate } from 'react-router-dom';

function SignupForm({blur}) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here
        navigate('/dashboard');
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Create an account to continue</h2>
                <label>Email</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Enter your email" 
                    required 
                />
                <label>Username</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Choose a preferred username" 
                    required 
                />
                <label>Password</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Choose a strong password" 
                    required 
                />
                <button type="submit">Continue</button>
                <p>Already have an account? {blur ? <a href="/logout2">Login</a> : <a href="/logout">Login</a>}</p>
            </form>
        </div>
    );
}

export default SignupForm;

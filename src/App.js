import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import DashboardBlur from './components/DashboardBlur';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/signup" element={<SignupForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/" element={<SignupForm />} />
                    <Route path="/login2" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/logout" element={<DashboardBlur />} />
                    <Route path="/logout2" element={<DashboardBlur />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

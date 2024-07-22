import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
`;

const LoginBox = styled.div`
  background-color: #1c1c1c;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h2`
  color: #fff;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 4px;
  border: none;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Handle login logic here (authentication, validation, etc.)
    // On successful login:
    navigate('/dashboard');
  };

  return (
    <LoginContainer>
      <LoginBox>
        <Title>Log into your account</Title>
        <Input type="text" placeholder="Email or Username" />
        <Input type="password" placeholder="Password" />
        <Button onClick={handleLogin}>Login now</Button>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;

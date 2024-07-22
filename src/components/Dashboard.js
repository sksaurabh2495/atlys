import React from 'react';
import styled from 'styled-components';
import Post from './Post';
import CreatePost from './CreatePost';

const DashboardContainer = styled.div`
  background-color: #000;
  color: #fff;
  min-height: 100vh;
  padding: 2rem;
`;

const WelcomeMessage = styled.h2`
  margin-bottom: 1rem;
`;

const PostBox = styled.div`
  background-color: #1c1c1c;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const PostInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 4px;
  border: none;
`;

const PostButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <a href="/logout">Logout</a>
      <div className='welcome-box'>
        <WelcomeMessage>Hello Jane</WelcomeMessage>
        <div className='welcomedesc'>How are you doing today? Would you like to share something with the community</div>
        </div>
      <Post 
        profileImage={require('../assets/employee.jpg')}
        name="Theresa Webb"
        time="15 mins ago"
        message="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        comments={24}
      />
      <Post 
        profileImage={require('../assets/employee.jpg')}
        name="Martin John"
        time="32 mins ago"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        comments={56}
      />
    </DashboardContainer>
  );
};

export default Dashboard;

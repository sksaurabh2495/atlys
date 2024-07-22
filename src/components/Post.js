import React from 'react';
import '../App.css';

const Post = ({ profileImage, name, time, message, comments }) => {
  return (
    <div className="post">
      <div className="post-header">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="post-user-info">
          <span className="post-user-name">{name}</span>
          <span className="post-time">{time}</span>
        </div>
        <div className="post-options">...</div>
      </div>
      <div className="post-content">
        {message}
      </div>
      <div className="post-footer">
        <span className="post-comments">{comments} comments</span>
      </div>
    </div>
  );
};

export default Post;

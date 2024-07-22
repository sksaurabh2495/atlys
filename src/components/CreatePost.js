import React, { useState } from 'react';
import '../App.css';

const CreatePost = () => {
  const [postContent, setPostContent] = useState('');

  const handlePostContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const handlePostSubmit = () => {
    // Add logic to handle post submission
    console.log('Post submitted:', postContent);
    setPostContent('');
  };

  return (
    <div className="create-post">
      <div className="create-post-header">
        <input
          type="text"
          className="create-post-input"
          placeholder="How are you feeling today?"
          value={postContent}
          onChange={handlePostContentChange}
        />
      </div>
      <div className='create-post-button-box'><button className="create-post-button" onClick={handlePostSubmit}>Post</button></div>
    </div>
  );
};

export default CreatePost;

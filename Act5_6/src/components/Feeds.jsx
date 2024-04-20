import React, { useState } from 'react';
import './Feeds.css';

const Feeds = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handlePostChange = (e) => {
    setNewPost(e.target.value);
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handlePostSubmit = () => {
    if (newPost.trim() !== '' || imageFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const newPostObj = {
          id: Date.now(),
          text: newPost,
          image: reader.result,
        };
        setPosts([...posts, newPostObj]);
        setNewPost('');
        setImageFile(null);
      };
      if (imageFile) {
        reader.readAsDataURL(imageFile);
      } else {
        reader.onload();
      }
    }
  };
const handlePostClick = (postId) => {
  // Pass the clicked post ID to the parent component (App.js) through props
  if (props.onPostClick) {
    props.onPostClick(postId);
  }
};
  return (
    <div className="feeds-container">
      <div className="post-input">
        <input
          type="text"
          placeholder="Share your thoughts..."
          value={newPost}
          onChange={handlePostChange}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button onClick={handlePostSubmit}>Post</button>
      </div>
      <div className="posts">
    {posts.map((post) => (
      <div key={post.id} className="post" onClick={() => handlePostClick(post.id)}>
        {/* ... existing post content ... */}
      </div>
    ))}
    </div>
    </div>
  );
};

export default Feeds;

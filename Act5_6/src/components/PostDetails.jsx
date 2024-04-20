import { useEffect, useState } from 'react';
import './PostDetails.css';

function PostDetails({post}) {
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');
  
    const handleSubmit = () => {
      // Simulate sending comment to server (replace with actual API call)
      setCommentText('');
      comments.push({ text: commentText }); // Update local state for demo
    };
  
    // useEffect(() => {
    //   // Simulate fetching comments from server (replace with actual API call)
    //   setComments([
    //     { text: 'Comment 1' },
    //     { text: 'Comment 2' },
    //   ]);
    // }, [post.id]); // Fetch comments only when post changes
  
    return (
      <body>
        <div className="post">
          <h2>Title</h2>
          <p>Text</p>
          <h3>Comments</h3>
          <ul>
            {comments.map((comment) => (
              <li key={comment.text}>{comment.text}</li>
            ))}
          </ul>
          <textarea value={commentText} onChange={(e) => setCommentText(e.target.value)} />
          <button onClick={handleSubmit}>Post</button>
        </div>
      </body>
    );

  }
  
  
export default PostDetails
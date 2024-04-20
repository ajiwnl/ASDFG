import { useEffect, useState } from 'react';

function PostDetails({post}) {
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');
  
    const handleSubmit = () => {
      // Simulate sending comment to server (replace with actual API call)
      setCommentText('');
      comments.push({ text: commentText }); // Update local state for demo
    };
  
    useEffect(() => {
      // Simulate fetching comments from server (replace with actual API call)
      setComments([
        { text: 'Comment 1' },
        { text: 'Comment 2' },
      ]);
    }, [post.id]); // Fetch comments only when post changes
  
    return (
      <div className="post">
        <h2>{post.title}</h2>
        <p>{post.text}</p>
        <h3>Comments</h3>
        <ul>
          {comments.map((comment) => (
            <li key={comment.text}>{comment.text}</li>
          ))}
        </ul>
        <textarea value={commentText} onChange={(e) => setCommentText(e.target.value)} />
        <button onClick={handleSubmit}>Submit Comment</button>
      </div>
    );
  }

export default PostDetails
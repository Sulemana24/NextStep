import React, { useState } from 'react';
import './jobs.css';

function Forum() {
  const [posts, setPosts] = useState([
    {
      title: "How do I prepare for remote tech interviews?",
      content: "I’m applying for remote jobs and would love advice on how to prepare for virtual interviews. Any tips?",
      author: "Hawawu",
      tags: ["career", "remotejobs"],
      upvotes: 23,
      replies: [
        { author: "Ismail", content: "Practice with friends using Zoom or Google Meet. Also, be sure your internet is stable!" }
      ]
    }
  ]);

  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [replyFormsVisible, setReplyFormsVisible] = useState({});

  const handleUpvote = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].upvotes += 1;
    setPosts(updatedPosts);
  };

  const toggleReplyForm = (index) => {
    setReplyFormsVisible(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const addReply = (index, author, content) => {
    if (author && content) {
      const updatedPosts = [...posts];
      updatedPosts[index].replies.push({ author, content });
      setPosts(updatedPosts);
    }
  };

  const handleAddPost = () => {
    if (newPost.title && newPost.content) {
      setPosts([...posts, {
        title: newPost.title,
        content: newPost.content,
        author: "Anonymous",
        tags: [],
        upvotes: 0,
        replies: []
      }]);
      setNewPost({ title: "", content: "" });
    }
  };

  return (
    <section id="forum">
      <h2>Community Forum</h2>
      <input type="text" placeholder="Search discussions..." />

      <div className="new-post">
        <input
          type="text"
          placeholder="Post Title"
          value={newPost.title}
          onChange={e => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          placeholder="Post Content"
          value={newPost.content}
          onChange={e => setNewPost({ ...newPost, content: e.target.value })}
        />
        <button onClick={handleAddPost}>Post</button>
      </div>

      <div id="forumPosts">
        {posts.map((post, index) => (
          <div key={index} className="forum-post">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-content">{post.content}</p>
            <div className="post-meta">
              <span className="post-author">Posted by {post.author}</span>
              <span className="post-tags">{post.tags.map(tag => `#${tag} `)}</span>
              <button onClick={() => handleUpvote(index)}>▲ {post.upvotes}</button>
            </div>

            <button onClick={() => toggleReplyForm(index)}>Reply</button>
            {replyFormsVisible[index] && (
              <ReplyForm onSubmit={(author, content) => addReply(index, author, content)} />
            )}

            <div className="replies">
              {post.replies.map((reply, idx) => (
                <div key={idx} className="reply">
                  <p><strong>{reply.author}:</strong> {reply.content}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ReplyForm({ onSubmit }) {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleReply = () => {
    if (author && content) {
      onSubmit(author, content);
      setAuthor('');
      setContent('');
    }
  };

  return (
    <div className="reply-form">
      <input
        type="text"
        placeholder="Your name"
        value={author}
        onChange={e => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Your reply"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <button onClick={handleReply}>Post Reply</button>
    </div>
  );
}

export default Forum;

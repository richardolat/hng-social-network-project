import React, { useState } from "react";
import axios from "axios";

function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content, userId };

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/posts`, newPost)
      .then((response) => {
        alert("Post created successfully!");
        setTitle("");
        setContent("");
        setUserId("");
      })
      .catch((error) => console.error("Error creating post:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Post Title:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="userId">User ID:</label>
        <input
          id="userId"
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
}

export default PostForm;
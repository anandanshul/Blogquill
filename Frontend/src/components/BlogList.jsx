import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="blog-list">
      <h2>Latest Blog Posts</h2>
      {posts.map((post) => (
        <div key={post._id} className="blog-preview">
          <Link to={`/post/${post._id}`}>
            <h3>{post.title}</h3>
            <p>{new Date(post.createdAt).toLocaleDateString()}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
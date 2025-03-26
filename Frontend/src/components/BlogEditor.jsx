import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const BlogEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ]
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline',
    'list', 'bullet'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/posts', {
        title,
        content
      });
      alert('Blog post published successfully!');
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error publishing post:', error);
      alert('Failed to publish blog post');
    }
  };

  return (
    <div className="blog-editor">
      <h2>Create Blog Post</h2>
      <input 
        type="text" 
        placeholder="Enter blog post title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <ReactQuill 
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
        placeholder="Write your blog post here..."
      />
      <button onClick={handleSubmit}>Publish Post</button>
    </div>
  );
};

export default BlogEditor;
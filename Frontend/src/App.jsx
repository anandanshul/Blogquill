import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BlogEditor from './components/BlogEditor';
import BlogList from './components/BlogList';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Blog Posts</Link>
          <Link to="/create">Create Post</Link>
        </nav>

        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/create" element={<BlogEditor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
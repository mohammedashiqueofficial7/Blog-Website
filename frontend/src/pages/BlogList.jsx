import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import axios from 'axios';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    axios.get('http://localhost:5000/api/blogs').then(response => {
      setBlogs(response.data);
      setLoading(false);
    }).catch(error => {
      console.error(error);
      setLoading(false);
    });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/blogs/${id}`).then(() => {
      setBlogs(blogs.filter(blog => blog._id !== id));
    }).catch(error => {
      console.error(error);
    });
  };

  if (loading) return <div style={{ textAlign: 'center', padding: '2rem' }}>Loading...</div>;

  return (
    <div className="container" style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>All Blogs</h1>
      {blogs.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>No blogs yet.</p>
          <Link to="/add-blog" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>Create your first blog</Link>
        </div>
      ) : (
        blogs.map(blog => <BlogCard key={blog._id} blog={blog} onDelete={handleDelete} />)
      )}
    </div>
  );
};

export default BlogList;
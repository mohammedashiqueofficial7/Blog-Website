import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const BlogView = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = () => {
    axios.get(`http://localhost:5000/api/blogs/${id}`).then(response => {
      setBlog(response.data);
      setLoading(false);
    }).catch(error => {
      console.error(error);
      setLoading(false);
    });
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      axios.delete(`http://localhost:5000/api/blogs/${id}`).then(() => {
        window.location.href = '/blogs';
      }).catch(error => {
        console.error(error);
      });
    }
  };

  if (loading) return <div style={{ textAlign: 'center', padding: '2rem' }}>Loading...</div>;

  if (!blog) return <div style={{ textAlign: 'center', padding: '2rem' }}>Blog not found</div>;

  return (
    <div className="container" style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{blog.title}</h1>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#666' }}>
        <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>By {blog.author}</span>
        <span>•</span>
        <span style={{ marginLeft: '0.5rem' }}>{new Date(blog.createdAt).toLocaleDateString()}</span>
      </div>
      <div style={{ fontSize: '1.1rem', lineHeight: '1.8', whiteSpace: 'pre-wrap', marginBottom: '2rem' }}>
        {blog.content}
      </div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Link to="/blogs" style={{ textDecoration: 'none', color: '#007bff' }}>← Back to Blogs</Link>
        <Link to={`/edit-blog/${blog._id}`} style={{ textDecoration: 'none', color: '#28a745' }}>Edit</Link>
        <button
          onClick={handleDelete}
          style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogView;
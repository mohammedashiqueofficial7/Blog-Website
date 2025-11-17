import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs').then(response => {
      setRecentBlogs(response.data.slice(0, 3)); // Get first 3 blogs
      setLoading(false);
    }).catch(error => {
      console.error(error);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="container" style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: '#f8f9fa', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#333' }}>Welcome to Blog Platform</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#666' }}>Share your thoughts and read amazing blogs from writers around the world</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link
            to="/blogs"
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#007bff',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            View Existing Blogs
          </Link>
          <Link
            to="/add-blog"
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#28a745',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            Add New Blog
          </Link>
        </div>
      </div>

      {/* Recent Blogs Section */}
      <div className="container" style={{ padding: '4rem 2rem', backgroundColor: 'white' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>Recent Blogs</h2>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>Loading recent blogs...</div>
        ) : recentBlogs.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>No blogs yet.</p>
            <Link to="/add-blog" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>Create the first blog</Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {recentBlogs.map(blog => (
              <div key={blog._id} className="card" style={{ cursor: 'pointer' }} onClick={() => window.location.href = `/blog/${blog._id}`}>
                <h3 style={{ marginTop: 0 }}>{blog.title}</h3>
                <p style={{ color: '#666', fontWeight: 'bold' }}>By {blog.author}</p>
                <p>{blog.content.substring(0, 150)}...</p>
                <p style={{ fontSize: '0.9rem', color: '#999' }}>{new Date(blog.createdAt).toLocaleDateString()}</p>
                <Link to={`/blog/${blog._id}`} style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>Read More →</Link>
              </div>
            ))}
          </div>
        )}
        {recentBlogs.length > 0 && (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/blogs" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold', fontSize: '1.1rem' }}>View All Blogs</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
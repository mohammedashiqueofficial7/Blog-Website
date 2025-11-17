import { Link } from 'react-router-dom';

const BlogCard = ({ blog, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      onDelete(blog._id);
    }
  };

  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>{blog.title}</h2>
      <p style={{ color: '#666' }}>By {blog.author}</p>
      <p>{blog.content.substring(0, 150)}...</p>
      <p style={{ fontSize: '0.9rem', color: '#999' }}>{new Date(blog.createdAt).toLocaleDateString()}</p>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Link to={`/blog/${blog._id}`} style={{ textDecoration: 'none', color: '#007bff' }}>Read More</Link>
        <Link to={`/edit-blog/${blog._id}`} style={{ textDecoration: 'none', color: '#28a745' }}>Edit</Link>
        <button onClick={handleDelete} style={{ backgroundColor: '#dc3545' }}>Delete</button>
      </div>
    </div>
  );
};

export default BlogCard;
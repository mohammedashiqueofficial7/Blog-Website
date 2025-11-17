import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BlogForm = ({ blog, isEdit }) => {
  const [formData, setFormData] = useState({ title: '', content: '', author: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (isEdit && blog) {
      setFormData({ title: blog.title, content: blog.content, author: blog.author });
    }
  }, [blog, isEdit]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content || !formData.author) {
      alert('Please fill all fields');
      return;
    }
    if (isEdit) {
      axios.put(`http://localhost:5000/api/blogs/${blog._id}`, formData).then(() => {
        navigate('/blogs');
      }).catch(error => {
        console.error(error);
        alert('Error saving blog');
      });
    } else {
      axios.post('http://localhost:5000/api/blogs', formData).then(() => {
        navigate('/blogs');
      }).catch(error => {
        console.error(error);
        alert('Error saving blog');
      });
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Author:</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Content:</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px', minHeight: '200px' }}
        />
      </div>
      <div>
        <button
          type="submit"
          style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '1rem' }}
        >
          {isEdit ? 'Update' : 'Create'} Blog
        </button>
        <button
          type="button"
          onClick={() => navigate('/blogs')}
          style={{ padding: '0.5rem 1rem', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Cancel
        </button>
      </div>
    </form>
    </div>
    </div>
  );
};

export default BlogForm;
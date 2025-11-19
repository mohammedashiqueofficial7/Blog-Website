import { useParams } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import BlogForm from '../components/BlogForm';
import axios from 'axios';

const AddEditBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(!!id);
  const isEdit = !!id;

  const fetchBlog = useCallback(() => {
    axios.get(`http://localhost:5000/api/blogs/${id}`).then(response => {
      setBlog(response.data);
      setLoading(false);
    }).catch(error => {
      console.error(error);
      setLoading(false);
    });
  }, [id]);

  useEffect(() => {
    if (isEdit) {
      fetchBlog();
    }
  }, [id, fetchBlog, isEdit]);

  if (loading) return <div style={{ textAlign: 'center', padding: '2rem' }}>Loading...</div>;

  return (
    <div className="container" style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>
        {isEdit ? 'Edit Blog' : 'Add New Blog'}
      </h1>
      <BlogForm blog={blog} isEdit={isEdit} />
    </div>
  );
};

export default AddEditBlog;
import { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const BlogView = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBlog = useCallback(() => {
    axios
      .get(`http://localhost:5000/api/blogs/${id}`)
      .then((response) => {
        setBlog(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    fetchBlog();
  }, [id, fetchBlog]);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      axios
        .delete(`http://localhost:5000/api/blogs/${id}`)
        .then(() => {
          window.location.href = "/blogs";
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  if (loading)
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>Loading...</div>
    );

  if (!blog)
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>Blog not found</div>
    );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        padding: "2rem 0",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "#fff",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          padding: "3rem",
          position: "relative",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
            color: "#333",
            fontWeight: "bold",
            lineHeight: "1.2",
          }}
        >
          {blog.title}
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "2rem",
            paddingBottom: "1rem",
            borderBottom: "1px solid #e9ecef",
            color: "#666",
          }}
        >
          <span
            style={{
              fontWeight: "bold",
              marginRight: "0.5rem",
              fontSize: "1.1rem",
            }}
          >
            By {blog.author}
          </span>
          <span>•</span>
          <span
            style={{
              marginLeft: "0.5rem",
              fontSize: "1rem",
            }}
          >
            {new Date(blog.createdAt).toLocaleDateString()}
          </span>
        </div>
        <div
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            whiteSpace: "pre-wrap",
            marginBottom: "3rem",
            color: "#444",
          }}
        >
          {blog.content}
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/blogs"
            style={{
              textDecoration: "none",
              color: "#007bff",
              fontWeight: "bold",
              fontSize: "1.1rem",
              padding: "0.75rem 1.5rem",
              borderRadius: "25px",
              backgroundColor: "#f8f9fa",
              transition: "all 0.3s ease",
              border: "1px solid #007bff",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#007bff";
              e.target.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#f8f9fa";
              e.target.style.color = "#007bff";
            }}
          >
            ← Back to Blogs
          </Link>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link
              to={`/edit-blog/${blog._id}`}
              style={{
                textDecoration: "none",
                color: "#fff",
                backgroundColor: "#28a745",
                padding: "0.75rem 1.5rem",
                borderRadius: "25px",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#218838")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
            >
              Edit
            </Link>
            <button
              onClick={handleDelete}
              style={{
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                padding: "0.75rem 1.5rem",
                borderRadius: "25px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#c82333")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#dc3545")}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogView;

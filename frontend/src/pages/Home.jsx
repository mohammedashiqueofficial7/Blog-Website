import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogs")
      .then((response) => {
        setRecentBlogs(response.data.slice(0, 3)); // Get first 3 blogs
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* Welcome Section */}
      <div
        style={{
          textAlign: "center",
          padding: "3rem 2rem",
          backgroundColor: "#fff",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            color: "#333",
            marginBottom: "1rem",
            fontSize: "2.5rem",
            fontWeight: "bold",
          }}
        >
          Welcome Back to Your Blog Dashboard
        </h1>
        <p
          style={{
            color: "#666",
            fontSize: "1.2rem",
            maxWidth: "700px",
            margin: "0 auto 2rem",
          }}
        >
          Explore the latest blog posts, manage your content, and discover new
          ideas from our community.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              backgroundColor: "#f8f9fa",
              padding: "1.5rem",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              minWidth: "150px",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                color: "#007bff",
                margin: "0 0 0.5rem",
                fontSize: "2rem",
              }}
            >
              {recentBlogs.length}
            </h3>
            <p style={{ color: "#666", margin: 0, fontSize: "1rem" }}>
              Recent Blogs
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#f8f9fa",
              padding: "1.5rem",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              minWidth: "150px",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                color: "#28a745",
                margin: "0 0 0.5rem",
                fontSize: "2rem",
              }}
            >
              ∞
            </h3>
            <p style={{ color: "#666", margin: 0, fontSize: "1rem" }}>
              Ideas to Explore
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#f8f9fa",
              padding: "1.5rem",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              minWidth: "150px",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                color: "#dc3545",
                margin: "0 0 0.5rem",
                fontSize: "2rem",
              }}
            >
              ✍️
            </h3>
            <p style={{ color: "#666", margin: 0, fontSize: "1rem" }}>
              Write & Share
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/add-blog"
            style={{
              padding: "0.75rem 2rem",
              backgroundColor: "#007bff",
              color: "white",
              textDecoration: "none",
              borderRadius: "25px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              boxShadow: "0 4px 8px rgba(0,123,255,0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 12px rgba(0,123,255,0.4)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 8px rgba(0,123,255,0.3)";
            }}
          >
            Create New Blog
          </Link>
          <Link
            to="/blogs"
            style={{
              padding: "0.75rem 2rem",
              backgroundColor: "transparent",
              color: "#007bff",
              textDecoration: "none",
              borderRadius: "25px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              border: "2px solid #007bff",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#007bff";
              e.target.style.color = "white";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#007bff";
            }}
          >
            View All Blogs
          </Link>
        </div>
      </div>

      {/* Recent Blogs Section */}
      <div
        className="container"
        style={{
          padding: "4rem 2rem",
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          minHeight: "100vh",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "3rem",
            color: "#333",
            fontSize: "2.5rem",
            fontWeight: "bold",
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          Recent Blogs
        </h2>
        {loading ? (
          <div style={{ textAlign: "center", padding: "2rem" }}>
            Loading recent blogs...
          </div>
        ) : recentBlogs.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "2rem",
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
            }}
          >
            <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
              No blogs yet.
            </p>
            <Link
              to="/add-blog"
              style={{
                textDecoration: "none",
                color: "#007bff",
                fontWeight: "bold",
              }}
            >
              Create the first blog
            </Link>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "2rem",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {recentBlogs.map((blog) => (
              <div
                key={blog._id}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "15px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                  padding: "2rem",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  border: "1px solid #e9ecef",
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "translateY(-5px)";
                  e.target.style.boxShadow = "0 15px 35px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
                }}
                onClick={() => (window.location.href = `/blog/${blog._id}`)}
              >
                <h3
                  style={{
                    marginTop: 0,
                    color: "#333",
                    fontSize: "1.4rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {blog.title}
                </h3>
                <p
                  style={{
                    color: "#666",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    fontSize: "1rem",
                  }}
                >
                  By {blog.author}
                </p>
                <p
                  style={{
                    color: "#555",
                    lineHeight: "1.6",
                    marginBottom: "1rem",
                    fontSize: "0.95rem",
                  }}
                >
                  {blog.content.substring(0, 150)}...
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "1rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#999",
                      margin: 0,
                    }}
                  >
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </p>
                  <Link
                    to={`/blog/${blog._id}`}
                    style={{
                      textDecoration: "none",
                      color: "#007bff",
                      fontWeight: "bold",
                      fontSize: "0.95rem",
                      padding: "0.5rem 1rem",
                      borderRadius: "20px",
                      backgroundColor: "#f8f9fa",
                      transition: "background-color 0.3s ease",
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
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        {recentBlogs.length > 0 && (
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link
              to="/blogs"
              style={{
                textDecoration: "none",
                color: "#007bff",
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              View All Blogs
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

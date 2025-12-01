import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero"
        style={{
          textAlign: "center",
          padding: "6rem 2rem",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.1)",
            zIndex: 1,
          }}
        ></div>
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1
            style={{
              fontSize: "4rem",
              marginBottom: "1rem",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            Welcome to Blog Platform
          </h1>
          <p
            style={{
              fontSize: "1.5rem",
              marginBottom: "3rem",
              opacity: 0.9,
              maxWidth: "600px",
              margin: "0 auto 3rem",
            }}
          >
            Discover amazing stories, share your thoughts, and connect with
            writers from around the world
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/blogs"
              style={{
                padding: "1.2rem 3rem",
                backgroundColor: "#fff",
                color: "#667eea",
                textDecoration: "none",
                borderRadius: "50px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
                border: "2px solid #fff",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow = "0 12px 20px rgba(0,0,0,0.3)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 8px 15px rgba(0,0,0,0.2)";
              }}
            >
              Explore Blogs
            </Link>
            <Link
              to="/add-blog"
              style={{
                padding: "1.2rem 3rem",
                backgroundColor: "transparent",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "50px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                border: "2px solid #fff",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#fff";
                e.target.style.color = "#667eea";
                e.target.style.transform = "translateY(-3px)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#fff";
                e.target.style.transform = "translateY(0)";
              }}
            >
              Start Writing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

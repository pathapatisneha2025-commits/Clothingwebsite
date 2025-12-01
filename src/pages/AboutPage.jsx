import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

export default function About() {
  const container = {
    width: "100%",
    minHeight: "100vh",
    background: "#f5f5f5",
    padding: "30px 20px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center"
  };

  const card = {
    width: "100%",
    maxWidth: "1200px",
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    alignItems: "center",
    boxSizing: "border-box"
  };

  const title = {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#111827"
  };

  const desc = {
    fontSize: "16px",
    color: "#4b5563",
    lineHeight: 1.7,
    marginBottom: "20px"
  };

  const bulletRow = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
    fontSize: "16px",
    color: "#111827"
  };

  const icon = {
    fontSize: "20px",
    color: "#f97316"
  };

  const imageBox = {
    width: "100%",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  };

  return (
    <>
      <Navbar />
      <div style={container}>
        <div style={card}>
          {/* Left Content */}
          <div>
            <h1 style={title}>About the Company</h1>
            <p style={desc}>
              This is a dummy About Us section. Replace with your client company details later.
              We are building this layout using MERN stack — frontend only for now. Our platform
              offers stylish and premium products with a seamless experience.
            </p>

            <div>
              <div style={bulletRow}>
                <span style={icon}>🏅</span>
                <span>100% Authentic Products</span>
              </div>

              <div style={bulletRow}>
                <span style={icon}>🤝</span>
                <span>Trusted by Clients</span>
              </div>

              <div style={bulletRow}>
                <span style={icon}>🎖️</span>
                <span>Premium Quality Assured</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div style={imageBox}>
            <img
              src="/images/company-logo.png" // Replace with your actual image
              alt="Company"
              style={imageStyle}
            />
          </div>
        </div>
      </div>
            <div style={{ width: "100%", padding: "40px 20px", boxSizing: "border-box" }}>
  {/* Mission / Vision / Core Values Section */}
  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px",
    marginBottom: "40px"
  }}>

    {/* Mission */}
    <div style={{ background: "white", padding: "30px", borderRadius: "20px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
      <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "10px" }}>🟠 Our Mission</h2>
      <p style={{ color: "#4b5563", lineHeight: 1.6 }}>
        To deliver premium e-commerce solutions with scalable, fast, and clean UI/UX experiences.
      </p>
    </div>

    {/* Vision */}
    <div style={{ background: "white", padding: "30px", borderRadius: "20px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
      <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "10px" }}>🧑‍🤝‍🧑 Our Vision</h2>
      <p style={{ color: "#4b5563", lineHeight: 1.6 }}>
        To build digital storefronts that transform businesses into trusted global brands.
      </p>
    </div>

    {/* Core Values */}
    <div style={{ background: "white", padding: "30px", borderRadius: "20px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
      <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "10px" }}>🏅 Core Values</h2>
      <ul style={{ color: "#4b5563", lineHeight: 1.8, paddingLeft: "20px" }}>
        <li>Quality</li>
        <li>Trust</li>
        <li>Innovation</li>
        <li>Customer First</li>
      </ul>
    </div>
  </div>

  {/* Why Choose Us */}
  <div style={{ background: "white", padding: "30px", borderRadius: "20px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", maxWidth: "1200px", margin: "0 auto" }}>
    <h2 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "10px" }}>🤝 Why Choose Us?</h2>
    <p style={{ color: "#4b5563", lineHeight: 1.7 }}>
      We specialize in building scalable MERN-based e-commerce frontends using clean, responsive, and component-driven architecture.
      This ensures faster iteration, maintainable code, and API-ready UI for backend integration later.
    </p>
  </div>
</div>
      <Footer />
    </>
  );
}

import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

export default function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const container = {
    width: "100%",
    minHeight: "100vh",
    background: "#f5f5f5",
    padding: isMobile ? "20px 10px" : "30px 20px",
    display: "flex",
    justifyContent: "center",
  };

  const card = {
    width: "100%",
    maxWidth: "1200px",
    background: "white",
    padding: isMobile ? "20px" : "40px",
    borderRadius: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: isMobile ? "20px" : "40px",
    alignItems: "center",
  };

  const title = {
    fontSize: isMobile ? "24px" : "32px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#111827",
  };

  const desc = {
    fontSize: isMobile ? "14px" : "16px",
    color: "#4b5563",
    lineHeight: 1.7,
    marginBottom: "20px",
  };

  const bulletRow = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
    fontSize: isMobile ? "14px" : "16px",
    color: "#111827",
  };

  const icon = {
    fontSize: isMobile ? "18px" : "20px",
    color: "#f97316",
  };

  const imageBox = {
    width: "100%",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };

  const infoGrid = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
    gap: isMobile ? "20px" : "30px",
    marginBottom: "40px",
  };

  const infoCard = {
    background: "white",
    padding: isMobile ? "20px" : "30px",
    borderRadius: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };

  const whyCard = {
    background: "white",
    padding: isMobile ? "20px" : "30px",
    borderRadius: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  return (
    <>
      <Navbar />

      {/* Main About Section */}
      <div style={container}>
        <div style={card}>

          {/* LEFT */}
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

          {/* RIGHT */}
          <div style={imageBox}>
            <img
              src="/images/company-logo.png"
              alt="Company"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

        </div>
      </div>

      {/* INFO GRID SECTION */}
      <div style={{ width: "100%", padding: isMobile ? "20px 10px" : "40px 20px" }}>

        <div style={infoGrid}>

          <div style={infoCard}>
            <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "10px" }}>🟠 Our Mission</h2>
            <p style={{ color: "#4b5563", lineHeight: 1.6 }}>
              To deliver premium e-commerce solutions with scalable, fast, and clean UI/UX experiences.
            </p>
          </div>

          <div style={infoCard}>
            <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "10px" }}>🧑‍🤝‍🧑 Our Vision</h2>
            <p style={{ color: "#4b5563", lineHeight: 1.6 }}>
              To build digital storefronts that transform businesses into trusted global brands.
            </p>
          </div>

          <div style={infoCard}>
            <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "10px" }}>🏅 Core Values</h2>
            <ul style={{ color: "#4b5563", lineHeight: 1.8, paddingLeft: "20px" }}>
              <li>Quality</li>
              <li>Trust</li>
              <li>Innovation</li>
              <li>Customer First</li>
            </ul>
          </div>

        </div>

        {/* WHY CHOOSE US */}
        <div style={whyCard}>
          <h2 style={{ fontSize: isMobile ? "18px" : "22px", fontWeight: 700, marginBottom: "10px" }}>🤝 Why Choose Us?</h2>
          <p style={{ color: "#4b5563", lineHeight: 1.7 }}>
            We specialize in building scalable MERN-based e-commerce frontends using clean, responsive,
            and component-driven architecture.
          </p>
        </div>

      </div>

      <Footer />
    </>
  );
}

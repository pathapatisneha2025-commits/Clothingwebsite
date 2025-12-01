import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";

export default function Contact() {
  const container = {
    width: "100%",
    minHeight: "100vh",
    background: "#f5f5f5",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    boxSizing: "border-box"
  };

  const cardWrapper = {
    width: "100%",
    maxWidth: "1200px",
    background: "white",
    padding: "32px",
    borderRadius: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "32px",
    boxSizing: "border-box"
  };

  const sectionTitle = {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "24px"
  };

  const itemRow = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "20px"
  };

  const icon = {
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "28px",
    height: "28px"
  };

  const rightBox = {
    background: "white",
    padding: "24px",
    borderRadius: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  };

  const input = {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    background: "#f3f4f6",
    border: "none",
    outline: "none",
    fontSize: "15px",
    marginBottom: "14px",
    boxSizing: "border-box"
  };

  const textarea = {
    ...input,
    height: "120px",
    resize: "none"
  };

  const button = {
    width: "100%",
    padding: "16px",
    background: "#f97316",
    color: "white",
    border: "none",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer"
  };

  return (
    <>
      {/* MOBILE RESPONSIVE CSS */}
      <style>{`
        @media (max-width: 768px) {
          .contact-card-wrapper {
            grid-template-columns: 1fr !important;
            padding: 20px !important;
            gap: 20px !important;
          }

          .contact-title {
            font-size: 24px !important;
          }

          .contact-right {
            padding: 20px !important;
          }
        }

        @media (max-width: 480px) {
          .contact-card-wrapper {
            padding: 16px !important;
          }

          .contact-title {
            font-size: 22px !important;
          }

          .contact-item-row {
            gap: 8px !important;
          }

          .contact-icon {
            width: 24px !important;
            height: 24px !important;
            font-size: 16px !important;
          }

          .contact-input {
            padding: 12px !important;
            font-size: 14px !important;
          }

          .contact-button {
            padding: 14px !important;
            font-size: 15px !important;
          }
        }
      `}</style>

      <Navbar />

      <div style={container}>
        <div className="contact-card-wrapper" style={cardWrapper}>

          {/* LEFT SECTION */}
          <div>
            <h1 className="contact-title" style={sectionTitle}>Get in Touch</h1>

            <div className="contact-item-row" style={itemRow}>
              <div className="contact-icon" style={icon}>📞</div>
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: 600 }}>Call Us</h3>
                <p style={{ color: "#555" }}>+91 93245 67890</p>
              </div>
            </div>

            <div className="contact-item-row" style={itemRow}>
              <div className="contact-icon" style={icon}>📧</div>
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: 600 }}>Email Us</h3>
                <p style={{ color: "#555" }}>support@clientstore.com</p>
              </div>
            </div>

            <div className="contact-item-row" style={itemRow}>
              <div className="contact-icon" style={icon}>📍</div>
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: 600 }}>Visit Us</h3>
                <p style={{ color: "#555" }}>Tirupati, Andhra Pradesh, India</p>
              </div>
            </div>

            <hr style={{ margin: "24px 0" }} />

            <div style={{ color: "#444", lineHeight: "1.8" }}>
              <p>🎧 Customer support 24/7</p>
              <p>🔒 Fast & secure response</p>
              <p>🏆 Trusted e-commerce solution</p>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="contact-right" style={rightBox}>
            <h2 style={{
              textAlign: "center",
              fontSize: "24px",
              fontWeight: 700,
              marginBottom: "20px"
            }}>
              Send Your Message
            </h2>

            <form>
              <input type="text" placeholder="Your Full Name" className="contact-input" style={input} />
              <input type="email" placeholder="Your Email Address" className="contact-input" style={input} />
              <textarea placeholder="Write your message..." className="contact-input" style={textarea}></textarea>
              <button type="submit" className="contact-button" style={button}>✈️ Send Message</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

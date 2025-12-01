import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detect screen resize and update isMobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navContainer = {
    padding: "15px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #eee",
    position: "sticky",
    top: 0,
    background: "#fff",
    zIndex: 1000,
  };

  const leftLogoSection = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  };

  const logoImg = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    objectFit: "cover",
  };

  const navLinksDesktop = {
    display: "flex",
    gap: "40px",
    fontSize: "16px",
    fontWeight: "500",
    color: "#333",
    listStyle: "none",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#333",
  };

  const rightIcons = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    fontSize: "24px",
    cursor: "pointer",
  };

  const cartIconContainer = {
    position: "relative",
  };

  const cartCount = {
    position: "absolute",
    top: "-8px",
    right: "-10px",
    background: "black",
    color: "white",
    fontSize: "12px",
    width: "18px",
    height: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  };

  const mobileMenu = {
    display: mobileOpen ? "flex" : "none",
    flexDirection: "column",
    gap: "20px",
    padding: "20px",
    background: "#fff",
    borderTop: "1px solid #eee",
    position: "absolute",
    top: "80px",
    left: 0,
    width: "100%",
    zIndex: 999,
  };

  const hamburger = {
    display: "block", // <-- FIXED: Now visible on mobile
    fontSize: "30px",
    cursor: "pointer",
  };

  return (
    <>
      <header style={navContainer}>
        <div style={leftLogoSection}>
          <img src="/your-logo.png" alt="logo" style={logoImg} />
        </div>

        {/* DESKTOP LINKS */}
        {!isMobile && (
          <nav>
            <ul style={navLinksDesktop}>
              <li><Link to="/" style={linkStyle}>Home</Link></li>
              <li><Link to="/shop" style={linkStyle}>Shop</Link></li>
              <li><Link to="/orders" style={linkStyle}>Orders</Link></li>
              <li><Link to="/about" style={linkStyle}>About Us</Link></li>
              <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
            </ul>
          </nav>
        )}

        <div style={rightIcons}>
          <span>👤</span>

          <div style={cartIconContainer}>
            <span>🛒</span>
            <div style={cartCount}>0</div>
          </div>

          {/* MOBILE HAMBURGER */}
          {isMobile && (
            <span style={hamburger} onClick={() => setMobileOpen(!mobileOpen)}>
              ☰
            </span>
          )}
        </div>
      </header>

      {/* MOBILE MENU */}
      {isMobile && (
        <div style={mobileMenu}>
          <Link to="/" style={linkStyle} onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/shop" style={linkStyle} onClick={() => setMobileOpen(false)}>Shop</Link>
          <Link to="/orders" style={linkStyle} onClick={() => setMobileOpen(false)}>Orders</Link>
          <Link to="/about" style={linkStyle} onClick={() => setMobileOpen(false)}>About Us</Link>
          <Link to="/contact" style={linkStyle} onClick={() => setMobileOpen(false)}>Contact</Link>
        </div>
      )}
    </>
  );
}

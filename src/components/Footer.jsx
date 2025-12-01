import React, { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .footer-container {
        width: 100%;
        background: #ffffff;
        border-top: 1px solid #e5e5e5;
        padding: 50px 5%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 40px;
      }

      .footer-title {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 10px;
      }

      .footer-text {
        max-width: 250px;
        font-size: 15px;
        color: #555;
        line-height: 22px;
      }

      .footer-section {
        min-width: 180px;
        flex: 1;
      }

      .footer-section h3 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 12px;
      }

      .footer-section ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .footer-section ul li {
        margin-bottom: 8px;
        font-size: 15px;
        cursor: pointer;
        transition: color 0.3s;
      }

      .footer-section ul li:hover {
        color: #000;
      }

      .social-icons {
        display: flex;
        gap: 10px;
        margin-top: 10px;
        flex-wrap: wrap;
      }

      .social-icons i {
        font-size: 22px;
        cursor: pointer;
        transition: transform 0.3s;
      }

      .social-icons i:hover {
        transform: scale(1.2);
      }

      .footer-bottom {
        text-align: center;
        padding: 15px 0;
        background: #ffffff;
        border-top: 1px solid #eaeaea;
        font-size: 14px;
        color: #555;
      }

      /* 🔥 MOBILE RESPONSIVE */
      @media (max-width: 768px) {
        .footer-container {
          flex-direction: column;
          text-align: center;
          gap: 30px;
          padding: 40px 7%;
        }

        .footer-section {
          min-width: 100%;
        }

        .footer-text {
          max-width: 100%;
          margin: 0 auto;
        }

        .social-icons {
          justify-content: center;
        }
      }

      /* SMALL MOBILE - EXTRA SUPPORT */
      @media (max-width: 480px) {
        .footer-title {
          font-size: 20px;
        }
        .footer-section h3 {
          font-size: 17px;
        }
        .social-icons i {
          font-size: 20px;
        }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <>
      <div className="footer-container">
        
        {/* Left Section */}
        <div className="footer-section">
          <h2 className="footer-title">MB Funky Zone</h2>
          <p className="footer-text">
            Your one stop shop for all premium fashion bags and accessories.
            We deliver quality products built for your lifestyle.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Orders</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li>Casual Bags</li>
            <li>Office Bags</li>
            <li>Travel Bags</li>
            <li>College Bags</li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} MB Funky Zone. All Rights Reserved.
      </div>
    </>
  );
}

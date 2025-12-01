import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

export default function Shop() {
  const container = {
    width: "100%",
    minHeight: "100vh",
    background: "#f5f5f5",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    overflowX: "hidden",
    maxWidth: "100vw",
    boxSizing: "border-box"
  };

  const layout = {
    width: "100%",
    marginTop: "20px",
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    overflowX: "hidden",
    boxSizing: "border-box"
  };

  const sidebar = {
    width: "250px",
    maxWidth: "100%",
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
    boxSizing: "border-box"
  };

  const categoryItem = {
    padding: "10px 15px",
    marginBottom: "10px",
    background: "#efefef",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "500"
  };

  const productsArea = {
    flexGrow: 1,
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
    boxSizing: "border-box",
    minWidth: "250px"
  };

  const searchBox = {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "20px",
    fontSize: "15px",
    boxSizing: "border-box"
  };

  const productGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "20px"
  };

  const productCard = {
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    padding: "15px",
    textAlign: "center"
  };

  const imgStyle = {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "10px"
  };

  const btn = {
    marginTop: "10px",
    width: "100%",
    padding: "10px",
    background: "black",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px"
  };

  const products = [
    { name: "Casual Shirt", price: "₹599", image: "https://i.imgur.com/yYVYQ8Z.jpeg" },
    { name: "Cream Cotton Pants", price: "₹1299", image: "https://i.imgur.com/5lHjvX8.jpeg" },
    { name: "Olive Cargo Pant", price: "₹1499", image: "https://i.imgur.com/VZqVjQH.jpeg" },
    { name: "Black Hoodie", price: "₹1599", image: "https://i.imgur.com/CZC6RzK.jpeg" }
  ];

  return (
    <>
      <Navbar />

      <div style={container}>
        <div style={layout}>
          <div style={sidebar}>
            <h3>Categories</h3>
            {['All Categories','Jackets','Casuals','Formals','Hoodies','Shirt','Pants'].map((cat) => (
              <div key={cat} style={categoryItem}>{cat}</div>
            ))}
          </div>

          <div style={productsArea}>
            <input type="text" placeholder="Search an item..." style={searchBox} />

            <h3>Showing Products</h3>

            <div style={productGrid}>
              {products.map((p) => (
                <div style={productCard} key={p.name}>
                  <img src={p.image} alt={p.name} style={imgStyle} />
                  <h4>{p.name}</h4>
                  <p style={{ fontWeight: "bold" }}>{p.price}</p>
                  <button style={btn}>Buy Now</button>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

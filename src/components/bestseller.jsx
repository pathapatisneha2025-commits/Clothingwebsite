import React from "react";
import { FaTag, FaStar, FaLeaf } from "react-icons/fa";

const bestSellers = [
  {
    id: 1,
    img: "https://i.ibb.co/rdjryGZ/green-shirt.png",
    title: "Casual Shirt",
    rating: 0,
    price: 599,
    oldPrice: 998,
    offer: "40% OFF",
    save: 399,
  },
  {
    id: 2,
    img: "https://i.ibb.co/2ZM8tkB/party-shirt.png",
    title: "Designer Party Shirt",
    rating: 0,
    price: 999,
    oldPrice: 1299,
    offer: "23% OFF",
    save: 300,
  },
  {
    id: 3,
    img: "https://i.ibb.co/5x4ZVN4/cream-pant.png",
    title: "Cream Cotton Pants",
    rating: 0,
    price: 1299,
    oldPrice: 1599,
    offer: "19% OFF",
    save: 300,
  },
  {
    id: 4,
    img: "https://i.ibb.co/m46fQS9/olive-pants.png",
    title: "Olive green premium cotton cargo pant",
    rating: 0,
    price: 1499,
    oldPrice: 1899,
    offer: "21% OFF",
    save: 400,
  },

];

export default function BestSellerProducts() {
  const container = {
    width: "100%",
    padding: "40px 40px",
  };

  const headerBox = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  };

  const title = {
    fontSize: "26px",
    fontWeight: "700",
  };

  const subtitle = {
    marginTop: "5px",
    color: "#666",
    fontSize: "14px",
  };

  const viewBtn = {
    padding: "12px 25px",
    fontSize: "16px",
    borderRadius: "30px",
    background: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
  };

  const grid = {
    display: "flex",
    gap: "25px",
    overflowX: "auto",
    paddingBottom: "10px",
  };

  const card = {
    minWidth: "260px",
    borderRadius: "12px",
    border: "1px solid #eee",
    padding: "10px",
    background: "#fff",
  };

  const offerTag = {
    background: "black",
    color: "white",
    fontSize: "12px",
    padding: "4px 8px",
    borderRadius: "5px",
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    marginBottom: "8px",
  };

  const productImg = {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "10px",
  };

  const productTitle = {
    fontSize: "16px",
    margin: "10px 0 5px 0",
    fontWeight: "600",
  };

  const rating = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontSize: "14px",
    marginBottom: "10px",
  };

  const priceBox = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "10px",
  };

  const oldPrice = {
    textDecoration: "line-through",
    color: "#888",
    fontSize: "14px",
  };

  const saveBox = {
    color: "green",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "14px",
    marginBottom: "12px",
  };

  const buyBtn = {
    width: "100%",
    padding: "12px",
    borderRadius: "30px",
    background: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "500",
  };

  return (
    <div style={container}>
      {/* Header Section */}
      <div style={headerBox}>
        <div>
          <h2 style={title}>Best Seller Products</h2>
          <p style={subtitle}>Most popular products loved by our customers 🔥</p>
        </div>
        <button style={viewBtn}>View All →</button>
      </div>

      {/* Product Cards */}
      <div style={grid}>
        {bestSellers.map((item) => (
          <div style={card} key={item.id}>
            {/* Offer Tag */}
            <div style={offerTag}>
              <FaTag size={12} /> {item.offer}
            </div>

            {/* Image */}
            <img src={item.img} alt={item.title} style={productImg} />

            {/* Title */}
            <h3 style={productTitle}>{item.title}</h3>

            {/* Rating */}
            <div style={rating}>
              <FaStar color="orange" size={14} />
              {item.rating}
            </div>

            {/* Price */}
            <div style={priceBox}>
              <strong>₹{item.price}</strong>
              <span style={oldPrice}>₹{item.oldPrice}</span>
            </div>

            {/* Save Info */}
            <div style={saveBox}>
              <FaLeaf size={14} /> You save ₹{item.save}!
            </div>

            {/* Button */}
            <button style={buyBtn}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

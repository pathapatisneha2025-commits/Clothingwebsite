import React from "react";
import { Tag } from "lucide-react"; // make sure:  npm install lucide-react

// Simple replacements for Card, CardContent, and Button
const Card = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const Button = ({ children, className }) => (
  <button className={className}>{children}</button>
);

const products = [
  {
    id: 1,
    title: "White Minimal Hoodie",
    price: 1599,
    oldPrice: 1999,
    discount: 20,
    img: "https://via.placeholder.com/300x350",
  },
  {
    id: 2,
    title: "Black Premium Hoodie",
    price: 1599,
    oldPrice: 1999,
    discount: 20,
    img: "https://via.placeholder.com/300x350",
  },
  {
    id: 3,
    title: "Olive green premium cotton cargo pant",
    price: 1499,
    oldPrice: 1899,
    discount: 21,
    img: "https://via.placeholder.com/300x350",
  },
  {
    id: 4,
    title: "Cream Cotton Pants",
    price: 1299,
    oldPrice: 1599,
    discount: 19,
    img: "https://via.placeholder.com/300x350",
  },
  {
    id: 5,
    title: "Designer Party Shirt",
    price: 999,
    oldPrice: 1299,
    discount: 23,
    img: "https://via.placeholder.com/300x350",
  },
];

export default function NewArrivals() {
  return (
    <>
      {/* INLINE CSS IN SAME FILE */}
     <style>{`
  * {
    box-sizing: border-box;
  }

  html, body {
    overflow-x: hidden;
    width: 100%;
  }

  .na-container {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    padding: 40px 24px;
  }

  .na-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  .na-title {
    font-size: 32px;
    font-weight: 700;
  }

  .na-view-btn {
    padding: 10px 24px;
    border-radius: 50px;
    background: black;
    color: white;
    border: none;
    cursor: pointer;
  }

  .na-subtext {
    color: gray;
    margin-bottom: 24px;
  }

  .na-grid {
    width: 100%;
    overflow-x: hidden;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }

  @media (min-width: 640px) {
    .na-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 768px) {
    .na-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .na-grid {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  .na-card {
    padding: 12px;
    border-radius: 20px;
    background: white;
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  }

  .na-img-wrapper {
    position: relative;
    width: 100%;
    height: 240px;
    overflow: hidden;
    border-radius: 16px;
  }

  .na-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .na-discount-badge {
    position: absolute;
    top: 12px;
    left: 12px;
    background: black;
    color: white;
    font-size: 11px;
    padding: 5px 10px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .na-card-content {
    padding-top: 16px;
  }

  .na-product-title {
    font-size: 18px;
    font-weight: 600;
  }

  .na-price-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
  }

  .na-price {
    font-size: 20px;
    font-weight: 700;
  }

  .na-old-price {
    text-decoration: line-through;
    color: gray;
  }

  .na-save-text {
    color: green;
    font-size: 14px;
    margin-top: 4px;
  }

  .na-buy-btn {
    width: 100%;
    margin-top: 16px;
    padding: 10px;
    border-radius: 50px;
    background: black;
    color: white;
    border: none;
    cursor: pointer;
  }
`}</style>


      {/* UI */}
      <div className="na-container">
        <div className="na-header">
          <h2 className="na-title">New Arrivals</h2>
          <Button className="na-view-btn">View All</Button>
        </div>

        <p className="na-subtext">
          Add some content in this place later on we can add the related content.
        </p>

        <div className="na-grid">
          {products.map((item) => (
            <Card key={item.id} className="na-card">
              <div className="na-img-wrapper">
                <img src={item.img} alt={item.title} className="na-img" />
                <span className="na-discount-badge">
                  <Tag size={12} /> {item.discount}% OFF
                </span>
              </div>

              <CardContent className="na-card-content">
                <h3 className="na-product-title">{item.title}</h3>

                <div className="na-price-row">
                  <p className="na-price">₹{item.price}</p>
                  <p className="na-old-price">₹{item.oldPrice}</p>
                </div>

                <p className="na-save-text">
                  You save ₹{item.oldPrice - item.price}!
                </p>

                <Button className="na-buy-btn">Buy Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

import React, { useRef, useEffect } from "react";

const products = [
  {
    id: 1,
    img: "https://i.ibb.co/4N5s0z8/black-hoodie.jpg",
    title: "Black Premium Hoodie",
    price: 1599,
    oldPrice: 1999,
    offer: "20% OFF",
  },
  {
    id: 2,
    img: "https://i.ibb.co/0j9JkWk/white-hoodie.jpg",
    title: "White Minimal Hoodie",
    price: 1599,
    oldPrice: 1999,
    offer: "20% OFF",
  },
  {
    id: 3,
    img: "https://i.ibb.co/b3zCSGK/green-shirt.jpg",
    title: "Casual Shirt",
    price: 599,
    oldPrice: 998,
    offer: "40% OFF",
  },
  {
    id: 4,
    img: "https://i.ibb.co/4Zp4xqX/blue-shirt.jpg",
    title: "Designer Party Shirt",
    price: 999,
    oldPrice: 1299,
    offer: "23% OFF",
  },
];

export default function FeaturedProducts() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .carousel-wrapper {
        width: 100%;
        padding: 20px 0;
      }

      .title {
        font-size: 28px;
        font-weight: 700;
        margin-left: 20px;
      }

      .carousel {
        display: flex;
        overflow-x: scroll;
        scrollbar-width: none;
        gap: 25px;
        padding: 20px;
        scroll-behavior: auto;
        white-space: nowrap;
      }
      .carousel::-webkit-scrollbar { display: none; }

      .product-card {
        min-width: 230px;
        background: #fff;
        border-radius: 15px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.15);
        padding: 15px;
        position: relative;
        transition: transform 0.3s ease;
      }

      .product-card:hover {
        transform: scale(1.08);
      }

      .product-card img {
        width: 100%;
        height: 220px;
        border-radius: 12px;
        object-fit: cover;
      }

      .offer-badge {
        position: absolute;
        top: 10px;
        left: 10px;
        background: black;
        color: white;
        padding: 5px 10px;
        border-radius: 6px;
        font-size: 13px;
      }

      .price {
        font-size: 20px;
        font-weight: 600;
        margin-top: 10px;
      }

      .old-price {
        font-size: 15px;
        text-decoration: line-through;
        color: gray;
        margin-left: 8px;
      }

      .buy-btn {
        width: 100%;
        margin-top: 15px;
        padding: 10px;
        background: black;
        color: white;
        border: none;
        font-size: 16px;
        border-radius: 30px;
        cursor: pointer;
      }
      .buy-btn:hover { background: #333; }
    `;
    document.head.appendChild(style);

    const slider = sliderRef.current;
    if (!slider) return;

    const scrollSpeed = 1;

    // Duplicate content WIDTH for smooth loop
    const totalScrollWidth = slider.scrollWidth / 2;

    const autoScroll = () => {
      if (slider.scrollLeft >= totalScrollWidth) {
        slider.scrollLeft = 0; // seamless reset
      }
      slider.scrollLeft += scrollSpeed;
      requestAnimationFrame(autoScroll);
    };

    requestAnimationFrame(autoScroll);

  }, []);

  return (
    <div className="carousel-wrapper">
      <h2 className="title">Featured Products</h2>

      <div className="carousel" ref={sliderRef}>
        {[...products, ...products].map((item, index) => (
          <div key={index} className="product-card">
            <img src={item.img} alt={item.title} />

            <span className="offer-badge">{item.offer}</span>

            <h3>{item.title}</h3>

            <p className="price">
              ₹{item.price}
              <span className="old-price">₹{item.oldPrice}</span>
            </p>

            <button className="buy-btn">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";

export default function CategoriesSection() {
  const sectionStyle = {
    width: "100%",
    padding: "40px 60px",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "10px",
  };

  const subTitleStyle = {
    fontSize: "16px",
    color: "#555",
    width: "70%",
    margin: "0 auto 40px auto",
    lineHeight: "1.5",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "25px",
  };

  const cardStyle = (img) => ({
    height: "260px",
    borderRadius: "20px",
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "20px",
    color: "white",
    fontSize: "18px",
    textShadow: "0px 2px 6px rgba(0,0,0,0.5)",
  });

  const categoryList = [
    {
      id: 1,
      title: "Jackets",
      subtitle: "Premium Jackets for party and travel",
      img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    },
    {
      id: 2,
      title: "Casuals",
      subtitle: "Casuals for daily life",
      img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    },
    {
      id: 3,
      title: "Hoodies",
      subtitle: "Hoodies for men and women",
      img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    },
    {
      id: 4,
      title: "Formals",
      subtitle: "Formals for office work",
      img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
    },
  ];

  return (
    <section style={sectionStyle}>
      {/* ---------- TITLE ---------- */}
      <h2 style={titleStyle}>View Our Range Of Categories</h2>

      <p style={subTitleStyle}>
        Explore our wide collection of fresh, healthy and premium snack options.
        Choose your favorite category and discover delicious treats.
      </p>

      {/* ---------- CATEGORY CARDS ---------- */}
      <div style={gridStyle}>
        {/* FIRST ROW: 3 BIG CARDS */}
        <div style={cardStyle(categoryList[0].img)}>
          <div>{categoryList[0].title}</div>
          <small>{categoryList[0].subtitle}</small>
        </div>

        <div style={cardStyle(categoryList[1].img)}>
          <div>{categoryList[1].title}</div>
          <small>{categoryList[1].subtitle}</small>
        </div>

        <div style={cardStyle(categoryList[2].img)}>
          <div>{categoryList[2].title}</div>
          <small>{categoryList[2].subtitle}</small>
        </div>
      </div>

      {/* ---------- SECOND ROW: 2 CARDS ---------- */}
      <div
        style={{
          ...gridStyle,
          gridTemplateColumns: "repeat(2, 1fr)",
          marginTop: "25px",
          justifyContent: "center",
        }}
      >
        <div style={cardStyle(categoryList[3].img)}>
          <div>{categoryList[3].title}</div>
          <small>{categoryList[3].subtitle}</small>
        </div>

        <div style={cardStyle(categoryList[1].img)}>
          <div>{categoryList[1].title}</div>
          <small>{categoryList[1].subtitle}</small>
        </div>
      </div>
    </section>
  );
}

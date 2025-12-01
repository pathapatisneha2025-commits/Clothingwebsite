import React, { useState, useEffect, useRef } from "react";

export default function HeaderBanner() {
  const slides = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      title: "LIMITED OFFER",
      subtitle: "UP TO 50% OFF",
      button: "GRAB DEALS",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
      title: "NEW ARRIVALS",
      subtitle: "TRENDING FASHION",
      button: "SHOP NOW",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
      title: "WINTER COLLECTION",
      subtitle: "HOT DEALS",
      button: "EXPLORE",
    },
  ];

  // Clone first slide for smooth infinite loop
  const extendedSlides = [...slides, slides[0]];

  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Smooth infinite loop logic
  useEffect(() => {
    if (index === slides.length) {
      // hit the cloned slide → quick reset
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setIndex(0);
      }, 500);

      // restore animation
      setTimeout(() => {
        sliderRef.current.style.transition = "transform 0.6s ease";
      }, 520);
    }
  }, [index]);

  const goNext = () => setIndex((i) => i + 1);
  const goPrev = () => {
    if (index === 0) {
      sliderRef.current.style.transition = "none";
      setIndex(slides.length - 1);
      setTimeout(() => {
        sliderRef.current.style.transition = "transform 0.6s ease";
      }, 20);
    } else {
      setIndex((i) => i - 1);
    }
  };

  // Styles
  const wrapper = {
    width: "100%",
    height: "500px",
    overflow: "hidden",
    position: "relative",
  };

  const slider = {
    display: "flex",
    width: `${extendedSlides.length * 100}%`,
    transform: `translateX(-${(index * 100) / extendedSlides.length}%)`,
    transition: "transform 0.6s ease",
  };

  const slide = (img) => ({
    width: `${100 / extendedSlides.length}%`,
    height: "500px",
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textShadow: "0 4px 10px rgba(0,0,0,0.4)",
  });

  const arrow = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "35px",
    padding: "10px",
    background: "rgba(0,0,0,0.35)",
    color: "#fff",
    borderRadius: "50%",
    cursor: "pointer",
    zIndex: 10,
    userSelect: "none",
  };

  return (
    <div style={wrapper}>
      <div ref={sliderRef} style={slider}>
        {extendedSlides.map((s, i) => (
          <div key={i} style={slide(s.img)}>
            <h3 style={{ letterSpacing: "4px" }}>{s.title}</h3>
            <h1 style={{ fontSize: "50px", margin: "10px 0" }}>
              {s.subtitle}
            </h1>

            <button
              style={{
                padding: "12px 30px",
                background: "white",
                color: "#000",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              {s.button}
            </button>
          </div>
        ))}
      </div>

      <div style={{ ...arrow, left: "15px" }} onClick={goPrev}>
        ❮
      </div>
      <div style={{ ...arrow, right: "15px" }} onClick={goNext}>
        ❯
      </div>
    </div>
  );
}

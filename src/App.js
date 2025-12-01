import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENT IMPORTS
import Navbar from "./components/navbar";
import HeaderBanner from "./components/HeaderBanner";
import CategoriesSection from "./components/categoriessection";
import NewArrivals from "./components/newarrivals";
import BestSellerProducts from "./components/bestseller";
import FeaturedProducts from "./components/featuredproducts";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import About from "./pages/AboutPage";
import Orders from "./pages/Orders";

// PAGES

export default function App() {
  return (
    <Router>
      <>
       
        <Routes>
          {/* HOME PAGE CONTENT */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <HeaderBanner />
                <CategoriesSection />
                <NewArrivals />
                <BestSellerProducts />
                <FeaturedProducts />
                <Footer />
              </>
            }
            
          />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/orders" element={<Orders />} />

                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />



        </Routes>
      </>
    </Router>
  );
}

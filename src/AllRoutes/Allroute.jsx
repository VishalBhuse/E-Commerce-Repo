import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/Navbar/Navbar";
import { About } from "../Pages/About/About";
import { Faq } from "../Pages/FAQ/Faq";
import { Help } from "../Pages/Help/Help";
import Homeindex from "../Pages/Home/Homeindex";
import { Review } from "../Pages/Reviews/Revies";

export const Allroute = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homeindex />} />
        <Route path="/review" element={<Review />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/help" element={<Help />} />
      </Routes>

      <Footer />
    </>
  );
};

import React from "react";
import Homeindex from "../Pages/Home/Homeindex";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { About } from "../Pages/About/About";
import { Faq } from "../Pages/FAQ/Faq";
import { Help } from "../Pages/Help/Help";
import { Review } from "../Pages/Reviews/Revies";
import { Products } from "../Pages/Products/Products";
import { SingleProduct } from "../Components/SingleProCom/SingleProduct";
import { MainCartBag } from "../Components/CartCom/MainCartBag";
import { CheckOutPage } from "../Components/CheckOutCom/CheckOutPage";

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
        <Route path="/:category" element={<Products />} />
        <Route path="/:category/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<MainCartBag />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>

      <Footer />
    </>
  );
};

import { Allroute } from "./AllRoutes/Allroute";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Header from "./Components/HeaderCom/Header";
import Products from "./Page/Products";
import { MainCartBag } from "./Components/CartCom/MainCartBag";
import { Signup } from "./Components/SignupCom/Signup";
import { Login } from "./Components/LoginCom/Login";
import { CheckOutPage } from "./Components/CheckOutCom/CheckOutPage";
import { SingleProduct } from "./Components/SingleProCom/SingleProduct";
import Footer from "./Components/FooterCom/FooterComponent";

function App() {
  return (
    // <div className="App">
    //   <Allroute />
    // </div>
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Products />} />
        <Route path="/:category/:id" element={<SingleProduct />} />
        <Route path="/mainCartBag" element={<MainCartBag />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

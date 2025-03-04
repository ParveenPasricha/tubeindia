import React from "react";
import Count from "./assets/Components/Count";
import Header from "./assets/Components/Header";
import Menu from "./assets/Components/Menu";
import Slider from "./assets/Components/Slider";
import HomePost from "./assets/Components/HomePost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./assets/Components/Login";
import Forget from "./assets/Components/Forget";
import Admin from "./assets/Components/Admin";
import Cart from "./assets/Components/Cart";
import { Toaster } from "react-hot-toast";
import Signup from "./assets/Components/Signup";

const App = () => {
  return (
    <>
      {/* <Count/> */}
      <BrowserRouter>
        <Header />
        <Menu />
        <Toaster/>
        <Routes>
          <Route path="/" element={<><Slider /><HomePost/></>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/forget" element={<Forget/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

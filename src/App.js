import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import AllProduct from "./Components/Body/AllProduct";
import RemoveCart from "./Components/Body/RemoveCart";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login"
import Home from "./Components/Carousel/Home";

const App = () => {

  return (
    <>
    <Navbar />
      <Routes>
        {/* <Route exact path="/" element={<Login />}/> */}
        <Route exact path="/home" element={<Home />}/>
        <Route path="/removecart" element={<RemoveCart />}/>
      </Routes>
    </>
  );
};

export default App;

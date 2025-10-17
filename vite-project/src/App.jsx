import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sports from "./pages/Sports";
import HomeAppliances from "./pages/HomeAppliances";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      {/* Navbar visible everywhere */}
      <Navbar />

      <div className="pt-24 bg-gray-50 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/home-appliances" element={<HomeAppliances />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

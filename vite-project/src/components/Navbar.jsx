import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 cursor-pointer">
          <Link to="/">ShopEase</Link>
        </div>

        {/* Search Bar */}
        <div className="relative flex-1 mx-6 max-w-lg">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-blue-600">
            🔍
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap gap-4 text-gray-700 font-medium">
          <li>
            <Link
              to="/"
              className={`hover:text-blue-600 ${
                location.pathname === "/" ? "text-blue-600" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/groceries"
              className={`hover:text-blue-600 ${
                location.pathname === "/groceries" ? "text-blue-600" : ""
              }`}
            >
              Groceries
            </Link>
          </li>
          <li>
            <Link
              to="/fashion"
              className={`hover:text-blue-600 ${
                location.pathname === "/fashion" ? "text-blue-600" : ""
              }`}
            >
              Fashion
            </Link>
          </li>
          <li>
            <Link
              to="/electronics"
              className={`hover:text-blue-600 ${
                location.pathname === "/electronics" ? "text-blue-600" : ""
              }`}
            >
              Electronics
            </Link>
          </li>
          <li>
            <Link
              to="/beauty"
              className={`hover:text-blue-600 ${
                location.pathname === "/beauty" ? "text-blue-600" : ""
              }`}
            >
              Beauty
            </Link>
          </li>
          <li>
            <Link
              to="/home-appliances"
              className={`hover:text-blue-600 ${
                location.pathname === "/home-appliances" ? "text-blue-600" : ""
              }`}
            >
              Home Appliances
            </Link>
          </li>
          <li>
            <Link
              to="/sports"
              className={`hover:text-blue-600 ${
                location.pathname === "/sports" ? "text-blue-600" : ""
              }`}
            >
              Sports
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className={`hover:text-blue-600 ${
                location.pathname === "/cart" ? "text-blue-600" : ""
              }`}
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className={`hover:text-blue-600 ${
                location.pathname === "/login" ? "text-blue-600" : ""
              }`}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

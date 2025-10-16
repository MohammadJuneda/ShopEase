import React, { useState } from 'react';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (category) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 cursor-pointer">
          ShopEase
        </div>

        {/* Search Bar */}
        <div className="relative flex-1 mx-6 max-w-lg">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-blue-600">
            🔍
          </button>
        </div>

        {/* Right side: Login, Wishlist, Register, Cart */}
        <div className="flex items-center space-x-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600">Login</a>

          <a href="#" className="flex items-center space-x-1 hover:text-blue-600 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 010 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span>Wishlist</span>
          </a>

          <a href="#" className="hover:text-blue-600">Register</a>

          <a href="#" className="relative hover:text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4"
              />
              <circle cx="7" cy="21" r="1" />
              <circle cx="17" cy="21" r="1" />
            </svg>
            {/* Uncomment below to show cart item count badge */}
            {/* <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">2</span> */}
          </a>
        </div>
      </div>

      {/* Categories Menu below search bar */}
      <div className="bg-gray-50 shadow-inner">
        <div className="container mx-auto px-6">
          <ul className="flex space-x-8 text-gray-700 font-medium py-3 relative">
            <li>
              <a href="#" className="hover:text-blue-600">Home</a>
            </li>

            {/* Groceries */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown('groceries')}
                className="hover:text-blue-600 flex items-center space-x-1 focus:outline-none"
              >
                <span>Groceries</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transform ${openDropdown === 'groceries' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'groceries' && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                  <ul className="py-2 text-gray-700">
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Fruits & Vegetables</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Dairy & Eggs</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Beverages</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Snacks</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Bakery</a></li>
                  </ul>
                </div>
              )}
            </li>

            {/* Fashion */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown('fashion')}
                className="hover:text-blue-600 flex items-center space-x-1 focus:outline-none"
              >
                <span>Fashion</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transform ${openDropdown === 'fashion' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'fashion' && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                  <ul className="py-2 text-gray-700">
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Men</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Women</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Kids</a></li>
                  </ul>
                </div>
              )}
            </li>

            {/* Electronics */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown('electronics')}
                className="hover:text-blue-600 flex items-center space-x-1 focus:outline-none"
              >
                <span>Electronics</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transform ${openDropdown === 'electronics' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'electronics' && (
                <div className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-md z-10">
                  <ul className="py-2 text-gray-700">
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Mobile Phones</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Laptops</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Cameras</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Audio</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Accessories</a></li>
                  </ul>
                </div>
              )}
            </li>

            {/* Beauty */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown('beauty')}
                className="hover:text-blue-600 flex items-center space-x-1 focus:outline-none"
              >
                <span>Beauty</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transform ${openDropdown === 'beauty' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'beauty' && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                  <ul className="py-2 text-gray-700">
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Makeup</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Skincare</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Fragrances</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Hair Care</a></li>
                  </ul>
                </div>
              )}
            </li>

            {/* Home Appliances */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown('homeAppliances')}
                className="hover:text-blue-600 flex items-center space-x-1 focus:outline-none"
              >
                <span>Home Appliances</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transform ${openDropdown === 'homeAppliances' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'homeAppliances' && (
                <div className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-md z-10">
                  <ul className="py-2 text-gray-700">
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Kitchen Appliances</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Cleaning Devices</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Heating & Cooling</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Smart Home</a></li>
                  </ul>
                </div>
              )}
            </li>

            {/* Sports */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown('sports')}
                className="hover:text-blue-600 flex items-center space-x-1 focus:outline-none"
              >
                <span>Sports</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transform ${openDropdown === 'sports' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'sports' && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                  <ul className="py-2 text-gray-700">
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Fitness</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Outdoor</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Team Sports</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Accessories</a></li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

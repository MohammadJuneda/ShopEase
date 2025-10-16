import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">ShopEase</div>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-blue-600">Home</a></li>
          <li><a href="#" className="hover:text-blue-600">Shop</a></li>
          <li><a href="#" className="hover:text-blue-600">About</a></li>
          <li><a href="#" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

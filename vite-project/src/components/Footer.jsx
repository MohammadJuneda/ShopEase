import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-4">ShopEase</h3>
          <p className="text-sm text-gray-400">
            Your one-stop shop for fashion, electronics, and more. Experience seamless online shopping with quality and trust.
          </p>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-md font-semibold mb-3">Customer Service</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-400">Returns</a></li>
            <li><a href="#" className="hover:text-blue-400">Shipping Info</a></li>
            <li><a href="#" className="hover:text-blue-400">Track Order</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-md font-semibold mb-3">Categories</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-blue-400">Fashion</a></li>
            <li><a href="#" className="hover:text-blue-400">Electronics</a></li>
            <li><a href="#" className="hover:text-blue-400">Beauty</a></li>
            <li><a href="#" className="hover:text-blue-400">Home Appliances</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-md font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: support@shopease.com</li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Location: New York, USA</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

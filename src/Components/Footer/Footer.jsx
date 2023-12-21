// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Company</h2>
            <ul>
              <li className="mb-2">About Us</li>
              <li className="mb-2">Contact Us</li>
              <li className="mb-2">Privacy Policy</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Categories</h2>
            <ul>
              <li className="mb-2">Electronics</li>
              <li className="mb-2">Clothing</li>
              <li className="mb-2">Home &amp; Garden</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Support</h2>
            <ul>
              <li className="mb-2">FAQs</li>
              <li className="mb-2">Shipping</li>
              <li className="mb-2">Returns</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="mb-4">Subscribe to our newsletter for updates.</p>
            <div className="flex items-center mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-700 text-white px-4 py-2 rounded-l focus:outline-none w-full"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r">Subscribe</button>
            </div>
            <div className="flex items-center">
              <span className="h-6 w-6 mr-2">support@example.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">AccessoriesShop</h2>
          <p className="text-gray-400 text-sm mb-4">
            Your one-stop shop for the latest accessories. High-quality products, great prices, and reliable service.
          </p>
          <div className="flex space-x-3 mt-4">
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-500 transition-colors duration-300">Home</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors duration-300">Shop</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors duration-300">Blog</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors duration-300">About Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-500 transition-colors duration-300">Shipping</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors duration-300">Returns</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors duration-300">Order Tracking</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors duration-300">FAQs</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe for updates, offers, and promotions!
          </p>
          <form className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 rounded-full bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} AccessoriesShop. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
         <Link to="/privacy-policy" className="hover:text-yellow-500">Privacy Policy</Link>
          <span>|</span>
         <Link to="/terms"className="hover:text-yellow-500">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

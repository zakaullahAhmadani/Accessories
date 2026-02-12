import React, { useState } from "react";
import MegaMenu from "./MegaMenu";
import SearchBar from "./SearchBar";
import MiniCart from "./MiniCart";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);
  const [miniCartOpen, setMiniCartOpen] = useState(false);

  // Mock user login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userImage = "/images/user-profile.jpg"; // Placeholder user image

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setCategoriesOpen(false);
    }
  };

  const cartItems = [
    { id: 1, title: "Leather Wallet", image: "/images/wallet.jpg", quantity: 2, price: 29.99 },
    { id: 2, title: "Sunglasses", image: "/images/sunglasses.jpg", quantity: 1, price: 49.99 },
  ];
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-yellow-500">AccessoriesShop</Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-yellow-500">Home</Link>
            <Link to="/shop" className="text-gray-700 hover:text-yellow-500">Shop</Link>

            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCategoriesOpen(!isCategoriesOpen)}
                className="text-gray-700 hover:text-yellow-500 flex items-center"
              >
                Categories
                <svg className={`w-4 h-4 ml-1 transform ${isCategoriesOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </button>
              {isCategoriesOpen && (
                <div className="absolute bg-white border shadow-lg mt-2 rounded w-48">
                  <Link to="/MenAccessories" className="block px-4 py-2 hover:bg-gray-100">Men Accessories</Link>
                  <Link to="/WomenAccessoriesShop" className="block px-4 py-2 hover:bg-gray-100">Women Accessories</Link>
                  <Link to="/KidsAccessories" className="block px-4 py-2 hover:bg-gray-100">Kids Accessories</Link>
                  <Link to="/FashionAccessories" className="block px-4 py-2 hover:bg-gray-100">Fashion</Link>
                </div>
              )}
            </div>

            <Link to="/Services" className="text-gray-700 hover:text-yellow-500">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-yellow-500">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-yellow-500">Contact</Link>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-full pl-3 pr-8 py-1 focus:outline-none focus:ring-yellow-500 focus:ring-2"
              />
              <svg className="w-4 h-4 absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400" viewBox="0 0 24 24">
                <path d="M21 21l-4.35-4.35M16.65 10.65a6 6 0 1 1-12 0 6 6 0 0 1 12 0z" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>

            {/* Cart */}
            <button onClick={() => setMiniCartOpen(true)} className="relative text-gray-600 hover:text-yellow-500">
              <FaShoppingCart size={22} />
              <span className="absolute -top-1 -right-2 text-xs bg-yellow-500 text-white px-1 rounded-full">
                {cartItems.length}
              </span>
            </button>

            {/* Auth / User */}
            {!isLoggedIn ? (
              <>
                <button onClick={() => setShowLogin(true)} className="text-gray-700 hover:text-yellow-500">Sign In</button>
                <button onClick={() => setShowRegister(true)} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Sign Up</button>
              </>
            ) : (
              <Link to="/dashboard">
                <img
                  src={userImage}
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-yellow-500"
                />
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className="md:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            <Link to="/" className="block text-gray-700 hover:text-yellow-500">Home</Link>
            <Link to="/shop" className="block text-gray-700 hover:text-yellow-500">Shop</Link>
            <button onClick={() => setCategoriesOpen(!isCategoriesOpen)} className="w-full text-left text-gray-700 hover:text-yellow-500">
              Categories
            </button>
            {isCategoriesOpen && (
              <div className="ml-4 space-y-1">
                <Link to="/MenAccessories" className="block text-gray-700 hover:text-yellow-500">Men Accessories</Link>
                <Link to="/WomenAccessoriesShop" className="block text-gray-700 hover:text-yellow-500">Women Accessories</Link>
                <Link to="/KidsAccessories" className="block text-gray-700 hover:text-yellow-500">Kids Accessories</Link>
                <Link to="/FashionAccessories" className="block text-gray-700 hover:text-yellow-500">Fashion</Link>
              </div>
            )}
            <Link to="/Services" className="block text-gray-700 hover:text-yellow-500">Services</Link>
            <Link to="/about" className="block text-gray-700 hover:text-yellow-500">About</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-yellow-500">Contact</Link>

            {!isLoggedIn ? (
              <div className="flex flex-col space-y-2 mt-2">
                <button onClick={() => setShowLogin(true)} className="text-left text-gray-700 hover:text-yellow-500">Sign In</button>
                <button onClick={() => setShowRegister(true)} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Sign Up</button>
              </div>
            ) : (
              <Link to="/dashboard">
                <img
                  src={userImage}
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-yellow-500"
                />
              </Link>
            )}
          </div>
        )}
      </nav>

      {/* Cart Drawer */}
      <MiniCart
        isOpen={miniCartOpen}
        onClose={() => setMiniCartOpen(false)}
        cartItems={cartItems}
        subtotal={subtotal}
        onRemoveItem={(id) => console.log("Remove item with ID:", id)}
      />

      {/* Modals */}
      <LoginForm isOpen={showLogin} onClose={() => { setShowLogin(false); setIsLoggedIn(true); }} />
      <RegisterForm isOpen={showRegister} onClose={() => { setShowRegister(false); setIsLoggedIn(true); }} />
    </>
  );
};

export default Navbar;

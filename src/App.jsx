// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategoryList from './components/CategoryList';
import FeaturedProducts from './components/FeaturedProducts';
import ProductCard from './components/ProductCard';
import PromoBanner from './components/PromoBanner';
import Testimonials from './components/Testimonials';
import NewsletterSignup from './components/NewsletterSignup';
import BlogPreview from './components/BlogPreview';
import ProductGrid from './components/ProductGrid';
import products from './data/products';
import BrandsCarousel from './components/BrandsCarousel';
import FAQs from './components/FAQs';
import Footer from './components/Footer';

import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import WishlistPage from './pages/WishlistPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import UserDashboard from './pages/UserDashboard';
import OrderHistoryPage from './pages/OrderHistoryPage';
import AccountSettingsPage from './pages/AccountSettingsPage';
import WomenAccessoriesShop from './pages/WomenAccessories';
import MenAccessories from './pages/MenAccessories';
import KidsAccessories from './pages/KidsAccessories';
import FashionAccessories from './pages/FashionAccessories';
import Services from './pages/Services';
import AdminDashboard from './pages/AdminDashboard';
import CartPage from './pages/CartPage';

import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    toast.success(`${product.title} added to cart!`);
  };

  const handleRemoveFromCart = (product) => {
    setCartItems((prev) => prev.filter((item) => item.id !== product.id));
    toast.error(`Item removed from cart.`);
  };

  const handleClearCart = () => {
    setCartItems([]);
    toast.info('Cart cleared.');
  };

  const handleAddToWishlist = (product) => {
    setWishlistItems((prev) => [...prev, product]);
    toast.success(`${product.title} added to wishlist!`);
  };

  const handleRemoveFromWishlist = (product) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== product.id));
    toast.info(`Item removed from wishlist.`);
  };

  const handleMoveToCart = (product) => {
    handleAddToCart(product);
    handleRemoveFromWishlist(product);
    toast.success(`${product.title} moved to cart.`);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <CategoryList />
              <FeaturedProducts />
              <section className="py-10">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                  Featured Products
                </h2>
                <ProductGrid products={products} onAddToCart={handleAddToCart} onAddToWishlist={handleAddToWishlist} />
              </section>
              <ProductCard />
              <PromoBanner />
              <Testimonials />
              <NewsletterSignup />
              <BlogPreview />
              <BrandsCarousel />
              <FAQs />
              <Footer />
            </>
          }
        />

        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route
          path="/wishlist"
          element={
            <WishlistPage
              wishlistItems={wishlistItems}
              onRemoveFromWishlist={handleRemoveFromWishlist}
              onMoveToCart={handleMoveToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              onRemoveFromCart={handleRemoveFromCart}
              onClearCart={handleClearCart}
            />
          }
        />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/order-history" element={<OrderHistoryPage />} />
        <Route path="/account-settings" element={<AccountSettingsPage />} />
        <Route path="/MenAccessories" element={<MenAccessories />} />
        <Route path="/WomenAccessoriesShop" element={<WomenAccessoriesShop />} />
        <Route path="/KidsAccessories" element={<KidsAccessories />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/FashionAccessories" element={<FashionAccessories />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <ToastContainer position="top-right" autoClose={2000} />
    </Router>
  );
}

export default App;
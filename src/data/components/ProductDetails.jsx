import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";
import ProductGallery from "./ProductGallery";
import RelatedProducts from "../components/RelatedProducts";
import RecentlyViewed from "../components/RecentlyViewed";
import ProductTabs from "../components/ProductTabs";
import ProductReviews from "../components/ProductReviews";


const ProductDetails = ({ product }) => {
  if (!product) {
    return (
      <div className="text-center text-gray-500 py-10">
        Loading product...
      </div>
    );
  }

  return (
    
    <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left: Product Gallery */}
      <div className="flex flex-col items-center">
        <ProductGallery images={product.gallery || [product.image]} />
      </div>
 <div>
      {/* ...Product info/components... */}
      <RecentlyViewed />
    </div>
     <div className="container mx-auto px-4">
      {/* Product Image, Info, etc. */}
      <ProductTabs />
    </div>
     <div className="container mx-auto px-4">
    {/* Other product info */}
    <ProductReviews />
  </div>
      {/* Right: Product Info */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          {product.title}
        </h1>

        <div className="flex items-center space-x-2 mb-2">
          <div className="flex text-yellow-400">
            {[1, 2, 3, 4, 5].map((i) => (
              <FaStar key={i} className="h-5 w-5" />
            ))}
          </div>
          <span className="text-gray-500 text-sm">(25 reviews)</span>
        </div>

        <p className="text-gray-700 mb-4">{product.description}</p>

        <p className="text-2xl text-yellow-500 font-bold mb-4">
          ${product.price.toFixed(2)}
        </p>
  <RelatedProducts />
        {/* Quantity selector */}
        <div className="flex items-center mb-6">
          <span className="text-gray-700 mr-3">Quantity:</span>
          <input
            type="number"
            min={1}
            defaultValue={1}
            className="w-16 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div className="flex space-x-4 mb-4">
          <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition">
            Add to Cart
          </button>

        <Link
  to="/wishlist" className="flex items-center px-4 py-3 border border-yellow-500 text-yellow-500 rounded hover:bg-yellow-50">
            <FaHeart className="mr-2" />
            Add to Wishlist
         </Link>
        </div>

        <ul className="text-gray-600 space-y-1 text-sm mt-4">
          <li>✔ Free shipping on orders over $50</li>
          <li>✔ 30-day return policy</li>
          <li>✔ Secure online payment</li>
        </ul>
      </div>
    </section>
  );
};

export default ProductDetails;

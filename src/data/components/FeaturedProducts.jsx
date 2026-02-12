import React from "react";
import { Link } from "react-router-dom";
import featuredProducts from "../data/featuredProducts";

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-50 to-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Featured Accessories
          </h2>
          <p className="mt-3 text-gray-500 text-lg">
            Discover the latest trends in accessories to elevate your style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="overflow-hidden rounded-t-2xl">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {product.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-yellow-600">
                    ${product.price}
                  </span>
                  <button className="bg-yellow-500 text-white px-4 py-2 text-sm rounded hover:bg-yellow-600 transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

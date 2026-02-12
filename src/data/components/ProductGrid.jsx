import React from "react";
import { Link } from "react-router-dom";

const ProductGrid = ({ products }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Shop Accessories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
            >
              {/* Image and Title with Link */}
              <Link to={`/product/${product.id}`}>
                <div className="relative w-full h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
                  />
                  {product.isNew && (
                    <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                      New
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-gray-700 px-4 pt-4">
                  {product.title}
                </h3>
              </Link>

              {/* Content */}
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-2">
                  {product.description.substring(0, 60)}...
                </p>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-bold text-yellow-500">
                    ${product.price.toFixed(2)}
                  </span>

                  <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition">
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

export default ProductGrid;

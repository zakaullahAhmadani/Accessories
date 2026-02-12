// src/components/QuickViewModal.jsx

import React from "react";
import { FaTimes } from "react-icons/fa";

const QuickViewModal = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
        >
          <FaTimes />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover rounded"
            />
          </div>

          {/* Product Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {product.title}
            </h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-yellow-500 font-bold text-xl mb-4">
              ${product.price.toFixed(2)}
            </p>

            <button className="px-5 py-3 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;

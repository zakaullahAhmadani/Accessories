import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product = {} }) => {
  const {
    id = "0",
    image = "/images/fashion.webp", // must start with "/" to refer from public
    title = "fashion",
    description =
      "Accessories are supplementary items that enhance the functionality, appearance, or convenience of a primary product. In fashion, accessories like watches, belts, bags, sunglasses, and jewelry are used to complement clothing and express personal style. In electronics, accessories include items like phone cases, chargers, headphones, and screen protectors that support or improve the performance of devices. In automobiles, accessories such as seat covers, mats, or GPS systems add comfort, style, and utility.",
    price = "$45.90",
  } = product;

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "/images/fashion1.webp"; // fallback must also use public path
  };

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition duration-300">
      {/* Image section with Link */}
      <div className="md:w-1/3 relative group">
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt={title}
            className="w-full h-72 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={handleImageError}
          />
          <div className="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            New
          </div>
        </Link>
      </div>

      {/* Content section */}
      <div className="flex flex-col justify-between p-6 md:w-2/3">
        <div>
          <Link to={`/product/${id}`}>
            <h3 className="text-2xl font-bold text-gray-800 mb-2 hover:underline">
              {title}
            </h3>
          </Link>
          <p className="text-gray-600 text-base mb-4">{description}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-yellow-600 text-xl font-bold">{price}</span>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

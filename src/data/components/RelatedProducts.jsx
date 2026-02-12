import React from "react";

const relatedItems = [
  {
    id: 1,
    name: "Stylish Sunglasses",
    price: "$29.99",
    image: "/images/sunglasses.webp",
  },
  {
    id: 2,
    name: "Leather Wallet",
    price: "$49.99",
    image: "/images/wallet.webp",
  },
  {
    id: 3,
    name: "Casual Watch",
    price: "$89.99",
    image: "/images/watch.webp",
  },
  {
    id: 4,
    name: "Smart Backpack",
    price: "$59.99",
    image: "/images/backpack.webp",
  },
];

const RelatedProducts = () => {
  return (
    <div className="py-10 px-4 bg-white mt-10 shadow rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {relatedItems.map((item) => (
          <div
            key={item.id}
            className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition duration-200"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="mt-2 text-md font-semibold text-gray-700">{item.name}</h3>
            <p className="text-yellow-600 font-bold mt-1">{item.price}</p>
            <button className="mt-2 px-3 py-1 text-sm text-yellow-600 border border-yellow-500 rounded hover:bg-yellow-50">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;

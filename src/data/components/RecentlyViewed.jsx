import React from "react";

const recentlyViewed = [
  {
    id: 1,
    name: "Men's Aviator Sunglasses",
    price: "$35.00",
    image: "/images/sunglasses.webp",
  },
  {
    id: 2,
    name: "Smart Leather Wallet",
    price: "$45.00",
    image: "/images/wallet.webp",
  },
  {
    id: 3,
    name: "Digital Watch",
    price: "$70.00",
    image: "/images/watch.webp",
  },
];

const RecentlyViewed = () => {
  return (
    <div className="mt-10 px-4 py-8 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Recently Viewed</h2>
      <div className="flex space-x-4 overflow-x-auto">
        {recentlyViewed.map((item) => (
          <div
            key={item.id}
            className="min-w-[200px] bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-36 object-cover rounded"
            />
            <h3 className="mt-2 text-sm font-medium text-gray-700">{item.name}</h3>
            <p className="text-yellow-600 font-semibold">{item.price}</p>
            <button className="mt-2 w-full text-sm text-yellow-600 border border-yellow-500 px-3 py-1 rounded hover:bg-yellow-50">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;

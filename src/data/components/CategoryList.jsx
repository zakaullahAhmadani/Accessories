import React from "react";

const categories = [
  {
    name: "Men Accessories",
    image:
      "images/Men Accessories.webp",
    description: "Latest styles for men. Hats, belts, watches, and more.",
  },
  {
    name: "Women Accessories",
    image:
      "images/Women Accessories.webp",
    description: "Elegant and modern accessories for women.",
  },
  {
    name: "Kids Accessories",
    image:
      "images/Kids Accessories.webp",
    description: "Fun and colorful accessories for kids of all ages.",
  },
  {
    name: "Fashion",
    image:
      "images/Fashion.webp",
    description: "Trend-setting fashion accessories to elevate your style.",
  },
  {
    name: "Bags & Wallets",
    image:
      "images/Bags & Wallets.webp",
    description: "Premium bags and wallets for every occasion.",
  },
  {
    name: "Jewelry",
    image:
      "images/Jewelry.webp",
    description: "Sparkling jewelry to complete your look.",
  },
];

const CategoryList = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
          Shop By Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="relative rounded-lg overflow-hidden shadow group cursor-pointer transition duration-300"
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover transform group-hover:scale-110 group-hover:opacity-0 transition duration-500"
              />

              {/* Overlay that fades in */}
              <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-gray-900 text-xl font-bold mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  {category.description}
                </p>
                <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;

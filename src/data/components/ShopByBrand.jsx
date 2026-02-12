import React from "react";

const brands = [
  { id: 1, name: "Nike", logo: "/images/nike.webp" },
  { id: 2, name: "Adidas", logo: "/images/adidas.webp" },
  { id: 3, name: "Puma", logo: "/images/puma.webp" },
  { id: 4, name: "Gucci", logo: "/images/gucci.webp" },
  { id: 5, name: "Louis Vuitton", logo: "/images/brands.webp" }
];

const ShopByBrand = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Shop by Brand</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="flex flex-col items-center hover:shadow-lg p-4 rounded-lg transition duration-200 bg-gray-50 hover:bg-yellow-50 cursor-pointer"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-16 object-contain mb-2"
            />
            <p className="text-sm font-medium text-gray-700">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByBrand;

import React from "react";

const products = [
  {
    id: 1,
    name: "Unisex Sunglasses",
    price: "PKR 1,800",
    image: "/images/fashion-sunglasses.jpg",
  },
  {
    id: 2,
    name: "Leather Handbag",
    price: "PKR 3,200",
    image: "/images/fashion-handbag.jpg",
  },
  {
    id: 3,
    name: "Designer Watch",
    price: "PKR 4,500",
    image: "/images/fashion-watch.jpg",
  },
  {
    id: 4,
    name: "Silk Scarf",
    price: "PKR 1,100",
    image: "/images/fashion-scarf.jpg",
  },
];

const services = [
  {
    id: 1,
    title: "Fashion Consultancy",
    description: "Get paired accessories with expert advice.",
  },
  {
    id: 2,
    title: "Seasonal Discounts",
    description: "Up to 50% off during seasonal sales and festivals.",
  },
  {
    id: 3,
    title: "Fast Shipping",
    description: "Same-day delivery available in selected cities.",
  },
];

const FashionAccessoriesShop = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-700 to-pink-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Fashion Accessories Shop</h1>
        <p className="mt-2 text-lg">Modern Style | Premium Quality | Affordable Price</p>
      </div>

      {/* Product Section */}
      <section className="py-10 px-6 md:px-16">
        <h2 className="text-2xl font-semibold mb-6">Our Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-pink-600 font-semibold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 px-6 md:px-16 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="border-l-4 border-pink-500 bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-700 to-pink-500 text-white text-center py-6 mt-10">
        <p>&copy; 2025 Fashion Accessories Shop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FashionAccessoriesShop;

import React from "react";

const products = [
  {
    id: 1,
    name: "Elegant Handbag",
    price: "PKR 2,800",
    image: "/images/handbag.jpg",
  },
  {
    id: 2,
    name: "Stylish Sunglasses",
    price: "PKR 1,400",
    image: "/images/women-sunglasses.jpg",
  },
  {
    id: 3,
    name: "Designer Scarf",
    price: "PKR 1,200",
    image: "/images/scarf.jpg",
  },
  {
    id: 4,
    name: "Jewelry Set",
    price: "PKR 3,500",
    image: "/images/jewelry.jpg",
  },
];

const services = [
  {
    id: 1,
    title: "Style Consultation",
    description: "Free accessory styling advice for premium customers.",
  },
  {
    id: 2,
    title: "Gift Packaging",
    description: "Deluxe wrapping and custom notes available on request.",
  },
  {
    id: 3,
    title: "Free Shipping",
    description: "Nationwide free delivery on orders over PKR 2,000.",
  },
];

const WomenAccessoriesShop = () => {
  return (
    <div className="bg-pink-50 text-gray-800">
      {/* Header */}
      <div className="bg-pink-700 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Women's Accessories Shop</h1>
        <p className="mt-2 text-lg">Elegant. Trendy. Timeless.</p>
      </div>

      {/* Products */}
      <section className="py-10 px-6 md:px-16">
        <h2 className="text-2xl font-semibold mb-6">Our Products</h2>
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

      {/* Services */}
      <section className="py-10 px-6 md:px-16 bg-white">
        <h2 className="text-2xl font-semibold mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="border-l-4 border-pink-500 bg-pink-50 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-700 text-white text-center py-6 mt-10">
        <p>&copy; 2025 Women Accessories Shop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default WomenAccessoriesShop;

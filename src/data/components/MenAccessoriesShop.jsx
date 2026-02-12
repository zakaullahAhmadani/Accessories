import React from "react";

const products = [
  {
    id: 1,
    name: "Men's Leather Wallet",
    price: "PKR 1,200",
    image: "/images/wallet.jpg",
  },
  {
    id: 2,
    name: "Stylish Sunglasses",
    price: "PKR 1,500",
    image: "/images/sunglasses.jpg",
  },
  {
    id: 3,
    name: "Classic Wrist Watch",
    price: "PKR 3,000",
    image: "/images/watch.jpg",
  },
  {
    id: 4,
    name: "Leather Belt",
    price: "PKR 850",
    image: "/images/belt.jpg",
  },
];

const services = [
  {
    id: 1,
    title: "Gift Wrapping",
    description: "Beautiful gift packaging for special occasions.",
  },
  {
    id: 2,
    title: "Customization",
    description: "Engraving available on watches and belts.",
  },
  {
    id: 3,
    title: "Free Delivery",
    description: "Free shipping on orders over PKR 3,000.",
  },
];

const MenAccessoriesShop = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="bg-black text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Men's Accessories Shop</h1>
        <p className="mt-2 text-lg">Premium products and services for men</p>
      </div>

      {/* Product Section */}
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
                <p className="text-yellow-600 font-semibold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 px-6 md:px-16 bg-white">
        <h2 className="text-2xl font-semibold mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="border-l-4 border-yellow-500 bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6 mt-10">
        <p>&copy; 2025 Men Accessories Shop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MenAccessoriesShop;

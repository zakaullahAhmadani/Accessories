import React from "react";

const products = [
  {
    id: 1,
    name: "Cartoon Backpack",
    price: "PKR 1,200",
    image: "/images/kids-backpack.jpg",
  },
  {
    id: 2,
    name: "Kids Sunglasses",
    price: "PKR 850",
    image: "/images/kids-sunglasses.jpg",
  },
  {
    id: 3,
    name: "Colorful Cap",
    price: "PKR 600",
    image: "/images/kids-cap.jpg",
  },
  {
    id: 4,
    name: "Fun Watch",
    price: "PKR 950",
    image: "/images/kids-watch.jpg",
  },
];

const services = [
  {
    id: 1,
    title: "Gift Bundles",
    description: "Pre-packed gift sets for birthdays and events.",
  },
  {
    id: 2,
    title: "Cartoon Themes",
    description: "Custom accessories with favorite cartoon characters.",
  },
  {
    id: 3,
    title: "Free Returns",
    description: "Easy returns within 7 days for kids items.",
  },
];

const KidsAccessoriesShop = () => {
  return (
    <div className="bg-blue-50 text-gray-800">
      {/* Header */}
      <div className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Kids Accessories Shop</h1>
        <p className="mt-2 text-lg">Colorful, Fun & Safe for Little Ones</p>
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
                <p className="text-blue-600 font-semibold">{product.price}</p>
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
              className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-6 mt-10">
        <p>&copy; 2025 Kids Accessories Shop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default KidsAccessoriesShop;

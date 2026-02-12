import React from "react";

const allServices = [
  {
    category: "Men Accessories",
    services: [
      "Free Delivery on orders above PKR 3,000",
      "Customization (e.g., belt engraving, watch adjustment)",
      "Gift Wrapping with masculine themes",
    ],
  },
  {
    category: "Women Accessories",
    services: [
      "Free Shipping on orders above PKR 2,000",
      "Styling Consultation for handbags and jewelry",
      "Premium Gift Packaging for special events",
    ],
  },
  {
    category: "Kids Accessories",
    services: [
      "7-Day Easy Returns",
      "Cartoon Character Themes (custom)",
      "Pre-packed Birthday Gift Bundles",
    ],
  },
  {
    category: "Fashion Accessories",
    services: [
      "Same-Day Delivery in selected cities",
      "Seasonal Discounts & Festival Offers",
      "Fashion Matching Consultation",
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Header */}
      <div className="bg-black text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="mt-2 text-lg">Enhancing your experience beyond accessories</p>
      </div>

      {/* Services */}
      <section className="py-10 px-6 md:px-20">
        {allServices.map((section, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-2xl font-bold text-yellow-600 mb-4">{section.category}</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              {section.services.map((service, i) => (
                <li key={i} className="text-base">{service}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6 mt-10">
        <p>&copy; 2025 Accessories Shop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ServicesPage;

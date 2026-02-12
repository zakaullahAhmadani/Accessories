import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-yellow-600 mb-2">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed">
          Welcome to AccessoriesShop, your go-to destination for stylish and affordable fashion accessories. 
          We are passionate about helping people express their unique style through high-quality products.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-yellow-600 mb-2">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          To deliver trendsetting accessories that empower our customers to feel confident and look great—without breaking the bank.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-yellow-600 mb-2">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          To become the most loved accessories brand globally by maintaining trust, style, and exceptional customer service.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-yellow-600 mb-2">Our Values</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Customer satisfaction</li>
          <li>Innovation and creativity</li>
          <li>Integrity and trust</li>
          <li>Eco-conscious and sustainable practices</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;

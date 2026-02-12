import React from "react";

const PromoBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-yellow-50 to-yellow-100 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="images/promo.webp"
          alt="Accessories Banner"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Upgrade Your Style with <br /> Stunning Accessories
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Discover premium handbags, jewelry, and fashion essentials to
            elevate your look. Enjoy exclusive offers and limited-time
            discounts. Shop now and transform your everyday style.
          </p>
          <a
            href="/shop"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            Shop Now
          </a>
        </div>
        <div className="mt-10 md:mt-0 md:w-1/2">
          <img
            src="images/promo1.webp"
            alt="Featured Product"
            className="w-full h-auto rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;

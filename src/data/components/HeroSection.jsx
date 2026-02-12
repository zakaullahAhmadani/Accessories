import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const images = [
    "/images/hero1.webp",
    "/images/hero2.webp",
    "/images/hero3.webp",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <section className="relative bg-yellow-50">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-300 via-yellow-400 to-yellow-500 opacity-30 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="bg-white/50 backdrop-blur-md rounded-xl p-5 shadow-md">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Premium Accessories for Every Style
            </h1>
            <p className="text-gray-800 text-base md:text-lg mb-5">
              Curated for charm, crafted for confidence. Elevate your look with timeless pieces.
            </p>
            <a
              href="#shop"
              className="inline-flex items-center px-5 py-2.5 bg-yellow-500 text-white text-base font-medium rounded-full shadow hover:bg-yellow-600 transition"
            >
              Shop Now
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Slider */}
        <div className="flex-1 w-full max-w-md">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="px-2">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="rounded-lg shadow w-full max-h-[280px] object-cover transition hover:scale-105 duration-300"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

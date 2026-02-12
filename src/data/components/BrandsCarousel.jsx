import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

const brandLogos = [
  {
    id: 1,
    name: "Brand A",
    logo: "images/Brand A.webp",
  },
  {
    id: 2,
    name: "Brand B",
    logo: "images/Brand B.webp",
  },
  {
    id: 3,
    name: "Brand C",
    logo: "images/Brand C.webp",
  },
  {
    id: 4,
    name: "Brand D",
    logo: "images/Brand D.webp",
  },
  {
    id: 5,
    name: "Brand E",
    logo: "images/Brand E.webp",
  },
  {
    id: 6,
    name: "Brand F",
    logo: "images/Brand F.webp",
  },
];

const BrandsCarousel = () => {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-10">
          Trusted By Leading Brands
        </h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="brands-carousel"
        >
          {brandLogos.map((brand) => (
            <SwiperSlide key={brand.id}>
              <div className="flex justify-center items-center h-28 px-4">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-full w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BrandsCarousel;

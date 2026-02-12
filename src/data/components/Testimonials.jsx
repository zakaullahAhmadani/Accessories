import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    title: "Dubai Marina",
    review:
      "Amazing service! The team was professional, punctual, and exceeded my expectations for furniture pickup and delivery.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Ravi Kumar",
    title: "JLT Dubai",
    review:
      "Super smooth process. My fridge was picked up and delivered without a hitch. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Sara Lee",
    title: "Business Bay",
    review:
      "Excellent same-day furniture pick up and delivery. Very fast and careful with my items.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Chen",
    title: "Downtown Dubai",
    review:
      "Very professional and reasonably priced for washing machine pickup and delivery.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 4,
  },
  {
    id: 5,
    name: "Fatima Al Mansoori",
    title: "Dubai Hills",
    review:
      "Great job with my furniture pickup and delivery near me. Everything arrived safely!",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    rating: 5,
  },
  {
    id: 6,
    name: "James Carter",
    title: "Silicon Oasis",
    review:
      "Fast refrigerator pick up and delivery service. Technicians were polite and efficient.",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    rating: 5,
  },
  {
    id: 7,
    name: "Amira Nabil",
    title: "Palm Jumeirah",
    review:
      "I’m thrilled with the same day furniture pick up service. Super convenient and affordable.",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    rating: 4,
  },
  {
    id: 8,
    name: "Ahmed Saeed",
    title: "Al Barsha",
    review:
      "The appliance pickup and delivery team handled my items carefully and professionally.",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    rating: 5,
  },
  {
    id: 9,
    name: "Emily Davis",
    title: "Jumeirah Village",
    review:
      "Highly recommend their services for furniture pick up and delivery. Excellent communication and timely service.",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          What Our Customers Are Saying
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          loop={true}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-500">{item.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-base mb-4 flex-grow">
                  “{item.review}”
                </p>
                <div className="flex space-x-1 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < item.rating ? "fill-current" : "text-gray-300"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973h4.184c.969 0 1.371 1.24.588 1.81l-3.39 2.464 1.287 3.973c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.376 2.417c-.784.57-1.838-.197-1.539-1.118l1.287-3.973-3.39-2.464c-.783-.57-.38-1.81.588-1.81h4.183L9.05 2.927z" />
                    </svg>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

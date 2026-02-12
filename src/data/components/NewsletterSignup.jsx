import React from "react";

const NewsletterSignup = () => {
  return (
    <section
      className="relative w-full py-20 bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Join Our Newsletter
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Subscribe for exclusive updates, special offers, and more. Stay
          connected with our latest news!
        </p>

        <form className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-96 px-5 py-3 rounded-full border-none outline-none text-gray-800 placeholder-gray-500"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 rounded-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;

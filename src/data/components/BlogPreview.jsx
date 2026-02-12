import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "Top Trends in Accessories for 2025",
    excerpt:
      "Discover the hottest accessory trends that are redefining style and practicality this year. Stay ahead with our curated picks!",
    image:
      "images/Trends.webp",
    category: "Trends",
  },
  {
    id: 2,
    title: "How to Style Minimalist Accessories",
    excerpt:
      "Minimalism is timeless. Learn how to pair sleek, simple accessories for a modern look that speaks volumes.",
    image:
      "images/Style Guide.webp",
    category: "Style Guide",
  },
  {
    id: 3,
    title: "Eco-Friendly Accessories You’ll Love",
    excerpt:
      "Sustainability meets style. Explore our picks of eco-friendly accessories that help the planet without sacrificing fashion.",
    image:
      "images/Sustainability.webp",
    category: "Sustainability",
  },
];

const BlogPreview = () => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Latest Articles
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Stay inspired with the latest trends, tips, and guides from our accessories experts.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full mb-4">
                  {post.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-5 flex-grow">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-block mt-auto text-yellow-600 hover:text-yellow-800 font-semibold transition duration-300"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;

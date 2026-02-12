import React, { useState } from "react";

const initialReviews = [
  {
    id: 1,
    name: "Azana Ahmed",
    rating: 5,
    comment: "Amazing quality and fast delivery!",
    date: "2025-07-14",
  },
  {
    id: 2,
    name: "Ali Rama",
    rating: 4,
    comment: "Good product, but packaging could be better.",
    date: "2025-07-13",
  },
];

const Star = ({ filled }) => (
  <span className={filled ? "text-yellow-400" : "text-gray-300"}>★</span>
);

const ProductReviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: Date.now(),
      name,
      rating: parseInt(rating),
      comment,
      date: new Date().toISOString().split("T")[0],
    };
    setReviews([newReview, ...reviews]);
    setName("");
    setRating(5);
    setComment("");
  };

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Customer Reviews</h2>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white p-4 rounded shadow-sm border border-gray-100"
          >
            <div className="flex justify-between items-center mb-1">
              <h4 className="text-md font-semibold text-gray-700">
                {review.name}
              </h4>
              <div className="text-xs text-gray-400">{review.date}</div>
            </div>
            <div className="flex mb-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} filled={index < review.rating} />
              ))}
            </div>
            <p className="text-sm text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Add Review Form */}
      <div className="mt-8 border-t pt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Leave a Review
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <select
            className="w-full border border-gray-300 p-2 rounded"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            {[5, 4, 3, 2, 1].map((rate) => (
              <option key={rate} value={rate}>
                {rate} Star{rate > 1 && "s"}
              </option>
            ))}
          </select>
          <textarea
            className="w-full border border-gray-300 p-2 rounded"
            rows="3"
            placeholder="Your Review"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductReviews;

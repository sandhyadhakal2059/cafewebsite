import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const reviews = [
    {
      name: "Aarav Shrestha",
      comment: "Amazing coffee and peaceful ambience.",
      stars: 5,
    },
    {
      name: "Nisha Karki",
      comment: "Loved the cappuccino, very cozy place.",
      stars: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
          Rate Your Experience
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Your feedback helps us serve you better ☕
        </p>

        {/* Rating Box */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-14">
          <h3 className="text-xl font-semibold text-center mb-6">
            How was your visit?
          </h3>

          {/* Stars */}
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, index) => {
              const starValue = index + 1;
              return (
                <FaStar
                  key={index}
                  size={32}
                  className="cursor-pointer transition"
                  color={starValue <= (hover || rating) ? "#f59e0b" : "#d1d5db"}
                  onClick={() => setRating(starValue)}
                  onMouseEnter={() => setHover(starValue)}
                  onMouseLeave={() => setHover(0)}
                />
              );
            })}
          </div>

          {/* Review Input */}
          <textarea
            placeholder="Write your review..."
            className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
            rows="4"
          />

          <button
            className="mt-4 w-full bg-secondary text-white py-3 rounded-lg hover:bg-amber-600 transition"
          >
            Submit Review
          </button>
        </div>

        {/* Existing Reviews */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            What Our Customers Say
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            {reviews.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="flex mb-2">
                  {[...Array(item.stars)].map((_, i) => (
                    <FaStar key={i} className="text-amber-500" />
                  ))}
                </div>

                <p className="text-gray-600 text-sm mb-3">
                  “{item.comment}”
                </p>

                <h4 className="font-semibold text-gray-800">
                  — {item.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Rating;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const [reviews, setReviews] = useState([]);
  const [stats, setStats] = useState({
    averageRating: 0,
    totalReviews: 0,
  });

  /* LOAD DATA */
  useEffect(() => {
    loadRatings();
    loadStats();
  }, []);

  const loadRatings = async () => {
    const res = await axios.get("http://localhost:5000/api/ratings");
    setReviews(res.data);
  };

  const loadStats = async () => {
    const res = await axios.get("http://localhost:5000/api/ratings/stats");
    setStats(res.data);
  };

  /* SUBMIT */
  const submitReview = async () => {
    if (!name || !comment || rating === 0) {
      alert("Please fill all fields");
      return;
    }

    await axios.post("http://localhost:5000/api/ratings", {
      name,
      stars: rating,
      comment,
    });

    setName("");
    setComment("");
    setRating(0);
    loadRatings();
    loadStats();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-2">
          Rate Your Experience
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Your feedback helps us serve you better ☕
        </p>

        {/* STATS */}
        <div className="flex justify-center gap-6 mb-10">
          <div className="bg-white px-6 py-3 rounded-xl shadow flex items-center gap-2">
            <FaStar className="text-amber-500" />
            <span className="font-semibold">
              {stats.averageRating.toFixed(1)} / 5
            </span>
          </div>

          <div className="bg-white px-6 py-3 rounded-xl shadow text-gray-600">
            {stats.totalReviews} Reviews
          </div>
        </div>

        {/* SUBMIT REVIEW */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-14">
          <h3 className="text-xl font-semibold text-center mb-6">
            How was your visit?
          </h3>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          {/* Stars */}
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, index) => {
              const starValue = index + 1;
              return (
                <FaStar
                  key={index}
                  size={32}
                  className="cursor-pointer transition"
                  color={
                    starValue <= (hover || rating)
                      ? "#f59e0b"
                      : "#d1d5db"
                  }
                  onClick={() => setRating(starValue)}
                  onMouseEnter={() => setHover(starValue)}
                  onMouseLeave={() => setHover(0)}
                />
              );
            })}
          </div>

          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your review..."
            className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
            rows="4"
          />

          <button
            onClick={submitReview}
            className="mt-4 w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Submit Review
          </button>
        </div>

        {/* REVIEWS */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            What Our Customers Say
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            {reviews.map((item) => (
              <div
                key={item._id}
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

import React from "react";
import coffee1 from "../assets/coffee1.jpeg";
import coffee2 from "../assets/coffee2.jpeg";
import coffee3 from "../assets/coffee3.jpeg";

const images = [
  {
    src: coffee1,
    title: "Espresso",
    description: "A bold and concentrated coffee with deep aroma and rich intensity.",
  },
  {
    src: coffee2,
    title: "Cappuccino",
    description: "Perfectly balanced espresso, steamed milk, and soft foam.",
  },
  {
    src: coffee3,
    title: "Americano",
    description: "Smooth espresso diluted with hot water for a lighter finish.",
  },
];

export default function AboutImages() {
  return (
    <div className="py-16 bg-white">

      {/* Heading — appears BEFORE cards */}
      <h2
        data-aos="fade-up"
        data-aos-delay="0"
        className="text-3xl font-semibold text-center mb-14 text-gray-800"
      >
        Best Coffee For Coffee Lovers
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        {images.map((img, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={200 + index * 200}   // ⭐ stagger magic
            className="
              group bg-white rounded-2xl w-64 p-4
              shadow-sm hover:shadow-xl
              transition-all duration-500 ease-out
              hover:-translate-y-2
            "
          >
            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={img.src}
                alt={img.title}
                className="
                  w-full h-40 object-cover
                  transition-transform duration-500 ease-out
                  group-hover:scale-105
                "
              />
            </div>

            {/* Text */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                {img.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                {img.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

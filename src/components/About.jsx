import React from "react";
import cafeImg1 from "../assets/cafe1.jpg";
import AboutImages from "./AboutImages";

function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-16 px-4">
      {/* pt-28 pushes content below navbar (~112px) */}
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Section 1: About Sakhe Cafe */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">

          {/* Image Left — SIMPLE transition */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden mx-auto w-3/4 md:w-2/3">
            <img
              src={cafeImg1}
              alt="Sakhe Cafe Interior"
              className="w-full h-32 md:h-48 lg:h-56 object-cover"
            />
          </div>

          {/* Text Right — SIMPLE transition */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Welcome to Sakhe Cafe
            </h1>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Sakhe Cafe is a cozy spot where you can enjoy authentic coffee,
              local flavors, and a friendly ambiance. Whether you're studying,
              catching up with friends, or just relaxing, we offer a comfortable
              environment for everyone.
            </p>
          </div>

        </div>

        {/* Section 2: Coffee Images */}
        <AboutImages />

      </div>
    </div>
  );
}

export default About;
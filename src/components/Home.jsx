import React from "react";
import ReservationIcon from "./ReservationIcon";
import Menu from "./Menu";

const Home = () => {
  return (
    <>
      {/* HOME SECTION */}
      <section
        id="home"
        className="bg-white text-black min-h-screen flex items-center"
      >
        <div className="container mx-auto px-4 py-12 sm:py-24 flex flex-col sm:flex-row items-center gap-12">

          {/* Text Section */}
          <div className="sm:w-1/2 flex flex-col justify-center gap-6 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Sip, Crunch, Smile <br />
              <span className="text-primary">All in One Place</span>
            </h1>

            <p className="text-gray-600 text-lg sm:text-xl max-w-lg leading-relaxed">
              Coffee isn’t just a drink — it’s an invitation to laugh, share stories,
              and catch up on the latest gossip.
            </p>

            {/* Button behavior untouched */}
            <ReservationIcon />
          </div>

          {/* Image Section */}
          <div
            className="sm:w-1/2 flex justify-center items-center"
            style={{ perspective: "1000px" }}
          >
            <img
              src="/bg.jpg"
              alt="coffee"
              className="w-80 sm:w-96 md:w-[400px] animate-flip-xy rounded-xl shadow-xl"
              style={{ transformStyle: "preserve-3d" }}
            />
          </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <Menu />
    </>
  );
};

export default Home;
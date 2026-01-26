import React from "react";
import { ArrowLeft } from "lucide-react";

// images
import EspressoImg from "../assets/Espresso.jpeg";
import CappuccinoImg from "../assets/Cappuccino.jpeg";
import LatteImg from "../assets/Latte.jpeg";
import MochaImg from "../assets/Mocha.jpeg";
import IcedLatteImg from "../assets/IcedLatte.jpeg";

const coffeeMenu = [
  { name: "Espresso", price: "Rs. 120", img: EspressoImg },
  { name: "Cappuccino", price: "Rs. 180", img: CappuccinoImg },
  { name: "Latte", price: "Rs. 200", img: LatteImg },
  { name: "Mocha", price: "Rs. 220", img: MochaImg },
  { name: "Iced Latte", price: "Rs. 210", img: IcedLatteImg },
];

const Coffee = () => {
  const backToMenu = () => {
    const menu = document.getElementById("menu");
    if (menu) {
      menu.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#menu";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 pb-10 pt-32">
      {/* pt-32 pushes content below fixed navbar */}

      <h1 className="text-4xl font-bold mb-12 text-center">
        Coffee Menu ☕
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {coffeeMenu.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition flex flex-col items-center"
          >
            {/* Image container */}
            <div className="w-full h-56 flex items-center justify-center bg-gray-100">
              <img
                src={item.img}
                alt={item.name}
                className="max-h-full max-w-full object-contain p-4"
              />
            </div>

            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-700 mt-2">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Back Arrow */}
      <div className="flex justify-center mt-20">
        <button
          onClick={backToMenu}
          className="p-4 rounded-full bg-white shadow-md hover:shadow-xl transition text-primary"
          aria-label="Back to menu"
        >
          <ArrowLeft size={28} />
        </button>
      </div>
    </div>
  );
};

export default Coffee;

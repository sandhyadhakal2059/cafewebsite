import React from "react";
import cocaCola from "../assets/coca_cola.jpeg";
import orangeJuice from "../assets/orange_juice.jpeg";
import lemonade from "../assets/lemonade.jpeg";
import icedCoffee from "../assets/iced_coffee.jpeg";
import BackToMenu from "./BackToMenu";

const coldDrinksMenu = [
  { name: "Coca Cola", price: "RS 80", img: cocaCola },
  { name: "Orange Juice", price: "RS 100", img: orangeJuice },
  { name: "Lemonade", price: "RS 90", img: lemonade },
  { name: "Iced Coffee", price: "RS 150", img: icedCoffee },
];

const ColdDrinks = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 pb-10 pt-32">
      {/* pt-32 pushes content below fixed navbar */}

      <h1 className="text-4xl font-bold mb-12 text-center">
        Cold Drinks Menu 🧊
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {coldDrinksMenu.map((item, index) => (
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

      {/* Back arrow only */}
      <div className="flex justify-center mt-20">
        <BackToMenu />
      </div>
    </div>
  );
};

export default ColdDrinks;

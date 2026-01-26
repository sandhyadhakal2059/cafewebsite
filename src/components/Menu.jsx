import React from "react";
import { Link } from "react-router-dom";
import { Coffee, CupSoda, IceCream as IceCreamIcon, Leaf, ArrowRightCircle, Pizza } from "lucide-react";

// Import Images
import coffeeImg from "../assets/coffee.jpeg";
import teaImg from "../assets/tea.jpeg";
import coldDrinkImg from "../assets/cold-drink.jpeg";
import snacksImg from "../assets/snacks.jpeg";
import iceCreamImg from "../assets/ice-cream.jpeg";

const menuData = [
  {
    title: "Coffee",
    image: coffeeImg,
    icon: <Coffee className="w-8 h-8 text-white" />,
    items: ["Espresso", "Cappuccino", "Latte", "Mocha"],
    path: "/menu/coffee",
  },
  {
    title: "Tea",
    image: teaImg,
    icon: <Leaf className="w-8 h-8 text-white" />,
    items: ["Milk Tea", "Green Tea", "Black Tea", "Lemon Tea"],
    path: "/menu/tea",
  },
  {
    title: "Cold Drinks",
    image: coldDrinkImg,
    icon: <CupSoda className="w-8 h-8 text-white" />,
    items: ["Iced Coffee", "Cold Brew", "Lemonade", "Soft Drinks"],
    path: "/menu/cold-drinks",
  },
  {
    title: "Snacks",
    image: snacksImg,
    icon: <Pizza className="w-8 h-8 text-white" />,
    items: ["Sandwich", "Burger", "Fries", "Momos"],
    path: "/menu/snacks",
  },
  {
    title: "Ice Cream",
    image: iceCreamImg,
    icon: <IceCreamIcon className="w-8 h-8 text-white" />,
    items: ["Vanilla", "Chocolate", "Strawberry", "Butterscotch"],
    path: "/menu/icecream", // 
  },
];

const Menu = () => {
  return (
    <section id="menu" className="bg-gray-50 pt-24 pb-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-black mb-16">Our Menu ☕</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuData.map((menu, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300 relative"
            >
              <div className="relative mb-8">
                <img
                  src={menu.image}
                  alt={menu.title}
                  className="w-full h-40 object-cover rounded-xl"
                />
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md p-3 rounded-full">
                  {menu.icon}
                </div>
                <Link
                  to={menu.path}
                  className="absolute top-3 right-3 bg-white/90 p-2 rounded-full shadow hover:bg-white transition"
                  title={`View ${menu.title} Menu`}
                >
                  <ArrowRightCircle className="w-6 h-6 text-secondary" />
                </Link>
              </div>

              <h3 className="text-2xl font-semibold text-center mb-4 mt-4 text-black">{menu.title}</h3>
              <ul className="space-y-2 text-center text-black">
                {menu.items.map((item, i) => (
                  <li key={i} className="opacity-90 hover:opacity-100 transition">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
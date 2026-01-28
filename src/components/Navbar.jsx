import React from "react";
import logo from "../assets/newlogo.png";

const Navbar = () => {
  return (
    <div className="bg-white fixed w-full z-50 shadow-sm border-b">
      <div className="container py-3 mx-auto flex justify-between items-center gap-4">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-1">
          <img src={logo} alt="Sakhe Cafe Logo" className="h-16" />
          <span className="text-black font-mono tracking-widest">
            SAKHE
          </span>
        </a>

        {/* Nav Links */}
        <div className="flex items-center space-x-6 text-black font-medium">
          <a href="/home" className="hover:text-primary transition">
            Home
          </a>
          <a href="/about" className="hover:text-primary transition">
            About
          </a>
          <a href="/menu" className="hover:text-primary transition">
            Menu
          </a>
          <a href="/contact" className="hover:text-primary transition">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

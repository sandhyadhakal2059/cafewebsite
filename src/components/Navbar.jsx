import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import logo from "../assets/newlogo.png";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }

    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white fixed w-full z-50 shadow-sm border-b">
      <div className="container py-3 mx-auto flex justify-between items-center gap-4">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-1"
        >
          <img src={logo} alt="Sakhe Cafe Logo" className="h-16" />
          <span className="text-black text-pretty font-mono tracking-widest">
            SAKHE
          </span>
        </a>

        {/* Nav Links */}
        <div className="flex items-center space-x-6 relative text-black font-medium">
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

          {/* Search */}
          <div className="relative">
            <button
              className="text-xl text-black hover:text-primary transition"
              onClick={() => setShowSearch(!showSearch)}
            >
              <FiSearch />
            </button>

            {showSearch && (
              <input
                type="text"
                placeholder="Search menu..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="absolute right-0 top-10 w-48 px-3 py-2 rounded-md shadow-md border outline-none bg-white text-black"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
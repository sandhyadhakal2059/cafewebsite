import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutPage from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";
import Coffee from "./components/Coffee";
import Tea from "./components/Tea";
import ColdDrinks from "./components/ColdDrinks";
import Snacks from "./components/Snacks";
import IceCream from "./components/IceCream";
import Rating from "./components/Rating"; 

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/coffee" element={<Coffee />} />
            <Route path="/menu/tea" element={<Tea />} />
            <Route path="/menu/cold-drinks" element={<ColdDrinks />} />
            <Route path="/menu/snacks" element={<Snacks />} />
            <Route path="/menu/icecream" element={<IceCream />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reservation" element={<Reservation />} />

          
            <Route path="/rating" element={<Rating />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

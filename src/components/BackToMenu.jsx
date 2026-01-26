import React from "react";
import { ArrowLeft } from "lucide-react";

const BackToMenu = () => {
  const goToMenu = () => {
    const menu = document.getElementById("menu");
    if (menu) {
      menu.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#menu";
    }
  };

  return (
    <button
      onClick={goToMenu}
      aria-label="Back to menu"
      className="p-3 rounded-full bg-white shadow-md hover:shadow-xl transition text-secondary"
    >
      <ArrowLeft size={24} />
    </button>
  );
};

export default BackToMenu;

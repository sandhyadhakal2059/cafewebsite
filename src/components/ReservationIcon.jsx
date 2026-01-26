import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ReservationIcon = () => {
  const navigate = useNavigate();

  return (
    <button
      className="mt-6 flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition"
      onClick={() => navigate("/reservation")}
    >
      <FaRegCalendarAlt size={20} />
      Reserve Now
    </button>
  );
};

export default ReservationIcon;

import React, { useState } from "react";
import reservationImg from "../assets/reservation.jpg";

const tables = [
  { id: 1, number: 1, status: "available" },
  { id: 2, number: 2, status: "available" },
  { id: 3, number: 3, status: "available" },
  { id: 4, number: 4, status: "available" },
];

const ReservationPage = () => {
  const [selectedTable, setSelectedTable] = useState("");

  const availableTables = tables.filter(
    (table) => table.status === "available"
  );

  return (
    <section id="reservation" className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE FORM */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-black text-center md:text-left">
              Reserve Your Table
            </h2>

            <p className="text-gray-600 mb-6 text-center md:text-left">
              Pick a table, choose your time, and enjoy the cozy ambiance of Sakhe Cafe.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-primary outline-none"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-primary outline-none"
                required
              />

              {/* TABLE SELECT DROPDOWN */}
              <select
                value={selectedTable}
                onChange={(e) => setSelectedTable(e.target.value)}
                className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-primary outline-none"
                required
              >
                <option value="">Select Table Number</option>
                {availableTables.map((table) => (
                  <option key={table.id} value={table.number}>
                    Table {table.number}
                  </option>
                ))}
              </select>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="date"
                  className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-primary outline-none"
                  required
                />
                <input
                  type="time"
                  className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-primary outline-none"
                  required
                />
              </div>

              <input
                type="number"
                placeholder="Number of Guests"
                min="1"
                className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-primary outline-none"
                required
              />

              <button
                type="submit"
                className="w-full bg-secondary text-white py-4 rounded-2xl hover:opacity-90 transition font-semibold"
              >
                Book Table
              </button>
            </form>
          </div>

          {/* RIGHT SIDE IMAGE + TEXT */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src={reservationImg}
              alt="Cafe Reservation"
              className="w-full max-w-md h-64 md:h-80 object-cover rounded-2xl shadow-lg mb-6"
            />

            <p className="text-gray-700 text-lg md:text-xl">
              Reserve your seat, unwind, and let every sip bring comfort in a cozy ambiance.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReservationPage;
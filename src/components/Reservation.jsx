import React, { useEffect, useState } from "react";
import axios from "axios";
import reservationImg from "../assets/reservation.jpg";

const fallbackTables = [
  { number: 1, status: "available" },
  { number: 2, status: "available" },
  { number: 3, status: "available" },
  { number: 4, status: "available" },
  { number: 5, status: "available" },
];

const ReservationPage = () => {
  const [tables, setTables] = useState(fallbackTables);
  const [selectedTable, setSelectedTable] = useState(null);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  /* LOAD TABLES */
  useEffect(() => {
    axios.get("http://localhost:5000/api/init").catch(() => {});
    axios
      .get("http://localhost:5000/api/tables")
      .then((res) => setTables(res.data))
      .catch(() => setTables(fallbackTables));
  }, []);

  /* RESERVE */
  const reserveTable = async () => {
    if (!name || !date || !time || !selectedTable) {
      setMessage("❌ Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      await axios.post("http://localhost:5000/api/reserve", {
        name,
        tableNumber: selectedTable,
        date,
        time,
      });

      setMessage("✅ Table reserved successfully!");

      const res = await axios.get("http://localhost:5000/api/tables");
      setTables(res.data);

      setSelectedTable(null);
      setName("");
      setDate("");
      setTime("");
    } catch {
      setMessage("❌ Table already reserved");
    } finally {
      setLoading(false);
    }
  };

  /* TABLE COLOR */
  const getBg = (table) => {
    if (selectedTable === table.number) return "bg-blue-600";
    if (table.status === "reserved") return "bg-red-500";
    return "bg-secondary"; // available
  };

  return (
    <section className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl font-bold mb-4 text-black text-center md:text-left">
              Reserve Your Table
            </h2>

            <p className="text-gray-600 mb-6 text-center md:text-left">
              Pick a table, choose your time, and enjoy the cozy ambiance of Sakhe Cafe.
            </p>

            {message && (
              <div
                className={`mb-4 p-3 rounded-lg text-center font-semibold ${
                  message.startsWith("✅")
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {message}
              </div>
            )}

            {/* FORM */}
            <div className="space-y-4">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-secondary outline-none"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-secondary outline-none"
                />
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-secondary outline-none"
                />
              </div>

              {/* TABLE GRID */}
              <div className="grid grid-cols-5 gap-4 mt-6">
                {tables.map((table) => (
                  <div
                    key={table.number}
                    onClick={() =>
                      table.status !== "reserved" &&
                      setSelectedTable(table.number)
                    }
                    className={`h-16 rounded-xl text-white flex items-center justify-center font-bold cursor-pointer transition
                      ${getBg(table)}
                      ${
                        table.status === "reserved"
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:scale-105"
                      }
                      ${
                        selectedTable === table.number
                          ? "ring-4 ring-blue-300"
                          : ""
                      }
                    `}
                  >
                    T{table.number}
                  </div>
                ))}
              </div>

              {/* LEGEND */}
              <div className="flex justify-between text-sm text-gray-600 pt-3">
                <span className="text-secondary font-medium">⬤ Available</span>
                <span className="text-red-500 font-medium">⬤ Reserved</span>
                <span className="text-blue-600 font-medium">⬤ Selected</span>
              </div>

              <button
                onClick={reserveTable}
                disabled={loading}
                className="w-full bg-secondary text-white py-4 rounded-2xl font-semibold hover:opacity-90 transition disabled:opacity-60"
              >
                {loading ? "Reserving..." : "Book Table"}
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
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
